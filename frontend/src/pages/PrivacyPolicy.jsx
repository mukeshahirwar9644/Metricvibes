import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
    useEffect(() => {
        document.title = "Privacy Policy | MetricVibes";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="subpage-wrapper">
            {/* Header Hero Section */}
            <section style={{
                background: "linear-gradient(180deg, #F5EEFF 0%, #FFFFFF 100%)",
                padding: "140px 0 60px",
                textAlign: "center"
            }}>
                <div className="container" style={{ maxWidth: "800px" }}>
                    <div style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "60px",
                        height: "60px",
                        background: "#EADDFF",
                        borderRadius: "14px",
                        marginBottom: "20px",
                        boxShadow: "0 4px 15px rgba(124, 58, 237, 0.15)"
                    }}>
                        <i className="fas fa-file-alt" style={{ fontSize: "1.8rem", color: "#7c3aed" }}></i>
                    </div>

                    <h1 style={{
                        fontSize: "2.8rem",
                        fontWeight: "800",
                        color: "#0f172a",
                        marginBottom: "12px",
                        fontFamily: "var(--font-heading)"
                    }}>
                        Privacy Policy
                    </h1>
                    <p style={{
                        fontSize: "1.1rem",
                        color: "#64748b",
                        fontWeight: "500",
                        margin: 0
                    }}>
                        All-In-One Data Protection Solution
                    </p>
                </div>
            </section>

            {/* Privacy Policy Content */}
            <section style={{ padding: "60px 0 90px", backgroundColor: "#ffffff" }}>
                <div className="container" style={{
                    maxWidth: "860px",
                    color: "#334155",
                    fontSize: "1rem",
                    lineHeight: "1.8"
                }}>
                    <p style={{ marginBottom: "20px" }}>
                        Metricvibes Pvt. Ltd. (“us”, “we”, or “our”) operates the <a href="https://www.metricvibes.com" style={{ color: "#7c3aed", textDecoration: "none", fontWeight: "600" }}>https://www.metricvibes.com</a> website (the “Service”).
                        This page informs you of our policies regarding the collection, use and disclosure of Personal Information when you use our Service.
                    </p>

                    <p style={{ marginBottom: "20px" }}>
                        We will not use or share your information with anyone except as described in this Privacy Policy.
                    </p>

                    <p style={{ marginBottom: "40px" }}>
                        We use your Personal Information for providing and improving the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible at <a href="https://www.metricvibes.com" style={{ color: "#7c3aed", textDecoration: "none", fontWeight: "600" }}>https://www.metricvibes.com</a>
                    </p>

                    {/* Section 1 */}
                    <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#0f172a", marginTop: "36px", marginBottom: "16px" }}>
                        Information Collection And Use
                    </h2>
                    <p style={{ marginBottom: "28px" }}>
                        While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your name, phone number, postal address and other information (“Personal Information”).
                    </p>

                    {/* Section 2 */}
                    <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#0f172a", marginTop: "36px", marginBottom: "16px" }}>
                        Log Data
                    </h2>
                    <p style={{ marginBottom: "28px" }}>
                        We collect information that your browser sends whenever you visit our Service (“Log Data”). This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages and other statistics.
                    </p>

                    {/* Section 3 */}
                    <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#0f172a", marginTop: "36px", marginBottom: "16px" }}>
                        Cookies
                    </h2>
                    <p style={{ marginBottom: "16px" }}>
                        Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer’s hard drive.
                    </p>
                    <p style={{ marginBottom: "28px" }}>
                        We use “cookies” to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                    </p>

                    {/* Section 4 */}
                    <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#0f172a", marginTop: "36px", marginBottom: "16px" }}>
                        Service Providers
                    </h2>
                    <p style={{ marginBottom: "16px" }}>
                        We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
                    </p>
                    <p style={{ marginBottom: "28px" }}>
                        These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                    </p>

                    {/* Section 5 */}
                    <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#0f172a", marginTop: "36px", marginBottom: "16px" }}>
                        Security
                    </h2>
                    <p style={{ marginBottom: "28px" }}>
                        The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
                    </p>

                    {/* Section 6 */}
                    <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#0f172a", marginTop: "36px", marginBottom: "16px" }}>
                        Links To Other Sites
                    </h2>
                    <p style={{ marginBottom: "28px" }}>
                        Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit.
                    </p>

                    {/* Section 7 */}
                    <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#0f172a", marginTop: "36px", marginBottom: "16px" }}>
                        Children’s Privacy
                    </h2>
                    <p style={{ marginBottom: "16px" }}>
                        Our Service does not address anyone under the age of 13 (“Children”).
                    </p>
                    <p style={{ marginBottom: "28px" }}>
                        We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your Children has provided us with Personal Information, please contact us. If we discover that a Children under 13 has provided us with Personal Information, we will delete such information from our servers immediately.
                    </p>

                    {/* Section 8 */}
                    <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#0f172a", marginTop: "36px", marginBottom: "16px" }}>
                        Changes To This Privacy Policy
                    </h2>
                    <p style={{ marginBottom: "16px" }}>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                    </p>
                    <p style={{ marginBottom: "28px" }}>
                        You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                    </p>

                    {/* Section 9 */}
                    <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#0f172a", marginTop: "36px", marginBottom: "16px" }}>
                        Contact Us
                    </h2>
                    <p style={{ marginBottom: "28px" }}>
                        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:sales@metricvibes.com" style={{ color: "#7c3aed", fontWeight: "600", textDecoration: "none" }}>sales@metricvibes.com</a>.
                    </p>
                </div>
            </section>

            {/* Bottom CTA Banner */}
            <section style={{ padding: "0 0 80px", backgroundColor: "#ffffff" }}>
                <div className="container">
                    <div style={{
                        background: "linear-gradient(135deg, #1A1333 0%, #0F0A1F 100%)",
                        borderRadius: "24px",
                        padding: "70px 60px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        position: "relative",
                        overflow: "hidden",
                        flexWrap: "wrap",
                        gap: "40px",
                        boxShadow: "0 20px 40px rgba(15, 10, 31, 0.15)"
                    }}>
                        {/* Abstract glow effects */}
                        <div style={{ position: "absolute", top: "-50px", left: "-50px", width: "200px", height: "200px", background: "rgba(120, 81, 169, 0.2)", filter: "blur(50px)", borderRadius: "50%" }}></div>
                        <div style={{ position: "absolute", bottom: "-50px", right: "-50px", width: "300px", height: "300px", background: "rgba(161, 140, 255, 0.15)", filter: "blur(60px)", borderRadius: "50%" }}></div>
                        
                        <div style={{ position: "relative", zIndex: 2, maxWidth: "550px" }}>
                            <h2 style={{ color: "white", fontSize: "2.6rem", fontWeight: "700", lineHeight: "1.2", marginBottom: "20px" }}>
                                Ready To Boost Your Website's Performance?
                            </h2>
                            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", lineHeight: "1.6", margin: 0 }}>
                                Take the first step towards data-driven success with our comprehensive audit and personalized growth strategy.
                            </p>
                        </div>
                        
                        <div style={{ position: "relative", zIndex: 2 }}>
                            <Link to="/contact" className="btn" style={{ 
                                background: "linear-gradient(90deg, #A18CFF 0%, #8063F5 100%)", 
                                color: "white", 
                                fontWeight: "700", 
                                padding: "18px 45px", 
                                borderRadius: "40px", 
                                fontSize: "1.1rem", 
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                textDecoration: "none",
                                boxShadow: "0 10px 30px rgba(128, 99, 245, 0.4)",
                                border: "none",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease"
                            }}>
                                Get Free Audit <i className="fas fa-arrow-right" style={{ fontSize: "0.9rem" }}></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
