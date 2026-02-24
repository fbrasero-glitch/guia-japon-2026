import os
import re

def check_missing():
    with open("data.js", "r", encoding="utf-8") as f:
        content = f.read()

    # Find all unique image paths in data.js
    referenced = set(re.findall(r'(\w*image):\s*["\']([^"\']+)["\']', content, re.IGNORECASE))
    referenced_paths = set(p for attr, p in referenced if not p.startswith('http') and p)

    # Get images on disk
    images_on_disk = set()
    if os.path.exists("images"):
        for root, dirs, files in os.walk("images"):
            for file in files:
                path = os.path.join(root, file).replace('\\', '/').lower()
                # We need to normalize the path to match data.js format (usually "images/...")
                if root == "images":
                    images_on_disk.add(f"images/{file}".lower())
                else:
                    rel_path = os.path.relpath(os.path.join(root, file), os.getcwd()).replace('\\', '/').lower()
                    images_on_disk.add(rel_path)

    missing = sorted([p for p in referenced_paths if p.lower() not in images_on_disk])

    # Get context for these missing images
    results = []
    # Split by day for context
    day_blocks = [m.start() for m in re.finditer(r'day:\s*\d+', content)]
    for i in range(len(day_blocks)):
        start = day_blocks[i]
        end = day_blocks[i+1] if i+1 < len(day_blocks) else len(content)
        block = content[start:end]
        
        day_match = re.search(r'day:\s*(\d+)', block)
        day_num = day_match.group(1) if day_match else "?"
        
        day_title_match = re.search(r'title:\s*["\'](.*?)["\']', block)
        day_title = day_title_match.group(1) if day_title_match else ""

        for m in re.finditer(r'(\w*image):\s*["\']([^"\']+)["\']', block, re.IGNORECASE):
            path = m.group(2)
            if path in missing:
                # Find nearest title
                look_back = block[:m.start()]
                titles = re.findall(r'title:\s*["\'](.*?)["\']', look_back)
                context_title = titles[-1] if titles else day_title
                
                results.append({
                    "path": path,
                    "day": day_num,
                    "title": context_title
                })

    # Output to a temporary file
    with open("MISSING_LIST.txt", "w", encoding="utf-8") as f:
        f.write("| Archivo a descargar | Día | Actividad / Contexto |\n")
        f.write("| :--- | :--- | :--- |\n")
        seen = set()
        for r in sorted(results, key=lambda x: (int(x['day']) if x['day'].isdigit() else 0, x['path'])):
            if r['path'] not in seen:
                f.write(f"| `{r['path'].replace('images/', '')}` | {r['day']} | {r['title']} |\n")
                seen.add(r['path'])

if __name__ == '__main__':
    check_missing()
