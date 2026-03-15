/**
 * PERSISTENCE SERVICE - JAPÓN 2026
 * Maneja el guardado de datos localmente y está preparado para sincronizar con la nube.
 */

const Persistence = {
    // Clave base para los datos del viaje
    BASE_KEY: 'jap-2026-',

    /**
     * Obtiene un valor de la persistencia
     * @param {string} key 
     * @returns {string|null}
     */
    getItem(key) {
        return localStorage.getItem(this.BASE_KEY + key);
    },

    /**
     * Guarda un valor en la persistencia
     * @param {string} key 
     * @param {string} value 
     */
    setItem(key, value) {
        localStorage.setItem(this.BASE_KEY + key, value);
        
        // Aquí podríamos disparar una sincronización con Supabase/Firebase
        console.log(`Guardado local: ${key} = ${value}`);
        this.syncToCloud(key, value);
    },

    /**
     * Elimina un valor de la persistencia
     * @param {string} key 
     */
    removeItem(key) {
        localStorage.removeItem(this.BASE_KEY + key);
        this.syncToCloud(key, null);
    },

    /**
     * Función preparada para sincronizar con una DB compartida (Supabase)
     * @param {string} key 
     * @param {string|null} value 
     */
    async syncToCloud(key, value) {
        if (!window.supabaseClient) return;

        try {
            const { error } = await window.supabaseClient
                .from('travel_checks')
                .upsert({ 
                    key: this.BASE_KEY + key, 
                    value: value,
                    updated_at: new Date()
                }, { onConflict: 'key' });

            if (error) {
                console.error('Supabase: Error en upsert:', error);
            }
        } catch (err) {
            console.error('Supabase: Fallo de red/conexión:', err);
        }
    },

    /**
     * Inicializa la sincronización descargando los datos de la nube
     */
    async initCloudSync() {
        if (!window.supabaseClient) {
            console.warn('Supabase: No se puede iniciar sincronización, cliente no disponible.');
            return;
        }

        console.log('Supabase: Iniciando descarga de datos...');
        try {
            const { data, error } = await window.supabaseClient
                .from('travel_checks')
                .select('*');

            if (error) throw error;

            if (data && data.length > 0) {
                data.forEach(row => {
                    if (row.value !== null && row.value !== undefined) {
                        localStorage.setItem(row.key, row.value);
                    } else {
                        localStorage.removeItem(row.key);
                    }
                });
                console.log(`Supabase: Sincronizados ${data.length} ítems desde la nube`);
                
                // Forzar recarga de la UI si estamos en preparativos
                if (typeof window.renderPreparationPage === 'function' && window.travelData && window.travelData[0]) {
                    window.renderPreparationPage(window.travelData[0]);
                }
            } else {
                console.log('Supabase: No hay datos remotos aún.');
            }
        } catch (err) {
            console.error('Supabase: Error en descarga inicial:', err);
        }
    }
};

window.Persistence = Persistence;
