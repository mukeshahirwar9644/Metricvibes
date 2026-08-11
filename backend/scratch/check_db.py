import sqlite3

conn = sqlite3.connect('sql_app.db')
c = conn.cursor()
c.execute("SELECT slug, content FROM blogs WHERE slug LIKE '%gtm%'")
rows = c.fetchall()

for slug, content in rows:
    print("SLUG:", slug)
    print("Form in content:", '<form' in content)
    print("Comment in content:", 'comment' in content.lower())
    if '<form' in content:
        import re
        forms = re.findall(r'<form.*?>.*?</form>', content, re.DOTALL | re.IGNORECASE)
        print("Forms found:", len(forms))
        for f in forms:
            print("FORM:", f[:300])
    else:
        # Check if there are submit buttons or inputs
        import re
        inputs = re.findall(r'<(input|textarea|button).*?>', content, re.IGNORECASE)
        print("Inputs found:", len(inputs), inputs[:5])
