import React, { useState, useEffect } from 'react';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent_status');
        if (!consent) {
            setIsVisible(true);
            document.body.style.paddingBottom = '32px';
        } else {
            document.body.style.paddingBottom = '0px';
        }
        return () => {
            document.body.style.paddingBottom = '0px';
        };
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie_consent_status', 'accepted');
        document.body.style.paddingBottom = '0px';
        setIsVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem('cookie_consent_status', 'rejected');
        document.body.style.paddingBottom = '0px';
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: `
                .cookie-banner-wrapper {
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    z-index: 99999;
                    background: rgba(15, 10, 30, 0.45);
                    backdrop-filter: blur(16px) saturate(180%);
                    -webkit-backdrop-filter: blur(16px) saturate(180%);
                    color: #ffffff;
                    padding: 2px 20px;
                    height: 32px;
                    box-sizing: border-box;
                    box-shadow: 0 -2px 15px rgba(0, 0, 0, 0.15);
                    border-top: 1px solid rgba(255, 255, 255, 0.18);
                    font-family: 'Inter', system-ui, -apple-system, sans-serif;
                    display: flex;
                    align-items: center;
                }
                .cookie-banner-container {
                    width: 100%;
                    max-width: 1400px;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 12px;
                }
                .cookie-text-ticker-container {
                    flex: 1;
                    overflow: hidden;
                    white-space: nowrap;
                    position: relative;
                    text-align: center;
                }
                .cookie-banner-text {
                    font-size: 0.76rem;
                    line-height: 1;
                    color: #f8fafc;
                    margin: 0;
                    display: inline-block;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
                    text-align: center;
                }
                .cookie-banner-actions {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    flex-shrink: 0;
                }
                .cookie-btn {
                    padding: 0 12px;
                    height: 22px;
                    line-height: 22px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    border-radius: 4px;
                    border: none;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    white-space: nowrap;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }
                .cookie-btn-reject {
                    background-color: rgba(255, 255, 255, 0.12);
                    color: #f8fafc;
                    border: 1px solid rgba(255, 255, 255, 0.22);
                    backdrop-filter: blur(4px);
                }
                .cookie-btn-reject:hover {
                    background-color: rgba(255, 255, 255, 0.22);
                    border-color: rgba(255, 255, 255, 0.35);
                }
                .cookie-btn-accept {
                    background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%);
                    color: #ffffff;
                    font-weight: 700;
                    box-shadow: 0 2px 10px rgba(124, 58, 237, 0.35);
                    border: 1px solid rgba(167, 139, 250, 0.4);
                }
                .cookie-btn-accept:hover {
                    background: linear-gradient(135deg, #6d28d9 0%, #4338ca 100%);
                    box-shadow: 0 4px 14px rgba(124, 58, 237, 0.55);
                }

                @media (max-width: 768px) {
                    .cookie-banner-wrapper {
                        height: 28px !important;
                        padding: 1px 8px !important;
                        background: rgba(15, 10, 30, 0.75) !important;
                    }
                    .cookie-banner-container {
                        gap: 6px !important;
                    }
                    .cookie-text-ticker-container {
                        mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
                        -webkit-mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
                    }
                    .cookie-banner-text {
                        font-size: 0.7rem !important;
                        text-overflow: clip !important;
                        padding-left: 100%;
                        animation: cookie-mobile-slide 18s linear infinite;
                    }
                    .cookie-banner-actions {
                        gap: 5px !important;
                    }
                    .cookie-btn {
                        height: 20px !important;
                        line-height: 20px !important;
                        font-size: 0.68rem !important;
                        padding: 0 7px !important;
                        border-radius: 3px !important;
                    }
                }

                @keyframes cookie-mobile-slide {
                    0% {
                        transform: translate3d(0, 0, 0);
                    }
                    100% {
                        transform: translate3d(-100%, 0, 0);
                    }
                }
            ` }} />

            <div className="cookie-banner-wrapper" role="alert" aria-live="polite">
                <div className="cookie-banner-container">
                    <div className="cookie-text-ticker-container">
                        <p className="cookie-banner-text">
                            Our website uses cookies to give you the best and most relevant experience. By continuing to access this site, you consent to our use of cookies. &nbsp; • &nbsp;
                        </p>
                    </div>
                    <div className="cookie-banner-actions">
                        <button 
                            type="button" 
                            className="cookie-btn cookie-btn-reject"
                            onClick={handleReject}
                        >
                            Do not track
                        </button>
                        <button 
                            type="button" 
                            className="cookie-btn cookie-btn-accept"
                            onClick={handleAccept}
                        >
                            I Accept
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
