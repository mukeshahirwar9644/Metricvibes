import os
import smtplib
import logging
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from fastapi import FastAPI, Request, Form, Depends, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import get_db, engine
import models
from dotenv import load_dotenv

load_dotenv()

# Ensure database tables exist
models.Base.metadata.create_all(bind=engine)

logger = logging.getLogger("uvicorn")

app = FastAPI(title="MetricVibes Backend API")

# Add CORS so React frontend can talk to FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, restrict this to frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def send_contact_email(name: str, email: str, company: str, phone: str, message: str):
    recipient_email = "sales@metricvibes.com"
    
    mail_host = os.getenv("MAIL_HOST", "smtp.gmail.com")
    mail_port = int(os.getenv("MAIL_PORT", 587))
    mail_username = os.getenv("MAIL_USERNAME", "")
    mail_password = os.getenv("MAIL_PASSWORD", "")
    mail_from = os.getenv("MAIL_FROM", mail_username or "sales@metricvibes.com")
    
    subject = f"🔔 New Website Lead from {name} ({company or 'Individual'})"
    
    html_content = f"""
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {{ font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1e293b; background-color: #f8fafc; padding: 20px; }}
          .container {{ max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }}
          .header {{ background: linear-gradient(135deg, #260e52 0%, #3b1378 100%); padding: 24px; text-align: center; color: #ffffff; }}
          .header h2 {{ margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.5px; }}
          .content {{ padding: 30px; }}
          .field-group {{ margin-bottom: 16px; border-bottom: 1px dashed #e2e8f0; padding-bottom: 12px; }}
          .label {{ font-size: 12px; text-transform: uppercase; font-weight: 700; color: #7c3aed; letter-spacing: 0.5px; margin-bottom: 4px; }}
          .value {{ font-size: 15px; color: #0f172a; font-weight: 500; }}
          .message-box {{ background: #f1f5f9; border-left: 4px solid #7c3aed; padding: 14px 18px; border-radius: 6px; margin-top: 8px; font-size: 14px; color: #334155; line-height: 1.6; }}
          .footer {{ text-align: center; padding: 16px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; }}
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>🎯 New Contact Lead Received</h2>
          </div>
          <div class="content">
            <div class="field-group">
              <div class="label">Full Name</div>
              <div class="value">{name}</div>
            </div>
            <div class="field-group">
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:{email}" style="color: #7c3aed; text-decoration: none; font-weight: 600;">{email}</a></div>
            </div>
            <div class="field-group">
              <div class="label">Phone Number</div>
              <div class="value">{phone or 'Not Provided'}</div>
            </div>
            <div class="field-group">
              <div class="label">Company Name</div>
              <div class="value">{company or 'Not Provided'}</div>
            </div>
            <div class="field-group" style="border: none;">
              <div class="label">Project / Message Details</div>
              <div class="message-box">{message}</div>
            </div>
          </div>
          <div class="footer">
            Automated Notification from MetricVibes Website Backend API
          </div>
        </div>
      </body>
    </html>
    """
    
    if not mail_username or not mail_password:
        logger.info(f"========== [NEW LEAD FOR sales@metricvibes.com] ==========")
        logger.info(f"Name: {name} | Email: {email} | Phone: {phone} | Company: {company}")
        logger.info(f"Message: {message}")
        logger.info(f"===========================================================")
        logger.warning("SMTP Credentials (MAIL_USERNAME/MAIL_PASSWORD) not set in environment file. Saved lead to Database and logged details to console.")
        return

    try:
        msg = MIMEMultipart("alternative")
        msg["Subject"] = subject
        msg["From"] = f"{name} <{mail_from}>"
        msg["To"] = recipient_email
        msg["Reply-To"] = f"{name} <{email}>"
        msg.attach(MIMEText(html_content, "html"))

        server = smtplib.SMTP(mail_host, mail_port)
        server.starttls()
        server.login(mail_username, mail_password)
        server.sendmail(mail_from, [recipient_email], msg.as_string())
        server.quit()
        logger.info(f"Successfully sent lead notification email to {recipient_email}")
    except Exception as e:
        logger.error(f"Failed to send email notification to {recipient_email}: {str(e)}")

@app.get("/")
def read_root():
    return {"message": "Welcome to MetricVibes API"}

@app.get("/api/blogs")
def get_blogs(db: Session = Depends(get_db)):
    blogs = db.query(models.Blog).order_by(models.Blog.published_at.desc()).all()
    return {"status": "success", "data": blogs}

@app.get("/api/blogs/{slug}")
def get_blog(slug: str, db: Session = Depends(get_db)):
    blog = db.query(models.Blog).filter(models.Blog.slug == slug).first()
    if not blog:
        raise HTTPException(status_code=404, detail="Blog not found")
    return {"status": "success", "data": blog}

@app.post("/api/contact")
async def contact_form(request: Request, background_tasks: BackgroundTasks, db: Session = Depends(get_db)):
    data = await request.json()
    name = data.get('name', '')
    email = data.get('email', '')
    company = data.get('company', '')
    phone = data.get('phone', '')
    message = data.get('message', '')

    new_submission = models.ContactSubmission(
        name=name,
        email=email,
        company=company,
        message=message
    )
    db.add(new_submission)
    db.commit()

    # Trigger background email dispatch to sales@metricvibes.com
    background_tasks.add_task(send_contact_email, name, email, company, phone, message)

    return {"status": "success", "message": "Message received and sales team notified!"}

@app.post("/api/newsletter")
@app.post("/api/subscribe")
async def newsletter_signup(request: Request, db: Session = Depends(get_db)):
    email = ""
    try:
        data = await request.json()
        email = data.get('email', '')
    except Exception:
        try:
            form = await request.form()
            email = form.get('email', '')
        except Exception:
            pass

    if not email:
        raise HTTPException(status_code=400, detail="Email is required")

    existing = db.query(models.NewsletterSubscriber).filter(models.NewsletterSubscriber.email == email).first()
    if not existing:
        new_sub = models.NewsletterSubscriber(email=email)
        db.add(new_sub)
        db.commit()

    return {"status": "success", "message": "Thank you for subscribing to MetricVibes Insights!"}

@app.get("/api/case-studies")
def get_case_studies(db: Session = Depends(get_db)):
    studies = db.query(models.CaseStudy).order_by(models.CaseStudy.id.desc()).all()
    return {"status": "success", "data": studies}

# --- ADMIN API ENDPOINTS ---

@app.post("/api/admin/login")
async def admin_login(request: Request):
    data = await request.json()
    username = data.get("username", "")
    password = data.get("password", "")
    
    admin_user = os.getenv("ADMIN_USERNAME", "admin")
    admin_pass = os.getenv("ADMIN_PASSWORD", "admin123")
    
    if username == admin_user and password == admin_pass:
        return {
            "status": "success",
            "token": "admin-authenticated-token-metricvibes-2026",
            "user": {"username": username, "role": "Administrator"}
        }
    raise HTTPException(status_code=401, detail="Invalid username or password")

@app.get("/api/admin/stats")
def get_admin_stats(db: Session = Depends(get_db)):
    total_blogs = db.query(models.Blog).count()
    total_case_studies = db.query(models.CaseStudy).count()
    total_submissions = db.query(models.ContactSubmission).count()
    total_subscribers = db.query(models.NewsletterSubscriber).count()
    return {
        "status": "success",
        "data": {
            "blogs": total_blogs,
            "case_studies": total_case_studies,
            "submissions": total_submissions,
            "subscribers": total_subscribers
        }
    }

# Blog Management
@app.post("/api/admin/blogs")
async def create_blog(request: Request, db: Session = Depends(get_db)):
    data = await request.json()
    title = data.get("title")
    if not title:
        raise HTTPException(status_code=400, detail="Title is required")
        
    slug = data.get("slug") or title.lower().replace(" ", "-").replace("?", "").replace("/", "")
    
    new_blog = models.Blog(
        title=title,
        slug=slug,
        category_name=data.get("category_name", "Analytics"),
        excerpt=data.get("excerpt", ""),
        image_url=data.get("image_url", "/assets/img/blog/default.jpg"),
        author_name=data.get("author_name", "Metric Vibes Content Team"),
        meta_title=data.get("meta_title", title),
        meta_description=data.get("meta_description", data.get("excerpt", "")),
        content=data.get("content", "")
    )
    db.add(new_blog)
    db.commit()
    db.refresh(new_blog)
    return {"status": "success", "message": "Blog post created successfully!", "data": new_blog}

@app.put("/api/admin/blogs/{blog_id}")
async def update_blog(blog_id: int, request: Request, db: Session = Depends(get_db)):
    blog = db.query(models.Blog).filter(models.Blog.id == blog_id).first()
    if not blog:
        raise HTTPException(status_code=404, detail="Blog not found")
        
    data = await request.json()
    for key, value in data.items():
        if hasattr(blog, key) and key != "id":
            setattr(blog, key, value)
            
    db.commit()
    db.refresh(blog)
    return {"status": "success", "message": "Blog updated successfully!", "data": blog}

@app.delete("/api/admin/blogs/{blog_id}")
def delete_blog(blog_id: int, db: Session = Depends(get_db)):
    blog = db.query(models.Blog).filter(models.Blog.id == blog_id).first()
    if not blog:
        raise HTTPException(status_code=404, detail="Blog not found")
    db.delete(blog)
    db.commit()
    return {"status": "success", "message": "Blog deleted successfully!"}

# Case Study Management
@app.get("/api/admin/case-studies")
def get_admin_case_studies(db: Session = Depends(get_db)):
    studies = db.query(models.CaseStudy).order_by(models.CaseStudy.id.desc()).all()
    return {"status": "success", "data": studies}

@app.post("/api/admin/case-studies")
async def create_case_study(request: Request, db: Session = Depends(get_db)):
    data = await request.json()
    title = data.get("title")
    if not title:
        raise HTTPException(status_code=400, detail="Title is required")
        
    slug = data.get("slug") or title.lower().replace(" ", "-").replace("?", "")
    
    new_study = models.CaseStudy(
        title=title,
        slug=slug,
        category=data.get("category", "MarTech"),
        description=data.get("description", ""),
        image_url=data.get("image_url", "fas fa-chart-line"),
        metric_1_value=data.get("metric_1_value", "100%"),
        metric_1_label=data.get("metric_1_label", "Growth"),
        metric_2_value=data.get("metric_2_value", "2.5x"),
        metric_2_label=data.get("metric_2_label", "ROI"),
        metric_3_value=data.get("metric_3_value", "0ms"),
        metric_3_label=data.get("metric_3_label", "Latency"),
        color1=data.get("color1", "#7851A9"),
        color2=data.get("color2", "#D4AF37")
    )
    db.add(new_study)
    db.commit()
    db.refresh(new_study)
    return {"status": "success", "message": "Case Study created successfully!", "data": new_study}

@app.delete("/api/admin/case-studies/{cs_id}")
def delete_case_study(cs_id: int, db: Session = Depends(get_db)):
    study = db.query(models.CaseStudy).filter(models.CaseStudy.id == cs_id).first()
    if not study:
        raise HTTPException(status_code=404, detail="Case study not found")
    db.delete(study)
    db.commit()
    return {"status": "success", "message": "Case study deleted successfully!"}

# Lead Submissions Viewer
@app.get("/api/admin/submissions")
def get_admin_submissions(db: Session = Depends(get_db)):
    submissions = db.query(models.ContactSubmission).order_by(models.ContactSubmission.created_at.desc()).all()
    return {"status": "success", "data": submissions}

@app.delete("/api/admin/submissions/{sub_id}")
def delete_submission(sub_id: int, db: Session = Depends(get_db)):
    sub = db.query(models.ContactSubmission).filter(models.ContactSubmission.id == sub_id).first()
    if not sub:
        raise HTTPException(status_code=404, detail="Submission not found")
    db.delete(sub)
    db.commit()
    return {"status": "success", "message": "Submission deleted successfully!"}

# Newsletter Subscribers Viewer
@app.get("/api/admin/newsletter")
def get_admin_newsletter(db: Session = Depends(get_db)):
    subscribers = db.query(models.NewsletterSubscriber).order_by(models.NewsletterSubscriber.subscribed_at.desc()).all()
    return {"status": "success", "data": subscribers}

# Case Study Update
@app.put("/api/admin/case-studies/{cs_id}")
async def update_case_study(cs_id: int, request: Request, db: Session = Depends(get_db)):
    study = db.query(models.CaseStudy).filter(models.CaseStudy.id == cs_id).first()
    if not study:
        raise HTTPException(status_code=404, detail="Case study not found")
    
    data = await request.json()
    for key, value in data.items():
        if hasattr(study, key) and key != "id":
            setattr(study, key, value)
    
    db.commit()
    db.refresh(study)
    return {"status": "success", "message": "Case study updated successfully!", "data": study}

