import os
import re

def audit():
    with open("data.js", "r", encoding="utf-8") as f:
        content = f.read()

    # IMAGES
    image_pattern = re.compile(r"image:\s*['\"]([^'\"]+)['\"]")
    images_in_data = set(image_pattern.findall(content))
    
    try:
        images_on_disk = set(os.path.join('images', f) for f in os.listdir("images"))
    except FileNotFoundError:
        images_on_disk = set()

    images_in_data = set(p.replace('\\', '/').lower() for p in images_in_data)
    images_on_disk = set(p.replace('\\', '/').lower() for p in images_on_disk)
    missing_images = sorted(images_in_data - images_on_disk)

    # VIDEOS (EXCURSIONS)
    # Excursions are objects in base.events or complements array.
    # They usually have an id, time, title, description, etc.
    # Let's find all titles that belong to an event/complement block.
    # Since none have youtube fields, we list all of them.
    # A simple regex to find titles near 'id:' or inside 'events:'/'complements:'
    
    # We can split by day and find titles of base events and complements
    excursions = []
    
    # A more robust regex:
    # look for id: "b1" ... title: "something"
    block_pattern = re.compile(r'id:\s*["\'][bc]\d+["\'].*?title:\s*["\'](.*?)["\']', re.DOTALL)
    for match in block_pattern.finditer(content):
        excursions.append(match.group(1))
        
    # Write report
    with open("media_audit_report.md", "w", encoding="utf-8") as f:
        f.write("# 📷 Auditoría Global de Medios y Enlaces\n\n")
        f.write("## 1. Imágenes Faltantes en `images/`\n")
        f.write(f"Se encontraron **{len(missing_images)}** imágenes referenciadas en `data.js` que no existen en la carpeta local:\n\n")
        for img in missing_images:
            f.write(f"- `{img}`\n")
            
        f.write("\n## 2. Excursiones sin enlace a YouTube\n")
        f.write("Actualmente **ninguna** excursión tiene la propiedad `youtubeId` o `video` en `data.js`. ")
        f.write(f"A continuación se listan las **{len(excursions)}** excursiones principales y complementos que requerirán un enlace visual:\n\n")
        for exc in excursions:
            f.write(f"- {exc}\n")

if __name__ == '__main__':
    audit()
