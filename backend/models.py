from sqlalchemy import Column, Integer, String, Text, DateTime, func
from database import Base

class ContactSubmission(Base):
    __tablename__ = "contact_submissions"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False)
    company = Column(String(100), nullable=True)
    phone = Column(String(50), nullable=True)
    message = Column(Text, nullable=False)
    created_at = Column(DateTime, default=func.now())

class NewsletterSubscriber(Base):
    __tablename__ = "newsletter_subscribers"
    
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(150), unique=True, index=True, nullable=False)
    subscribed_at = Column(DateTime, default=func.now())

class Blog(Base):
    __tablename__ = "blogs"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    slug = Column(String(255), unique=True, index=True, nullable=False)
    excerpt = Column(Text, nullable=True)
    image_url = Column(String(255), nullable=True)
    category_name = Column(String(100), nullable=True)
    author_name = Column(String(100), nullable=True)
    comments_count = Column(Integer, default=0)
    meta_title = Column(String(255), nullable=True)
    meta_description = Column(Text, nullable=True)
    content = Column(Text, nullable=True)
    published_at = Column(DateTime, nullable=True)
    created_at = Column(DateTime, default=func.now())

class BlogComment(Base):
    __tablename__ = "blog_comments"

    id = Column(Integer, primary_key=True, index=True)
    blog_id = Column(Integer, index=True, nullable=False)
    parent_id = Column(Integer, index=True, nullable=True)
    author_name = Column(String(100), nullable=False)
    author_email = Column(String(100), nullable=False)
    content = Column(Text, nullable=False)
    created_at = Column(DateTime, default=func.now())

class CaseStudy(Base):
    __tablename__ = "case_studies"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    slug = Column(String(255), unique=True, index=True, nullable=False)
    category = Column(String(100), nullable=True)
    description = Column(Text, nullable=True)
    image_url = Column(String(255), nullable=True) # Icon
    metric_1_value = Column(String(50), nullable=True)
    metric_1_label = Column(String(100), nullable=True)
    metric_2_value = Column(String(50), nullable=True)
    metric_2_label = Column(String(100), nullable=True)
    metric_3_value = Column(String(50), nullable=True)
    metric_3_label = Column(String(100), nullable=True)
    color1 = Column(String(20), nullable=True)
    color2 = Column(String(20), nullable=True)
    created_at = Column(DateTime, default=func.now())

class Service(Base):
    __tablename__ = "services"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    category = Column(String(100), nullable=True)
    description = Column(Text, nullable=True)
    icon = Column(String(100), nullable=True)
    link = Column(String(255), nullable=True)
    created_at = Column(DateTime, default=func.now())

class Testimonial(Base):
    __tablename__ = "testimonials"

    id = Column(Integer, primary_key=True, index=True)
    client_name = Column(String(100), nullable=False)
    company = Column(String(100), nullable=True)
    quote = Column(Text, nullable=False)
    rating = Column(Integer, default=5)
    avatar = Column(String(255), nullable=True) # Initials or image URL
    created_at = Column(DateTime, default=func.now())

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, index=True, nullable=False)
    email = Column(String(100), unique=True, index=True, nullable=False)
    hashed_password = Column(String(255), nullable=False)
    role = Column(String(50), default="admin")
    created_at = Column(DateTime, default=func.now())

class Career(Base):
    __tablename__ = "careers"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    department = Column(String(100), nullable=True)
    location = Column(String(100), nullable=True)
    employment_type = Column(String(50), nullable=True)
    description = Column(Text, nullable=True)
    requirements = Column(Text, nullable=True)
    is_active = Column(Integer, default=1)
    created_at = Column(DateTime, default=func.now())

class JobApplication(Base):
    __tablename__ = "job_applications"

    id = Column(Integer, primary_key=True, index=True)
    career_id = Column(Integer, index=True)
    first_name = Column(String(100), nullable=False)
    last_name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False)
    phone = Column(String(50), nullable=True)
    resume_url = Column(String(255), nullable=True)
    cover_letter = Column(Text, nullable=True)
    status = Column(String(50), default="pending")
    applied_at = Column(DateTime, default=func.now())

class SiteSetting(Base):
    __tablename__ = "site_settings"

    id = Column(Integer, primary_key=True, index=True)
    setting_key = Column(String(100), unique=True, index=True, nullable=False)
    setting_value = Column(Text, nullable=True)
    description = Column(String(255), nullable=True)
    updated_at = Column(DateTime, default=func.now(), onupdate=func.now())
