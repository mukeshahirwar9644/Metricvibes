import os
import random
import smtplib
import logging
import hmac
import hashlib
import base64
import json
import time
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from fastapi import FastAPI, Request, Form, Depends, HTTPException, BackgroundTasks
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import get_db, engine
import models
from pydantic import BaseModel, EmailStr
from typing import Optional, List
from dotenv import load_dotenv

load_dotenv()

# Ensure database tables exist
models.Base.metadata.create_all(bind=engine)

logger = logging.getLogger("uvicorn")

app = FastAPI(title="MetricVibes Backend API")

# Restricted CORS Configuration
allowed_origins_env = os.getenv("ALLOWED_ORIGINS", "")
if allowed_origins_env:
    origins = [o.strip() for o in allowed_origins_env.split(",") if o.strip()]
else:
    origins = [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000",
        "http://localhost:8000"
    ]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# JWT & Authentication Configuration
JWT_SECRET = os.getenv("JWT_SECRET", "metricvibes_jwt_secret_key_2026_super_secure_9988")

def base64url_encode(data: bytes) -> str:
    return base64.urlsafe_b64encode(data).rstrip(b'=').decode('utf-8')

def base64url_decode(data: str) -> bytes:
    padding = '=' * (4 - (len(data) % 4))
    return base64.urlsafe_b64decode(data + padding)

def create_jwt_token(data: dict, expires_in_seconds: int = 86400) -> str:
    header = {"alg": "HS256", "typ": "JWT"}
    payload = data.copy()
    payload["exp"] = int(time.time()) + expires_in_seconds
    
    header_b64 = base64url_encode(json.dumps(header).encode('utf-8'))
    payload_b64 = base64url_encode(json.dumps(payload).encode('utf-8'))
    
    signature_input = f"{header_b64}.{payload_b64}".encode('utf-8')
    signature = hmac.new(JWT_SECRET.encode('utf-8'), signature_input, hashlib.sha256).digest()
    signature_b64 = base64url_encode(signature)
    
    return f"{header_b64}.{payload_b64}.{signature_b64}"

def verify_jwt_token(token: str) -> Optional[dict]:
    try:
        parts = token.split('.')
        if len(parts) != 3:
            return None
        header_b64, payload_b64, signature_b64 = parts
        
        signature_input = f"{header_b64}.{payload_b64}".encode('utf-8')
        expected_sig = base64url_encode(hmac.new(JWT_SECRET.encode('utf-8'), signature_input, hashlib.sha256).digest())
        
        if not hmac.compare_digest(signature_b64, expected_sig):
            return None
            
        payload = json.loads(base64url_decode(payload_b64).decode('utf-8'))
        if payload.get("exp") and time.time() > payload["exp"]:
            return None
            
        return payload
    except Exception:
        return None

security = HTTPBearer(auto_error=False)

def get_current_admin(credentials: Optional[HTTPAuthorizationCredentials] = Depends(security)):
    if not credentials or not credentials.credentials:
        raise HTTPException(status_code=401, detail="Authentication token required")
    payload = verify_jwt_token(credentials.credentials)
    if not payload or payload.get("role") != "Administrator":
        raise HTTPException(status_code=401, detail="Invalid or expired authentication token")
    return payload

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

        if mail_port == 465:
            server = smtplib.SMTP_SSL(mail_host, mail_port)
        else:
            server = smtplib.SMTP(mail_host, mail_port)
            server.starttls()

        server.login(mail_username, mail_password)
        server.sendmail(mail_from, [recipient_email], msg.as_string())
        server.quit()
        logger.info(f"Successfully sent lead notification email to {recipient_email}")
    except Exception as e:
        logger.error(f"Failed to send email notification to {recipient_email}: {str(e)}")

def send_otp_email(recipient_email: str, otp: str):
    mail_host = os.getenv("MAIL_HOST", "smtp.hostinger.com")
    mail_port = int(os.getenv("MAIL_PORT", 465))
    mail_username = os.getenv("MAIL_USERNAME", "")
    mail_password = os.getenv("MAIL_PASSWORD", "")
    mail_from = os.getenv("MAIL_FROM", mail_username or "noreply@metricvibes.com")

    if not mail_username or not mail_password:
        logger.warning(f"🔐 Password Reset OTP generated for {recipient_email}: [{otp}] (Configure MAIL_USERNAME and MAIL_PASSWORD in .env for real email inbox delivery)")
        return False

    try:
        subject = "🔑 MetricVibes Admin Password Reset Code"
        html_content = f"""
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head>
        <body style="font-family: 'Segoe UI', Tahoma, sans-serif; background: #0f172a; color: #ffffff; padding: 20px;">
            <div style="max-width: 500px; margin: 0 auto; background: #1e293b; border-radius: 14px; padding: 32px; border: 1px solid rgba(124,58,237,0.3); box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                <div style="text-align: center; margin-bottom: 20px;">
                    <h2 style="color: #c084fc; margin: 0 0 6px; font-size: 20px;">MetricVibes Admin Security</h2>
                    <p style="color: #94a3b8; font-size: 14px; margin: 0;">Password Reset Verification Code</p>
                </div>
                <p style="color: #cbd5e1; font-size: 14px; line-height: 1.5;">You requested a password reset for your admin account (<strong>{recipient_email}</strong>). Use the code below to complete your reset:</p>
                <div style="font-size: 34px; font-weight: 800; color: #ffffff; background: linear-gradient(135deg, #7c3aed, #4f46e5); padding: 16px; text-align: center; border-radius: 10px; letter-spacing: 8px; margin: 24px 0; font-family: monospace;">
                    {otp}
                </div>
                <p style="font-size: 13px; color: #64748b; margin: 0; text-align: center;">This OTP code is valid for 10 minutes. If you did not request this reset, please ignore this email.</p>
            </div>
        </body>
        </html>
        """

        msg = MIMEMultipart()
        msg["Subject"] = subject
        msg["From"] = f"MetricVibes Security <{mail_from}>"
        msg["To"] = recipient_email
        msg.attach(MIMEText(html_content, "html"))

        if mail_port == 465:
            server = smtplib.SMTP_SSL(mail_host, mail_port)
        else:
            server = smtplib.SMTP(mail_host, mail_port)
            server.starttls()

        server.login(mail_username, mail_password)
        server.sendmail(mail_from, [recipient_email], msg.as_string())
        server.quit()
        logger.info(f"Successfully sent OTP email via {mail_from} to {recipient_email}")
        return True
    except Exception as e:
        logger.error(f"Failed to send OTP email to {recipient_email}: {str(e)}")
        return False

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

class CommentCreateSchema(BaseModel):
    author_name: str
    author_email: str
    content: str
    parent_id: Optional[int] = None

@app.get("/api/blogs/{slug}/comments")
def get_blog_comments(slug: str, db: Session = Depends(get_db)):
    blog = db.query(models.Blog).filter(models.Blog.slug == slug).first()
    if not blog:
        raise HTTPException(status_code=404, detail="Blog not found")
    
    comments = db.query(models.BlogComment).filter(models.BlogComment.blog_id == blog.id).order_by(models.BlogComment.created_at.asc()).all()
    
    comment_map = {}
    root_comments = []
    
    for c in comments:
        c_dict = {
            "id": c.id,
            "blog_id": c.blog_id,
            "parent_id": c.parent_id,
            "author_name": c.author_name,
            "author_email": c.author_email,
            "content": c.content,
            "created_at": c.created_at.isoformat() if c.created_at else None,
            "replies": []
        }
        comment_map[c.id] = c_dict
        
    for c_id, c_dict in comment_map.items():
        parent_id = c_dict["parent_id"]
        if parent_id and parent_id in comment_map:
            comment_map[parent_id]["replies"].append(c_dict)
        else:
            root_comments.append(c_dict)
            
    return {
        "status": "success",
        "total_count": len(comments),
        "data": root_comments
    }

@app.post("/api/blogs/{slug}/comments")
def create_blog_comment(slug: str, comment_data: CommentCreateSchema, db: Session = Depends(get_db)):
    blog = db.query(models.Blog).filter(models.Blog.slug == slug).first()
    if not blog:
        raise HTTPException(status_code=404, detail="Blog not found")
        
    if not comment_data.author_name.strip() or not comment_data.author_email.strip() or not comment_data.content.strip():
        raise HTTPException(status_code=400, detail="Name, email and content are required")

    if comment_data.parent_id:
        parent_comment = db.query(models.BlogComment).filter(
            models.BlogComment.id == comment_data.parent_id,
            models.BlogComment.blog_id == blog.id
        ).first()
        if not parent_comment:
            raise HTTPException(status_code=404, detail="Parent comment not found")
            
    new_comment = models.BlogComment(
        blog_id=blog.id,
        parent_id=comment_data.parent_id,
        author_name=comment_data.author_name.strip(),
        author_email=comment_data.author_email.strip(),
        content=comment_data.content.strip()
    )
    db.add(new_comment)
    
    blog.comments_count = (blog.comments_count or 0) + 1
    db.commit()
    db.refresh(new_comment)
    
    return {
        "status": "success",
        "message": "Comment posted successfully",
        "data": {
            "id": new_comment.id,
            "blog_id": new_comment.blog_id,
            "parent_id": new_comment.parent_id,
            "author_name": new_comment.author_name,
            "author_email": new_comment.author_email,
            "content": new_comment.content,
            "created_at": new_comment.created_at.isoformat() if new_comment.created_at else None,
            "replies": []
        }
    }

class ContactFormSchema(BaseModel):
    name: str
    email: str
    company: Optional[str] = None
    phone: Optional[str] = None
    message: str

@app.post("/api/contact")
async def contact_form(payload: ContactFormSchema, background_tasks: BackgroundTasks, db: Session = Depends(get_db)):
    if not payload.name.strip() or not payload.email.strip() or not payload.message.strip():
        raise HTTPException(status_code=400, detail="Name, email and message are required fields")
    
    if "@" not in payload.email or "." not in payload.email:
        raise HTTPException(status_code=400, detail="Please enter a valid email address")

    new_submission = models.ContactSubmission(
        name=payload.name.strip(),
        email=payload.email.strip(),
        company=(payload.company or "").strip(),
        phone=(payload.phone or "").strip(),
        message=payload.message.strip()
    )
    db.add(new_submission)
    db.commit()

    background_tasks.add_task(
        send_contact_email,
        payload.name.strip(),
        payload.email.strip(),
        (payload.company or "").strip(),
        (payload.phone or "").strip(),
        payload.message.strip()
    )

    return {"status": "success", "message": "Message received and sales team notified!"}

class NewsletterSchema(BaseModel):
    email: str

@app.post("/api/newsletter")
@app.post("/api/subscribe")
async def newsletter_signup(payload: NewsletterSchema, db: Session = Depends(get_db)):
    email = payload.email.strip() if payload.email else ""

    if not email or "@" not in email or "." not in email:
        raise HTTPException(status_code=400, detail="A valid email address is required")

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

# --- ADMIN API ENDPOINTS (PROTECTED VIA JWT) ---

ALLOWED_ADMIN_EMAILS = [
    "mukesh.ahirwar@metricvibes.com",
    "anuj@metricvibes.com"
]

DEFAULT_ADMIN_PASS = "Metricvibes@Anuj#2026"

ADMIN_CREDENTIALS = {
    "mukesh.ahirwar@metricvibes.com": DEFAULT_ADMIN_PASS,
    "anuj@metricvibes.com": DEFAULT_ADMIN_PASS
}

RESET_OTPS = {}

class ForgotPasswordSchema(BaseModel):
    email: str

class ResetPasswordSchema(BaseModel):
    email: str
    otp: str
    new_password: str

@app.post("/api/admin/login")
async def admin_login(request: Request):
    data = await request.json()
    raw_user = data.get("username", "").strip()
    username = raw_user.lower()
    password = data.get("password", "").strip()
    
    valid = False
    display_user = raw_user
    
    # Check case-insensitive match against allowed admin credentials
    if username in ADMIN_CREDENTIALS and password == ADMIN_CREDENTIALS[username]:
        valid = True
        display_user = username

    if valid:
        token = create_jwt_token({"username": display_user, "role": "Administrator"})
        return {
            "status": "success",
            "token": token,
            "user": {"username": display_user, "role": "Administrator"}
        }
    raise HTTPException(status_code=401, detail="Invalid email or password")

@app.post("/api/admin/forgot-password")
async def admin_forgot_password(payload: ForgotPasswordSchema, background_tasks: BackgroundTasks):
    email = payload.email.strip().lower()
    if not email:
        raise HTTPException(status_code=400, detail="Email is required")
        
    matched = None
    for admin_e in ALLOWED_ADMIN_EMAILS:
        if admin_e.lower() == email:
            matched = admin_e
            break
            
    if not matched:
        raise HTTPException(status_code=404, detail="This email is not registered as an administrator")
        
    target_email = matched
    otp = str(random.randint(100000, 999999))
    RESET_OTPS[target_email] = {
        "otp": otp,
        "expires_at": time.time() + 600
    }
    
    logger.info(f"Generated Password Reset OTP for {target_email}: {otp}")
    background_tasks.add_task(send_otp_email, target_email, otp)
    
    return {
        "status": "success",
        "message": f"Verification code (OTP) sent to {target_email}. Please check your inbox/spam folder."
    }

@app.post("/api/admin/reset-password")
async def admin_reset_password(payload: ResetPasswordSchema):
    email = payload.email.strip().lower()
    otp = payload.otp.strip()
    new_password = payload.new_password.strip()

    if not email or not otp or not new_password:
        raise HTTPException(status_code=400, detail="All fields (email, OTP, new password) are required")

    otp_entry = None
    matched_key = None
    for k, v in RESET_OTPS.items():
        if k.lower() == email:
            otp_entry = v
            matched_key = k
            break

    if not otp_entry:
        raise HTTPException(status_code=400, detail="No OTP requested or code expired. Please request a new code.")

    if time.time() > otp_entry["expires_at"]:
        del RESET_OTPS[matched_key]
        raise HTTPException(status_code=400, detail="OTP has expired. Please request a new code.")

    if otp_entry["otp"] != otp:
        raise HTTPException(status_code=400, detail="Invalid OTP code. Please check the 6-digit code and try again.")

    # Update password for admin
    ADMIN_CREDENTIALS[matched_key] = new_password
    del RESET_OTPS[matched_key]
    
    logger.info(f"Password reset successfully for {matched_key}")
    return {
        "status": "success",
        "message": "Password reset successfully! You can now log in with your new password."
    }

@app.get("/api/admin/stats")
def get_admin_stats(db: Session = Depends(get_db), admin: dict = Depends(get_current_admin)):
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

# Blog Management (Protected)
@app.post("/api/admin/blogs")
async def create_blog(request: Request, db: Session = Depends(get_db), admin: dict = Depends(get_current_admin)):
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
async def update_blog(blog_id: int, request: Request, db: Session = Depends(get_db), admin: dict = Depends(get_current_admin)):
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
def delete_blog(blog_id: int, db: Session = Depends(get_db), admin: dict = Depends(get_current_admin)):
    blog = db.query(models.Blog).filter(models.Blog.id == blog_id).first()
    if not blog:
        raise HTTPException(status_code=404, detail="Blog not found")
    db.delete(blog)
    db.commit()
    return {"status": "success", "message": "Blog deleted successfully!"}

# Case Study Management (Protected)
@app.get("/api/admin/case-studies")
def get_admin_case_studies(db: Session = Depends(get_db), admin: dict = Depends(get_current_admin)):
    studies = db.query(models.CaseStudy).order_by(models.CaseStudy.id.desc()).all()
    return {"status": "success", "data": studies}

@app.post("/api/admin/case-studies")
async def create_case_study(request: Request, db: Session = Depends(get_db), admin: dict = Depends(get_current_admin)):
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
        color2=data.get("color2", "#c084fc")
    )
    db.add(new_study)
    db.commit()
    db.refresh(new_study)
    return {"status": "success", "message": "Case Study created successfully!", "data": new_study}

@app.put("/api/admin/case-studies/{cs_id}")
async def update_case_study(cs_id: int, request: Request, db: Session = Depends(get_db), admin: dict = Depends(get_current_admin)):
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

@app.delete("/api/admin/case-studies/{cs_id}")
def delete_case_study(cs_id: int, db: Session = Depends(get_db), admin: dict = Depends(get_current_admin)):
    study = db.query(models.CaseStudy).filter(models.CaseStudy.id == cs_id).first()
    if not study:
        raise HTTPException(status_code=404, detail="Case study not found")
    db.delete(study)
    db.commit()
    return {"status": "success", "message": "Case study deleted successfully!"}

# Lead Submissions Viewer (Protected)
@app.get("/api/admin/submissions")
def get_admin_submissions(db: Session = Depends(get_db), admin: dict = Depends(get_current_admin)):
    submissions = db.query(models.ContactSubmission).order_by(models.ContactSubmission.created_at.desc()).all()
    return {"status": "success", "data": submissions}

@app.delete("/api/admin/submissions/{sub_id}")
def delete_submission(sub_id: int, db: Session = Depends(get_db), admin: dict = Depends(get_current_admin)):
    sub = db.query(models.ContactSubmission).filter(models.ContactSubmission.id == sub_id).first()
    if not sub:
        raise HTTPException(status_code=404, detail="Submission not found")
    db.delete(sub)
    db.commit()
    return {"status": "success", "message": "Submission deleted successfully!"}

# Newsletter Subscribers Viewer (Protected)
@app.get("/api/admin/newsletter")
def get_admin_newsletter(db: Session = Depends(get_db), admin: dict = Depends(get_current_admin)):
    subscribers = db.query(models.NewsletterSubscriber).order_by(models.NewsletterSubscriber.subscribed_at.desc()).all()
    return {"status": "success", "data": subscribers}

# --- CAREER OPENINGS API ENDPOINTS ---

class CareerSchema(BaseModel):
    title: str
    department: Optional[str] = "Engineering"
    location: Optional[str] = "Remote"
    employment_type: Optional[str] = "Full-time"
    description: Optional[str] = ""
    requirements: Optional[str] = ""
    is_active: Optional[int] = 1

def format_requirements_json(req_str):
    if not req_str:
        return json.dumps([])
    if isinstance(req_str, list):
        return json.dumps(req_str)
    try:
        json.loads(req_str)
        return req_str
    except Exception:
        lines = [r.strip() for r in req_str.split('\n') if r.strip()]
        if not lines:
            lines = [r.strip() for r in req_str.split('. ') if r.strip()]
        return json.dumps(lines if lines else [req_str])

def seed_initial_careers_if_empty(db: Session):
    try:
        count = db.query(models.Career).count()
        if count == 0:
            initial_jobs = [
                models.Career(
                    title="Tech Research & Content Intern",
                    slug="tech-research-content-intern",
                    department="Research & Content",
                    location="Noida / Hybrid",
                    employment_type="Internship (6 months)",
                    description="We are looking for a college student or recent graduate who is genuinely curious about new technology and wants to understand what is actually being built in AI and analytics, then turn that research into useful content and small proof-of-concept projects for real businesses.",
                    requirements=format_requirements_json("Track launches across GCP, BigQuery, GA4.\nBuild proof-of-concept projects.\nStrong curiosity and writing skills."),
                    is_active=1
                ),
                models.Career(
                    title="Senior Data Engineer",
                    slug="senior-data-engineer",
                    department="Engineering",
                    location="Remote",
                    employment_type="Full-time",
                    description="Build scalable data pipelines and robust architecture for our enterprise clients using GCP and dbt.",
                    requirements=format_requirements_json("5+ years experience with Python, GCP BigQuery, dbt, SQL, and data warehouse modeling."),
                    is_active=1
                ),
                models.Career(
                    title="Lead Analytics Consultant",
                    slug="lead-analytics-consultant",
                    department="Analytics",
                    location="Hybrid",
                    employment_type="Full-time",
                    description="Lead complex GA4 migrations and design measurement strategies for top global brands.",
                    requirements=format_requirements_json("Expertise in GA4, Google Tag Manager, BigQuery export, and conversion rate optimization."),
                    is_active=1
                ),
                models.Career(
                    title="Growth Marketing Manager",
                    slug="growth-marketing-manager",
                    department="Marketing",
                    location="Remote",
                    employment_type="Full-time",
                    description="Drive B2B demand generation, manage paid campaigns, and optimize conversion funnels.",
                    requirements=format_requirements_json("Proven track record in B2B SaaS demand generation, LinkedIn Ads, SEO, and content marketing."),
                    is_active=1
                )
            ]
            db.add_all(initial_jobs)
            db.commit()
    except Exception as e:
        logger.error(f"Error seeding careers: {e}")
        db.rollback()

@app.get("/api/careers")
def get_public_careers(db: Session = Depends(get_db)):
    seed_initial_careers_if_empty(db)
    careers = db.query(models.Career).filter(models.Career.is_active == 1).order_by(models.Career.id.desc()).all()
    return {"status": "success", "data": careers}

@app.get("/api/admin/careers")
def get_admin_careers(db: Session = Depends(get_db), admin: dict = Depends(get_current_admin)):
    seed_initial_careers_if_empty(db)
    careers = db.query(models.Career).order_by(models.Career.id.desc()).all()
    return {"status": "success", "data": careers}

@app.post("/api/admin/careers")
async def create_career(request: Request, db: Session = Depends(get_db), admin: dict = Depends(get_current_admin)):
    data = await request.json()
    title = data.get("title")
    if not title:
        raise HTTPException(status_code=400, detail="Job title is required")
        
    slug = data.get("slug") or title.lower().replace(" ", "-").replace("?", "")
    new_job = models.Career(
        title=title.strip(),
        slug=slug,
        department=data.get("department", "Engineering").strip(),
        location=data.get("location", "Remote").strip(),
        employment_type=data.get("employment_type", "Full-time").strip(),
        description=data.get("description", "").strip(),
        requirements=format_requirements_json(data.get("requirements", "")),
        is_active=1 if data.get("is_active", True) else 0
    )
    db.add(new_job)
    db.commit()
    db.refresh(new_job)
    return {"status": "success", "message": "Job opening created successfully!", "data": new_job}

@app.put("/api/admin/careers/{career_id}")
async def update_career(career_id: int, request: Request, db: Session = Depends(get_db), admin: dict = Depends(get_current_admin)):
    job = db.query(models.Career).filter(models.Career.id == career_id).first()
    if not job:
        raise HTTPException(status_code=404, detail="Job opening not found")
        
    data = await request.json()
    if "title" in data:
        job.title = data["title"].strip()
    if "department" in data:
        job.department = data["department"].strip()
    if "location" in data:
        job.location = data["location"].strip()
    if "employment_type" in data:
        job.employment_type = data["employment_type"].strip()
    if "description" in data:
        job.description = data["description"].strip()
    if "requirements" in data:
        job.requirements = format_requirements_json(data["requirements"])
    if "is_active" in data:
        job.is_active = 1 if data["is_active"] else 0
        
    db.commit()
    db.refresh(job)
    return {"status": "success", "message": "Job opening updated successfully!", "data": job}

@app.delete("/api/admin/careers/{career_id}")
def delete_career(career_id: int, db: Session = Depends(get_db), admin: dict = Depends(get_current_admin)):
    job = db.query(models.Career).filter(models.Career.id == career_id).first()
    if not job:
        raise HTTPException(status_code=404, detail="Job opening not found")
    db.delete(job)
    db.commit()
    return {"status": "success", "message": "Job opening deleted successfully!"}

@app.patch("/api/admin/careers/{career_id}/toggle-status")
def toggle_career_status(career_id: int, db: Session = Depends(get_db), admin: dict = Depends(get_current_admin)):
    job = db.query(models.Career).filter(models.Career.id == career_id).first()
    if not job:
        raise HTTPException(status_code=404, detail="Job opening not found")
    job.is_active = 0 if job.is_active == 1 else 1
    db.commit()
    db.refresh(job)
    return {"status": "success", "message": f"Job status changed to {'Active' if job.is_active == 1 else 'Inactive'}", "data": job}


