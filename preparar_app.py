import os
import json

def generar_service_worker():
    print("Preparando la App Web Progresiva (PWA)...")
    
    # Directorio actual
    base_dir = "."
    
    # Extensiones a incluir en la caché
    extensiones_validas = {".html", ".css", ".js", ".png", ".jpg", ".jpeg", ".svg", ".json", ".mp4", ".pdf"}
    
    # Ignorar estos directorios/archivos
    ignorar = {".git", ".gemini", "sw.js", "sw_template.js", "preparar_app.py", "generate_guide.js", "find_videos.js", "apply_bookings.py", "documentacion", "qr entrada", "qr"}
    
    urls_a_cachear = [
        "./",
        "./index.html",
        "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
        "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",
        "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;800&display=swap",
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
        "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"
    ]
    
    print("Recopilando archivos de la estructura del proyecto...")
    
    for root, dirs, files in os.walk(base_dir):
        # Excluir directorios ignorados
        dirs[:] = [d for d in dirs if d not in ignorar and not d.startswith(".")]
        
        for file in files:
            ext = os.path.splitext(file)[1].lower()
            if ext in extensiones_validas and file not in ignorar:
                path = os.path.join(root, file)
                # Convertir a formato web
                path = path.replace("\\", "/").replace("./", "")
                
                # Ignorar rutas ocultas o temporales
                if not path.startswith("."):
                    urls_a_cachear.append(path)
                
    # Formatear como string Javascript (quitamos brackets exteriores xq la plantilla ya los tiene)
    js_array = json.dumps(urls_a_cachear, indent=4)
    inner_array = js_array[1:-1]
    
    try:
        with open("sw_template.js", "r", encoding="utf-8") as tpl:
            sw_code = tpl.read()
            
        # Insertar archivos en la plantilla
        sw_code = sw_code.replace("// PYTHON_INJECT_ASSETS_HERE", inner_array)
        
        with open("sw.js", "w", encoding="utf-8") as sw_out:
            sw_out.write(sw_code)
            
        print(f"Éxito: 'sw.js' generado con {len(urls_a_cachear)} archivos para caché offline.")
        print("La aplicación web está lista para instalarse en móviles.")
        
    except Exception as e:
        print(f"Error generando Service Worker: {e}")

if __name__ == "__main__":
    generar_service_worker()
