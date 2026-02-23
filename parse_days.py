import re

with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Match day, date, and title correctly using a tighter regex
pattern = r'day:\s*(\d+)[^\n]*\n\s*date:\s*"([^"]+)",\s*title:\s*"([^"]+)"'
matches = re.findall(pattern, content)

with open('days_list.txt', 'w', encoding='utf-8') as f:
    for d, date, title in matches:
        f.write(f"Day {d} | Date: {date} | Title: {title}\n")
