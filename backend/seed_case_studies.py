import json
from datetime import datetime
from database import SessionLocal
from models import CaseStudy

def seed():
    case_studies_data = [
        {
            "title": "How Metric Vibes Enhanced Mobile App Conversions Through Personalized User Experiences",
            "slug": "how-metric-vibes-enhanced-mobile-app-conversions",
            "category": "App Conversions",
            "description": "The client, a leading second-hand retail store in the UK, struggled with low app registrations and conversions. MetricVibes implemented personalized tracking and user behavior analysis to drive significant improvement in mobile app performance.",
            "image_url": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "metric_1_value": "156%",
            "metric_1_label": "App Registrations",
            "metric_2_value": "3.8x",
            "metric_2_label": "Conversion Rate",
            "metric_3_value": "42%",
            "metric_3_label": "User Retention",
            "color1": "#7c3aed",
            "color2": "#06b6d4",
            "date": "August 10, 2024"
        },
        {
            "title": "How Metric Vibes Turned Attribution Loss into Measurable Conversions",
            "slug": "how-metric-vibes-turned-attribution-loss",
            "category": "Attribution",
            "description": "Metricvibes played a pivotal role in addressing the challenges faced by the Inmates Photo Sharing platform, where iOS 14.5+ privacy changes caused massive attribution loss, impacting marketing ROI and decision-making.",
            "image_url": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "metric_1_value": "89%",
            "metric_1_label": "Attribution Recovery",
            "metric_2_value": "2.5x",
            "metric_2_label": "ROAS Improvement",
            "metric_3_value": "34%",
            "metric_3_label": "Cost Reduction",
            "color1": "#4f46e5",
            "color2": "#D4AF37",
            "date": "July 2, 2024"
        },
        {
            "title": "Elevating Digital Strategies for an Aviation Client",
            "slug": "elevating-digital-strategies-for-an-aviation-client",
            "category": "Digital Strategy",
            "description": "How we helped a global aviation business achieve a 3.2% increase in conversion rates through advanced server-side tracking, GA4 implementation, and cross-platform attribution modeling.",
            "image_url": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "metric_1_value": "3.2%",
            "metric_1_label": "Conversion Lift",
            "metric_2_value": "67%",
            "metric_2_label": "Data Accuracy",
            "metric_3_value": "4.1x",
            "metric_3_label": "ROI",
            "color1": "#0891b2",
            "color2": "#7c3aed",
            "date": "May 24, 2024"
        },
        {
            "title": "How Metric Vibes Approach Optimized Drop-offs",
            "slug": "how-metric-vibes-approach-optimized-drop-offs",
            "category": "Optimization",
            "description": "Discover how MetricVibes enhanced user behavior insights for Ticket Network, optimizing drop-offs and improving conversion rates through advanced funnel analysis and event tracking.",
            "image_url": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "metric_1_value": "45%",
            "metric_1_label": "Drop-off Reduction",
            "metric_2_value": "2.8x",
            "metric_2_label": "Ticket Sales",
            "metric_3_value": "18%",
            "metric_3_label": "Revenue Growth",
            "color1": "#dc2626",
            "color2": "#f59e0b",
            "date": "April 15, 2024"
        }
    ]
    
    db = SessionLocal()
    try:
        inserted_count = 0
        for item in case_studies_data:
            existing = db.query(CaseStudy).filter(CaseStudy.slug == item['slug']).first()
            if not existing:
                study = CaseStudy(
                    title=item['title'],
                    slug=item['slug'],
                    category=item.get('category', 'MarTech'),
                    description=item.get('description', ''),
                    image_url=item.get('image_url', ''),
                    metric_1_value=item.get('metric_1_value', ''),
                    metric_1_label=item.get('metric_1_label', ''),
                    metric_2_value=item.get('metric_2_value', ''),
                    metric_2_label=item.get('metric_2_label', ''),
                    metric_3_value=item.get('metric_3_value', ''),
                    metric_3_label=item.get('metric_3_label', ''),
                    color1=item.get('color1', '#7851A9'),
                    color2=item.get('color2', '#D4AF37')
                )
                db.add(study)
                inserted_count += 1
        
        db.commit()
        print(f"Successfully seeded {inserted_count} case studies!")
    except Exception as e:
        print(f"Error seeding case studies: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    seed()
