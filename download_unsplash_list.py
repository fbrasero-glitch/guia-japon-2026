import os
import urllib.request

# Diccionario de nombres de archivo y sus URLs directas de Unsplash (fotos reales de comida premium)
unsplash_images = {
    # Reemplazo de la foto del primer restaurante (MY NEIGHBOR) que no se veía
    "my-neighbor.jpg": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80",
    
    # Nuevos restaurantes de Osaka
    "bek-shinsaibashi.jpg": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&auto=format&fit=crop&q=80",
    "kobe-beef-miyabi-kitanosaka.jpg": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&auto=format&fit=crop&q=80",
    "moeyo-mensuke-fukushima.jpg": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop&q=80",
    "acai-bowl-blab-shinsaibashi.jpg": "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&auto=format&fit=crop&q=80",
    "tenma-sakaba-sushikin.jpg": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop&q=80",
    
    # Nuevos de Kyoto
    "kyoto-engine-ramen.jpg": "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=800&auto=format&fit=crop&q=80",
    "kyoto-kani-gin.jpg": "https://images.unsplash.com/photo-1553618551-fba689030290?w=800&auto=format&fit=crop&q=80",
    
    # Nuevos de Tokyo
    "400c-pizza-tokyo.jpg": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=80",
    "meat-eat-up-kichijoji.jpg": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80",
    "pizza-strada-tokyo.jpg": "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=800&auto=format&fit=crop&q=80",
    "shogun-pizza-shibuya.jpg": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&auto=format&fit=crop&q=80",
    "wagyu-brothers-asakusa.jpg": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80",
    "yakiniku-ponga-ebisu.jpg": "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&auto=format&fit=crop&q=80",
    "forno-nishiazabu.jpg": "https://images.unsplash.com/photo-1558030006-450675393462?w=800&auto=format&fit=crop&q=80",
    "unagi-nakasho-namba.jpg": "https://images.unsplash.com/photo-1580959375944-abd7e991f971?w=800&auto=format&fit=crop&q=80",
    "kikanbo-ramen-tokyo.jpg": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80",
    "age3-harajuku.jpg": "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&auto=format&fit=crop&q=80",
    "dolce-tacubo-tokyo.jpg": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&auto=format&fit=crop&q=80",
    "gyukatsu-motomura-shibuya.jpg": "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&auto=format&fit=crop&q=80",
    "hikiniku-to-kome-kichijoji.jpg": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&auto=format&fit=crop&q=80",
    "kobe-beef-amami.jpg": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80",
    "nihon-miyabi-asakusa.jpg": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format&fit=crop&q=80"
}

dest_dir = "images/restaurantes"
os.makedirs(dest_dir, exist_ok=True)

print("--- Iniciando descarga de nuevas imágenes ---")

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

for filename, url in unsplash_images.items():
    dest_path = os.path.join(dest_dir, filename)
    print(f"Descargando {filename}...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            with open(dest_path, 'wb') as out_file:
                out_file.write(response.read())
        print(f"  > Descargado con éxito: {filename}")
    except Exception as e:
        print(f"  ! Error descargando {filename}: {e}")

print("--- Proceso de descarga finalizado ---")
