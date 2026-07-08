/**
 * PERSISTENCE SERVICE - JAPÓN 2026
 * Maneja el guardado de datos localmente y está preparado para sincronizar con la nube.
 */

const Persistence = {
    // Clave base para los datos del viaje
    BASE_KEY: 'jap-2026-',

    /**
     * Actualiza el indicador visual de conexión con la nube
     */
    updateCloudStatusUI(status) {
        const el = document.getElementById('cloud-status-indicator');
        if (!el) return;
        if (status === 'connected') {
            el.innerHTML = '<span style="color:var(--success); font-size:0.75rem; display:flex; align-items:center; gap:5px;"><i class="fa-solid fa-cloud"></i> Nube Sincronizada</span>';
        } else if (status === 'error') {
            el.innerHTML = '<span style="color:var(--danger); font-size:0.75rem; cursor:pointer; display:flex; align-items:center; gap:5px;" onclick="alert(\'La base de datos en la nube está pausada por inactividad (o no tienes conexión a Internet).\\n\\nPara solucionarlo:\\n1. Inicia sesión en tu cuenta de Supabase.com.\\n2. Entra en tu proyecto y pulsa \\\'Restore Project\\\'.\\n3. En un par de minutos tu base de datos volverá a estar online y se sincronizará todo automáticamente.\')"><i class="fa-solid fa-cloud-slash"></i> Nube Desconectada (Clic aquí)</span>';
        } else if (status === 'connecting') {
            el.innerHTML = '<span style="color:var(--gold); font-size:0.75rem; display:flex; align-items:center; gap:5px;"><i class="fa-solid fa-spinner fa-spin"></i> Conectando nube...</span>';
        }
    },

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
                this.updateCloudStatusUI('error');
            } else {
                this.updateCloudStatusUI('connected');
            }
        } catch (err) {
            console.error('Supabase: Fallo de red/conexión:', err);
            this.updateCloudStatusUI('error');
        }
    },

    /**
     * Inicializa la sincronización descargando los datos de la nube
     */
    async initCloudSync() {
        if (!window.supabaseClient) {
            console.warn('Supabase: No se puede iniciar sincronización, cliente no disponible.');
            this.updateCloudStatusUI('error');
            return;
        }

        this.updateCloudStatusUI('connecting');
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
            this.updateCloudStatusUI('connected');
        } catch (err) {
            console.error('Supabase: Error en descarga inicial:', err);
            this.updateCloudStatusUI('error');
        }
    }
};

window.Persistence = Persistence;
