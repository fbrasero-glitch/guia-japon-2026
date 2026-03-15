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
        if (!window.supabase) return;

        try {
            const { error } = await window.supabase
                .from('travel_checks')
                .upsert({ 
                    key: this.BASE_KEY + key, 
                    value: value,
                    updated_at: new Date()
                }, { onConflict: 'key' });

            if (error) console.error('Error sincronizando con la nube:', error);
        } catch (err) {
            console.error('Fallo en la conexión cloud:', err);
        }
    },

    /**
     * Inicializa la sincronización descargando los datos de la nube
     */
    async initCloudSync() {
        if (!window.supabase) return;

        try {
            const { data, error } = await window.supabase
                .from('travel_checks')
                .select('*');

            if (error) throw error;

            if (data) {
                data.forEach(row => {
                    // Guardar en localStorage lo que viene de la nube si es más reciente
                    // (Simplificación: la nube manda)
                    localStorage.setItem(row.key, row.value);
                });
                console.log('Sincronización inicial completada');
                // Forzar recarga si estamos en el día de preparación
                if (window.renderPreparationPage && travelData[0]) {
                    renderPreparationPage(travelData[0]);
                }
            }
        } catch (err) {
            console.warn('No se pudo sincronizar con la nube:', err);
        }
    }
};

window.Persistence = Persistence;
