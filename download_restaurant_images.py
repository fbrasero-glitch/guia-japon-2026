import os
import re
from icrawler.builtin import BingImageCrawler

restaurants = [
    {"id": "shinsaibashi-maruhana", "name": "Japanese Buffet Dining Shinsaibashi Maruhana", "query": "蟹寿司和牛食べ放題 蟹屋 丸花 心斎橋店"},
    {"id": "unagiya-hanamichi-shinsaibashi", "name": "Unagiya Hanamichi Shinsaibashi", "query": "うなぎや花道 心斎橋店 うな丼"},
    {"id": "yakiniku-rikimaru-dotonbori", "name": "Yakiniku Rikimaru Dotonbori", "query": "焼肉 力丸 道頓堀店 焼肉"},
    {"id": "wagyu-seafood-ichiraku-dotonbori", "name": "Wagyu and Seafood Ichiraku Dotonbori", "query": "和牛海鮮一楽 道頓堀店"},
    {"id": "wagyu-idaten-namba", "name": "Wagyu IDATEN", "query": "匠のお重 和牛 韋駄天 難波"},
    {"id": "nikuya-dotonbori", "name": "Nikuya Dotonbori", "query": "肉ya 道頓堀店 焼肉"},
    {"id": "dekasan-osaka", "name": "Dekasan Osaka", "query": "デカサン 大阪 サンドイッチ"}
]

# Directorio de destino
base_dir = "images/restaurantes"
if not os.path.exists(base_dir):
    os.makedirs(base_dir)

print(f"--- Iniciando descarga de {len(restaurants)} imágenes ---")

for rest in restaurants:
    print(f"Descargando imagen para: {rest['name']}...")
    
    # Creamos una carpeta temporal para icrawler (porque descarga múltiples)
    temp_dir = os.path.join(base_dir, "temp")
    if not os.path.exists(temp_dir):
        os.makedirs(temp_dir)
        
    crawler = BingImageCrawler(storage={'root_dir': temp_dir})
    crawler.crawl(keyword=rest['query'], max_num=1)
    
    # Buscamos el archivo descargado y lo renombramos
    downloaded_files = os.listdir(temp_dir)
    if downloaded_files:
        # icrawler suele bajar 000001.jpg, .png, etc.
        old_file = os.path.join(temp_dir, downloaded_files[0])
        ext = os.path.splitext(downloaded_files[0])[1]
        new_file_name = f"{rest['id']}{ext}"
        new_path = os.path.join(base_dir, new_file_name)
        
        # Eliminar si ya existe para sobrescribir
        if os.path.exists(new_path):
            os.remove(new_path)
            
        os.rename(old_file, new_path)
        print(f"  > Guardado como: {new_file_name}")
        
        # Limpiar temp
        for f in os.listdir(temp_dir):
            os.remove(os.path.join(temp_dir, f))
    else:
        print(f"  ! No se pudo descargar imagen para {rest['name']}")

# Limpiar carpeta temp
if os.path.exists(temp_dir):
    os.rmdir(temp_dir)

print("\n--- Actualizando data_restaurants.js ---")

js_path = "data_restaurants.js"
if os.path.exists(js_path):
    with open(js_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Reemplazar las rutas de imagen para cada restaurante
    # Buscamos por ID y reemplazamos el campo image siguiente
    for rest in restaurants:
        # Intentamos encontrar la extensión real (buscando en la carpeta)
        ext = ".jpg" # fallback
        for f in os.listdir(base_dir):
            if f.startswith(rest['id']):
                ext = os.path.splitext(f)[1]
                break
        
        # Regex para encontrar el campo image dentro de un objeto que tenga el id correspondiente
        # Esto es un poco rudimentario pero funcionará para este formato específico
        pattern = rf'(id:\s*"{rest["id"]}".*?image:\s*")[^"]*(")'
        new_url = f"images/restaurantes/{rest['id']}{ext}"
        content = re.sub(pattern, rf'\1{new_url}\2', content, flags=re.DOTALL)
    
    with open(js_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Archivo {js_path} actualizado correctamente.")
else:
    print(f"Error: No se encontró {js_path}")

print("\n--- Proceso completado ---")
