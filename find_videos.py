import re, json
with open('data.js', 'r', encoding='utf-8') as f:
    text = f.read()

days = re.split(r'(?=\s*\{\s*day:\s*\d+)', text)[1:]
missing = []

for day_text in days:
    day_match = re.search(r'day:\s*(\d+)', day_text)
    if not day_match: continue
    day_num = day_match.group(1)
    
    # Matches objects that look like excursions
    excursions = re.finditer(r'(?s)\{(?:[^{}]*?(?:title|name):\s*"([^"]+)")?[^{}]*?(?:id:\s*"([^"]+)")?[^{}]*?\}', day_text)
    for exc in excursions:
        block = exc.group(0)
        title = exc.group(1)
        if title and re.search(r'description:|fullDesc:|price:|image:', block):
            if not re.search(r'video:\s*"', block):
                missing.append(f"- **Día {day_num}**: {title} (Buscar en YouTube: {title} Japón)")

# deduplicate while preserving order
seen = set()
out = []
for m in missing:
    if m not in seen:
        seen.add(m)
        out.append(m)

with open('missing_videos.md', 'w', encoding='utf-8') as f:
    f.write('\n'.join(out))
