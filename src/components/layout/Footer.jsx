import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: '#0f172a', color: '#f8fafc', padding: '6rem 0 2rem' }}>
            <div className="container">
                <div className="grid-cols-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem' }}>

                    {/* Brand */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            {/* Replaced placeholder with actual logo */}
                            <img src="/reimvibe-logo.png" alt="ReimVibe Logo" style={{ width: '40px', height: 'auto' }} />
                            <span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white' }}>
                                Reim<span style={{ color: '#4f46e5' }}>Vibe</span>
                            </span>
                        </div>
                        <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.6' }}>
                            Transforming businesses with cutting-edge technology and innovative digital solutions.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <div key={i} style={{
                                    padding: '0.75rem', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '50%',
                                    cursor: 'pointer', transition: 'background 0.3s'
                                }}
                                    className="hover-bg-primary">
                                    <Icon size={20} color="white" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.25rem' }}>Connect</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', gap: '0.75rem', color: '#cbd5e1' }}>
                                <MapPin size={20} color="#4f46e5" />
                                <span>123 Tech Park, Innovation Blvd, Silicon Valley</span>
                            </li>
                            <li style={{ display: 'flex', gap: '0.75rem', color: '#cbd5e1' }}>
                                <Phone size={20} color="#4f46e5" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li style={{ display: 'flex', gap: '0.75rem', color: '#cbd5e1' }}>
                                <Mail size={20} color="#4f46e5" />
                                <span>hello@reimvibe.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.25rem' }}>Explore</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            {['Home', 'Services', 'Portfolio', 'About Us', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase().replace(' ', '-')}`} style={{
                                        color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s',
                                        display: 'flex', alignItems: 'center', gap: '0.5rem'
                                    }}>
                                        <ArrowRight size={14} /> {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.25rem' }}>Stay Updated</h4>
                        <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Subscribe to our newsletter for latest updates.</p>
                        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                style={{
                                    padding: '0.75rem 1rem', borderRadius: '8px', border: 'none',
                                    background: 'rgba(255, 255, 255, 0.1)', color: 'white', flex: 1
                                }}
                            />
                            <button className="btn btn-primary" style={{ padding: '0.75rem' }}>
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                <div style={{
                    marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
                    color: '#64748b', fontSize: '0.9rem'
                }}>
                    <span>© {new Date().getFullYear()} ReimVibe Technologies. All rights reserved.</span>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
