from database import engine, Base
import models

print("Creating database tables on Hostinger...")
print("Dropping existing tables if any...")
try:
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)
    print("Tables created successfully!")
except Exception as e:
    print(f"Failed to create tables: {e}")
