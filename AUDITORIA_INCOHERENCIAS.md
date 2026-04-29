# Auditoría de Incoherencias y Mejoras de Transporte - Japón 2026

Este documento detalla las discrepancias encontradas entre la información actual de la web y los nuevos archivos de logística proporcionados, así como las mejoras sugeridas para la integración.

## 1. Verificación de Datos de Transporte

| Día | Tramo / Información | Estado en Web Actual | Información Nueva (md) | Acción Sugerida |
|:---|:---|:---|:---|:---|
| **1** | Llegada KIX | Menciona llegada. | "Haruka Express a Osaka (50 min)". | Añadir "Haruka Express" y el tiempo estimado al timeline. |
| **5** | Osaka -> Nara | Menciona JR. | Menciona "Kintetsu Nara Line" (más céntrica). | Ofrecer Kintetsu como opción preferente si no se usa JR Pass. |
| **11** | Kioto -> Alpes | Menciona Nozomi + Hida. | **Crítico:** Alerta de transbordo en Nagoya (Vías 10-11). | Insertar alerta visual roja en el timeline de transporte del Día 11. |
| **13** | Fuji (Coche) | Menciona alquiler. | Instrucciones de recogida en Toyota/Budget. | Añadir IDs de guía táctica para la recogida del vehículo. |
| **16** | Fuji -> Tokio | Menciona Fuji Excursion. | "Reserva obligatoria 1 mes antes". | Asegurar que la alerta de reserva aparezca 30 días antes. |
| **23** | Traslado Haneda | Menciona Taxi. | "Taxis furgoneta Nissan NV200 (8 pax)". | Añadir nota técnica sobre el tipo de taxi para el grupo grande. |

## 2. Nuevos Apartados de Preparativos (Día 0)

### A. Calendario de Reservas (Hitos)
- **6 Meses:** Vuelos y Alojamientos (Ya incluido).
- **1 Mes:** Shinkansen (SmartEX), Fuji Excursion, Shibuya Sky, TeamLab, Ghibli (si aplica).
- **En el viaje:** Takkyubin (24h antes de cada traslado largo).

### B. Compras de Transporte
- **Digital:** Suica/Pasmo en Apple Wallet / Google Pay.
- **Físico:** Welcome Suica (si no hay stock de chips).
- **Pases:** JR Pass (Verificar rentabilidad), Kintetsu Rail Pass.

## 3. Notas sobre Sincronización (Persistencia)
Se ha detectado que la persistencia en `localStorage` funciona correctamente para el usuario local, pero para que el grupo de 8 vea los mismos "checks", la función `Persistence.syncToCloud()` debe ser llamada explícitamente tras cada cambio. Actualmente ya lo hace, pero revisaré si hay algún cuello de botella en la carga inicial de datos desde Supabase.

---
*Documento generado para revisión del usuario antes de la modificación final de los archivos de datos.*
