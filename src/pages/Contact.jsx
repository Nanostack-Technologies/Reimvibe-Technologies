import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact ReimVibe Technologies | Get In Touch</title>
                <meta name="description" content="Reach out to ReimVibe Technologies for your next project. We are ready to help you transform your ideas into digital reality." />
            </Helmet>
            <Navbar />

            <main style={{ paddingTop: '5rem' }}>
                <section className="section" style={{ background: '#f8fafc', padding: '8rem 0 4rem' }}>
                    <div className="container" style={{ textAlign: 'center' }}>
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            style={{ marginBottom: '1.5rem' }}
                        >
                            Let's Discuss Your <span className="text-gradient">Next Big Idea</span>
                        </motion.h1>
                        <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
                            Ready to start your digital transformation? Fill out the form below or reach us directly.
                        </p>
                    </div>
                </section>

                <section className="section">
                    <div className="container grid-cols-2" style={{ gap: '4rem' }}>
                        {/* Contact Info */}
                        <motion.div>
                            <div style={{ padding: '2rem', background: '#0f172a', color: 'white', borderRadius: '1rem', height: '100%' }}>
                                <div style={{ marginBottom: '3rem' }}>
                                    <h2 style={{ color: 'white', fontSize: '2rem' }}>Contact Information</h2>
                                    <p style={{ color: '#94a3b8' }}>Fill up the form and our team will get back to you within 24 hours.</p>
                                </div>

                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                        <Phone size={24} color="#4f46e5" />
                                        <div>
                                            <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Phone</div>
                                            <div style={{ color: '#cbd5e1' }}>+1 (555) 123-4567</div>
                                            <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Mon-Fri 9am-6pm</div>
                                        </div>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                        <Mail size={24} color="#4f46e5" />
                                        <div>
                                            <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Email</div>
                                            <div style={{ color: '#cbd5e1' }}>hello@reimvibe.com</div>
                                            <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Online support 24/7</div>
                                        </div>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                        <MapPin size={24} color="#4f46e5" />
                                        <div>
                                            <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Headquarters</div>
                                            <div style={{ color: '#cbd5e1' }}>
                                                123 Tech Park, Innovation Blvd<br />
                                                Silicon Valley, CA 94025
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                <div style={{ marginTop: '4rem', display: 'flex', gap: '1rem' }}>
                                    <div className="glass-card" style={{ padding: '1rem', background: 'rgba(255,255,255,0.1)', border: 'none' }}>
                                        Twitter
                                    </div>
                                    <div className="glass-card" style={{ padding: '1rem', background: 'rgba(255,255,255,0.1)', border: 'none' }}>
                                        LinkedIn
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Form */}
                        <motion.div>
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2rem 0' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                    <div className="flex-column">
                                        <label style={{ fontWeight: '600', marginBottom: '0.5rem' }}>First Name</label>
                                        <input type="text" placeholder="John" style={{ padding: '1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', background: '#f8fafc' }} />
                                    </div>
                                    <div className="flex-column">
                                        <label style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Last Name</label>
                                        <input type="text" placeholder="Doe" style={{ padding: '1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', background: '#f8fafc' }} />
                                    </div>
                                </div>

                                <div className="flex-column">
                                    <label style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Email Address</label>
                                    <input type="email" placeholder="john@example.com" style={{ padding: '1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', background: '#f8fafc' }} />
                                </div>

                                <div className="flex-column">
                                    <label style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Service Interested In</label>
                                    <select style={{ padding: '1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', background: '#f8fafc' }}>
                                        <option>Web Development</option>
                                        <option>App Development</option>
                                        <option>UI/UX Design</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="flex-column">
                                    <label style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Bio / Message</label>
                                    <textarea rows="5" placeholder="Tell us about your project..." style={{ padding: '1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', background: '#f8fafc', resize: 'vertical' }}></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', fontSize: '1.1rem', padding: '1rem 3rem' }}>
                                    Send Message <Send size={20} style={{ marginLeft: '0.5rem' }} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Contact;
