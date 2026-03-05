import re, io

with io.open('data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Agregar exactDate a los días
dates = {
    r'day:\s*4\s*,': 'day: 4, exactDate: "2026-07-29",',
    r'day:\s*6\s*,': 'day: 6, exactDate: "2026-08-01",',
    r'day:\s*7\s*,': 'day: 7, exactDate: "2026-08-02",',
    r'day:\s*8\s*,': 'day: 8, exactDate: "2026-08-03",',
    r'day:\s*11\s*,': 'day: 11, exactDate: "2026-08-06",',
    r'day:\s*12\s*,': 'day: 12, exactDate: "2026-08-07",',
    r'day:\s*13\s*,': 'day: 13, exactDate: "2026-08-08",',
    r'day:\s*18\s*,': 'day: 18, exactDate: "2026-08-13",',
    r'day:\s*19\s*,': 'day: 19, exactDate: "2026-08-14",'
}
for pat, repl in dates.items():
    text = re.sub(pat, repl, text, count=1)

# 2. Agregar el Panel de Reservas al Día 0
booking_panel_cfg = '''
        bookingPanel: {
            title: "Control Maestro de Reservas Críticas",
            phases: [
                {
                    name: "FASE 1: 2-3 Meses Antes",
                    color: "var(--neon-purple)",
                    items: [
                        { name: "Coches de Alquiler en Fuji (2 Honda Fit)", status: "pending", date: "2-3 meses antes" },
                        { name: "TeamLab Planets (Tokio)", status: "pending", date: "Exactamente 2 meses antes" },
                        { name: "Palacio Imperial de Kioto", status: "pending", date: "Exactamente 2 meses antes" }
                    ]
                },
                {
                    name: "FASE 2: 1 Mes Antes (CRÍTICA)",
                    color: "var(--danger)",
                    items: [
                        { name: "Bus Takayama-Fuji (Highwaybus)", status: "pending", date: "Exactamente 1 mes antes" },
                        { name: "Shibuya Sky (Atardecer)", status: "pending", date: "Exactamente 4 semanas antes" },
                        { name: "Tren Romántico de Arashiyama", status: "pending", date: "Exactamente 1 mes antes" },
                        { name: "Shinkansen Kioto-Nagoya", status: "pending", date: "Exactamente 1 mes antes" },
                        { name: "Bus Nohi Shirakawa-go", status: "pending", date: "Exactamente 1 mes antes" }
                    ]
                },
                {
                    name: "FASE 3: 2-3 Semanas Antes",
                    color: "var(--gold)",
                    items: [
                        { name: "Samurai & Ninja Museum (Kioto)", status: "pending", date: "2-3 semanas antes" },
                        { name: "Acuario Kaiyukan (Osaka)", status: "pending", date: "1-2 semanas antes" }
                    ]
                }
            ]
        },
'''
if "bookingPanel" not in text:
    text = re.sub(r'(day:\s*0.*?)preparation:\s*\{', r'\1' + booking_panel_cfg.strip('\n') + r'\n        preparation: {\n', text, flags=re.DOTALL)


# 3. Inject booking payloads to specific tickets
def inject_booking(title_match, booking_json):
    global text
    # Not using f-strings to avoid SyntaxError with braces
    pattern_string = r'(title:\s*"' + title_match + r'".*?)(?=\n\s*\}(?:\n|,))'
    pattern = re.compile(pattern_string, re.DOTALL)
    def replacer(m):
        return m.group(1) + ',\n                    booking: ' + booking_json
    if booking_json not in text:
        text = pattern.sub(replacer, text, count=1)

inject_booking("Acuario Kaiyukan", '{ id: "bk_kaiyukan", timeframe: "1-2 semanas antes", required: true, link: "https://www.kaiyukan.com/language/eng/" }')
inject_booking("Palacio Imperial", '{ id: "bk_imperial", timeframe: "Exactamente 2 meses antes", required: true, link: "https://sankan.kunaicho.go.jp/english/" }')
inject_booking("Samurai & Ninja Museum.*", '{ id: "bk_samurai", timeframe: "2-3 semanas antes", required: true, link: "https://mai-ko.com/samurai/" }')
inject_booking("Shinkansen Nozomi a Nagoya", '{ id: "bk_shinkansen", timeframe: "1 mes antes (App SmartEX)", required: true, link: "https://smart-ex.jp/en/index.php" }')
inject_booking("Bus Nohi hacia Okuhida.*?", '{ id: "bk_nohi_okuhida", timeframe: "1 mes antes", required: true, link: "https://www.nouhibus.co.jp/english/" }')
inject_booking("Expreso Takayama.*Kawaguchiko", '{ id: "bk_bus_fuji", timeframe: "Exactamente 1 mes antes (09:00 AM Japón)", required: true, link: "https://highway-buses.jp/course/kawaguchiko.php" }')
inject_booking("Recogida de Coche \(Budget\)", '{ id: "bk_coches", timeframe: "2-3 meses antes", required: true, link: "https://www.budgetrentacar.co.jp/en/" }')
inject_booking("Shibuya Sky", '{ id: "bk_shibuya", timeframe: "Exactamente 4 semanas antes (00:00 Japón)", required: true, link: "https://www.shibuya-scramble-square.com/en/sky/ticket/" }')
inject_booking("TeamLab Planets TOKYO", '{ id: "bk_teamlab", timeframe: "Meses de antelación", required: true, link: "https://planets.teamlab.art/tokyo/es/tickets" }')
inject_booking("El Rayo Escénico", '{ id: "bk_romantico", timeframe: "1 mes antes exacto (JR West)", required: true, link: "https://www.klook.com/es/activity/1879-sagano-romantic-train-ticket-kyoto/?lang=es" }')

with io.open('data.js', 'w', encoding='utf-8') as f:
    f.write(text)

print("done")
