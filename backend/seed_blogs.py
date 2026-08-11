import json
from datetime import datetime
from database import SessionLocal
from models import Blog

def seed():
    with open('blogs_data.json', 'r', encoding='utf-16') as f:
        blogs_data = json.load(f)
    
    db = SessionLocal()
    try:
        inserted_count = 0
        for item in blogs_data:
            # Check if blog already exists
            existing = db.query(Blog).filter(Blog.slug == item['slug']).first()
            if not existing:
                published_at_str = item.get('published_at')
                published_at = datetime.strptime(published_at_str, "%Y-%m-%d %H:%M:%S") if published_at_str else None
                
                blog = Blog(
                    title=item['title'],
                    slug=item['slug'],
                    excerpt=item.get('excerpt'),
                    image_url=item.get('image_url'),
                    category_name=item.get('category_name'),
                    author_name=item.get('author_name', 'Metric Vibes'),
                    comments_count=item.get('comments_count', 0),
                    meta_title=item.get('meta_title'),
                    meta_description=item.get('meta_description'),
                    content=item.get('content'),
                    published_at=published_at
                )
                db.add(blog)
                inserted_count += 1
        
        db.commit()
        print(f"Successfully seeded {inserted_count} new blogs!")
    except Exception as e:
        print(f"Error seeding blogs: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    seed()
