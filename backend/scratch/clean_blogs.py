import sqlite3
import re
import json

conn = sqlite3.connect('sql_app.db')
c = conn.cursor()

c.execute("SELECT id, slug, content FROM blogs")
rows = c.fetchall()

updated_count = 0

def clean_html_content(content):
    if not content:
        return content
    
    # Replace <?= url('path') ?> with /path
    def repl_url(match):
        path = match.group(1).strip()
        if not path.startswith('/'):
            path = '/' + path
        return path

    cleaned = re.sub(r"<\?=\s*url\(['\"]([^'\"]+)['\"]\)\s*\?>", repl_url, content)
    
    # Replace action="#" method="POST" or similar in form tags with action="javascript:void(0);"
    cleaned = re.sub(r'<form\s+action=["\']#?["\']\s+method=["\']POST["\']', '<form action="javascript:void(0);" method="POST"', cleaned, flags=re.IGNORECASE)
    cleaned = re.sub(r'<form\s+method=["\']POST["\']\s+action=["\']#?["\']', '<form action="javascript:void(0);" method="POST"', cleaned, flags=re.IGNORECASE)
    
    return cleaned

for id_, slug, content in rows:
    cleaned = clean_html_content(content)
    if cleaned != content:
        c.execute("UPDATE blogs SET content = ? WHERE id = ?", (cleaned, id_))
        updated_count += 1

conn.commit()
print(f"Updated {updated_count} blogs in sql_app.db")

# Also update blogs_data.json
try:
    with open('blogs_data.json', 'r', encoding='utf-16') as f:
        blogs = json.load(f)
    
    json_updated = 0
    for b in blogs:
        if 'content' in b:
            old_c = b['content']
            new_c = clean_html_content(old_c)
            if new_c != old_c:
                b['content'] = new_c
                json_updated += 1
                
    if json_updated > 0:
        with open('blogs_data.json', 'w', encoding='utf-16') as f:
            json.dump(blogs, f, indent=2, ensure_ascii=False)
        print(f"Updated {json_updated} blogs in blogs_data.json (utf-16)")
except Exception as e:
    print("JSON update error:", e)
