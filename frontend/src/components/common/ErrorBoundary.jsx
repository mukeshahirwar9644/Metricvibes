import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught application error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '80vh',
                    padding: '40px 20px',
                    textAlign: 'center',
                    backgroundColor: '#0b0518',
                    color: '#ffffff',
                    fontFamily: 'sans-serif'
                }}>
                    <div style={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '50%',
                        background: 'rgba(239, 68, 68, 0.15)',
                        color: '#ef4444',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.8rem',
                        marginBottom: '20px',
                        border: '1px solid rgba(239, 68, 68, 0.3)'
                    }}>
                        <i className="fas fa-exclamation-triangle"></i>
                    </div>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '12px' }}>Something went wrong</h2>
                    <p style={{ color: '#94a3b8', maxWidth: '500px', marginBottom: '24px', lineHeight: '1.6' }}>
                        An unexpected application error occurred. Please refresh the page or return home.
                    </p>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button 
                            onClick={() => window.location.reload()} 
                            style={{
                                padding: '10px 24px',
                                background: 'linear-gradient(135deg, #7c3aed, #9333ea)',
                                color: '#ffffff',
                                border: 'none',
                                borderRadius: '8px',
                                fontWeight: '600',
                                cursor: 'pointer'
                            }}
                        >
                            Refresh Page
                        </button>
                        <a 
                            href="/" 
                            style={{
                                padding: '10px 24px',
                                background: 'rgba(255, 255, 255, 0.1)',
                                color: '#ffffff',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                fontWeight: '600'
                            }}
                        >
                            Back to Home
                        </a>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
