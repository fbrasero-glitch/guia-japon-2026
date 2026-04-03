import os
import re
from icrawler.builtin import BingImageCrawler

# Configuración de restaurantes
restaurants = [
    {"id": "gyukatsu-motomura-kyoto", "name": "Gyukatsu Motomura (Kyoto Sanjo)", "query": "Gyukatsu Motomura Kyoto restaurant food"},
    {"id": "chao-chao-gyoza-kiyamachi", "name": "Chao Chao Gyoza Sanjo Kiyamachi", "query": "Chao Chao Gyoza Sanjo Kiyamachi Kyoto food"},
    {"id": "tempura-no-mise-gen", "name": "Tempura no Mise Gen", "query": "Tempura no Mise Gen Kyoto Sanjo tendon food"},
    {"id": "unagi-sumito", "name": "Unagi Sumito", "query": "Unagi Sumito Kyoto higashiyama hitsumabushi eel food"}
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
        
    try:
        crawler = BingImageCrawler(storage={'root_dir': temp_dir})
        crawler.crawl(keyword=rest['query'], max_num=1)
        
        # Buscamos el archivo descargado y lo renombramos
        downloaded_files = os.listdir(temp_dir)
        if downloaded_files:
            # icrawler suele bajar 000001.jpg, .png, etc.
            old_file = os.path.join(temp_dir, downloaded_files[0])
            ext = os.path.splitext(downloaded_files[0])[1]
            if ext == '':
                ext = '.jpg'
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
    except Exception as e:
        print(f"  ! Error descargando {rest['name']}: {e}")

# Limpiar carpeta temp
if os.path.exists(temp_dir):
    for f in os.listdir(temp_dir):
        os.remove(os.path.join(temp_dir, f))
    os.rmdir(temp_dir)

print("\n--- Proceso completado ---")
