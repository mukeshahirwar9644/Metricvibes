import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
    useEffect(() => {
        document.title = "Terms Of Use | MetricVibes";
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
                        <i className="fas fa-gavel" style={{ fontSize: "1.8rem", color: "#7c3aed" }}></i>
                    </div>

                    <h1 style={{
                        fontSize: "2.8rem",
                        fontWeight: "800",
                        color: "#0f172a",
                        marginBottom: "12px",
                        fontFamily: "var(--font-heading)"
                    }}>
                        Terms Of Use
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

            {/* Terms Content */}
            <section style={{ padding: "60px 0 90px", backgroundColor: "#ffffff" }}>
                <div className="container" style={{
                    maxWidth: "860px",
                    color: "#334155",
                    fontSize: "1rem",
                    lineHeight: "1.8"
                }}>
                    {/* Section 1 */}
                    <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#0f172a", marginBottom: "16px" }}>
                        1. Terms
                    </h2>
                    <p style={{ marginBottom: "32px" }}>
                        By accessing this Website, accessible from <a href="https://metricvibes.com/" style={{ color: "#7c3aed", textDecoration: "none", fontWeight: "600" }}>https://metricvibes.com/</a>, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.
                    </p>

                    {/* Section 2 */}
                    <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#0f172a", marginBottom: "16px" }}>
                        2. Use License
                    </h2>
                    <p style={{ marginBottom: "16px" }}>
                        Permission is granted to temporarily download one copy of the materials on Metric Vibes Pvt. Ltd.’s Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                    </p>
                    <ul style={{ paddingLeft: "24px", marginBottom: "20px", listStyleType: "disc" }}>
                        <li style={{ marginBottom: "8px" }}>modify or copy the materials;</li>
                        <li style={{ marginBottom: "8px" }}>use the materials for any commercial purpose or for any public display;</li>
                        <li style={{ marginBottom: "8px" }}>attempt to reverse engineer any software contained on Metric Vibes Pvt. Ltd.’s Website;</li>
                        <li style={{ marginBottom: "8px" }}>remove any copyright or other proprietary notations from the materials; or</li>
                        <li style={{ marginBottom: "8px" }}>transferring the materials to another person or “mirror” the materials on any other server.</li>
                    </ul>
                    <p style={{ marginBottom: "32px" }}>
                        This will let Metric Vibes Pvt. Ltd. to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format.
                    </p>

                    {/* Section 3 */}
                    <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#0f172a", marginBottom: "16px" }}>
                        3. Disclaimer
                    </h2>
                    <p style={{ marginBottom: "32px" }}>
                        All the materials on Metric Vibes Pvt. Ltd.’s Website are provided “as is”. Metric Vibes Pvt. Ltd. makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Metric Vibes Pvt. Ltd. does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.
                    </p>

                    {/* Section 4 */}
                    <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#0f172a", marginBottom: "16px" }}>
                        4. Limitations
                    </h2>
                    <p style={{ marginBottom: "32px" }}>
                        Metric Vibes Pvt. Ltd. or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on Metric Vibes Pvt. Ltd.’s Website, even if Metric Vibes Pvt. Ltd. or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.
                    </p>

                    {/* Section 5 */}
                    <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#0f172a", marginBottom: "16px" }}>
                        5. Revisions and Errata
                    </h2>
                    <p style={{ marginBottom: "32px" }}>
                        The materials appearing on Metric Vibes Pvt. Ltd.’s Website may include technical, typographical, or photographic errors. Metric Vibes Pvt. Ltd. will not promise that any of the materials in this Website are accurate, complete, or current. Metric Vibes Pvt. Ltd. may change the materials contained on its Website at any time without notice. Metric Vibes Pvt. Ltd. does not make any commitment to update the materials.
                    </p>

                    {/* Section 6 */}
                    <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#0f172a", marginBottom: "16px" }}>
                        6. Links
                    </h2>
                    <p style={{ marginBottom: "32px" }}>
                        Metric Vibes Pvt. Ltd. has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by Metric Vibes Pvt. Ltd. of the site. The use of any linked website is at the user's own risk.
                    </p>

                    {/* Section 7 */}
                    <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#0f172a", marginBottom: "16px" }}>
                        7. Site Terms of Use Modifications
                    </h2>
                    <p style={{ marginBottom: "32px" }}>
                        Metric Vibes Pvt. Ltd. may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.
                    </p>

                    {/* Section 8 */}
                    <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#0f172a", marginBottom: "16px" }}>
                        8. Your Privacy
                    </h2>
                    <p style={{ marginBottom: "32px" }}>
                        Please read our <Link to="/privacy" style={{ color: "#7c3aed", fontWeight: "600", textDecoration: "none" }}>Privacy Policy</Link>.
                    </p>

                    {/* Section 9 */}
                    <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#0f172a", marginBottom: "16px" }}>
                        9. Governing Law
                    </h2>
                    <p style={{ marginBottom: "32px" }}>
                        Any claim related to Metric Vibes Pvt. Ltd.’s Website shall be governed by the laws of India without regards to its conflict of law provisions.
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
