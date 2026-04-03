import os
from icrawler.builtin import BingImageCrawler

restaurants = [
    {"id": "hikiniku-to-come-tokyo", "name": "Hikiniku To come", "query": "Hikiniku To come Shibuya wagyu hamburger steak food"},
    {"id": "kanimamire-ikebukuro", "name": "Kanimamire Tokyo Ikebukuro", "query": "crab buffet Kanimamire Tokyo Ikebukuro restaurant"},
    {"id": "ramen-nagi-shinjuku", "name": "Ramen Nagi", "query": "Ramen Nagi Golden Gai Shinjuku niboshi ramen bowl"},
    {"id": "yakiniku-washino-shinjuku", "name": "Yakiniku Washino Shinjuku", "query": "Yakiniku Washino Shinjuku wagyu beef grill"},
    {"id": "pizza-marumo-tokyo", "name": "Pizza Marumo", "query": "Pizza Marumo Ebisu Tokyo neapolitan pizza"},
    {"id": "wagyu-burger-hirokiya", "name": "Wagyu Burger Hirokiya", "query": "Wagyu Burger Hirokiya Ebisu Tokyo hamburger"},
    {"id": "yakiniku-kappo-note", "name": "Yakiniku Kappo Note", "query": "Yakiniku Kappo Note Tokyo Japanese wagyu food"},
    {"id": "rare-tendon-mitsuyoshi", "name": "Rare Tendon Ginza Mitsuyoshi", "query": "Rare Tendon Ginza Mitsuyoshi Tokyo tempura bowl"},
    {"id": "ginza-kagari-ramen", "name": "Ginza Kagari", "query": "Ginza Kagari Tori Paitan Ramen Tokyo bowl"},
    {"id": "ginza-cafe-hanon", "name": "Ginza Cafe Hanon", "query": "Cafe Hanon Pancakes Tokyo fluffy dessert"}
]

base_dir = "images/restaurantes"
if not os.path.exists(base_dir):
    os.makedirs(base_dir)

print(f"--- Iniciando descarga de {len(restaurants)} imágenes de Tokio ---")

for rest in restaurants:
    print(f"Descargando imagen para: {rest['name']}...")
    temp_dir = os.path.join(base_dir, "temp_tk")
    if not os.path.exists(temp_dir):
        os.makedirs(temp_dir)
        
    try:
        crawler = BingImageCrawler(storage={'root_dir': temp_dir})
        crawler.crawl(keyword=rest['query'], max_num=1)
        
        downloaded_files = os.listdir(temp_dir)
        if downloaded_files:
            old_file = os.path.join(temp_dir, downloaded_files[0])
            ext = os.path.splitext(downloaded_files[0])[1]
            if not ext: ext = '.jpg'
            new_file_name = f"{rest['id']}{ext}"
            new_path = os.path.join(base_dir, new_file_name)
            
            if os.path.exists(new_path):
                os.remove(new_path)
            os.rename(old_file, new_path)
            print(f"  > Guardado como: {new_file_name}")
            
            for f in os.listdir(temp_dir):
                os.remove(os.path.join(temp_dir, f))
        else:
            print(f"  ! No se pudo descargar imagen para {rest['name']}")
    except Exception as e:
        print(f"  ! Error: {e}")

if os.path.exists(temp_dir):
    for f in os.listdir(temp_dir):
        os.remove(os.path.join(temp_dir, f))
    os.rmdir(temp_dir)

print("--- Proceso completado ---")
