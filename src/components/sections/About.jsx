import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, Users, Zap, Award } from 'lucide-react';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const benefits = [
        'User-Centric Design Philosophy',
        'Agile Development Methodology',
        'Scalable & Secure Architecture',
        'Dedicated 24/7 Support Team'
    ];

    return (
        <section className="section" ref={ref} style={{ overflow: 'hidden' }}>
            <div className="container grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                        <span style={{ width: '40px', height: '2px', background: '#4f46e5' }}></span>
                        <span style={{ color: '#4f46e5', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem' }}>Who We Are</span>
                    </div>

                    <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>
                        Pioneering the Future of <br /><span className="text-gradient">Digital Excellence</span>
                    </h2>

                    <p style={{ color: '#64748b', fontSize: '1.125rem', marginBottom: '2rem', lineHeight: '1.8' }}>
                        ReimVibe Technologies isn't just an IT company; we are your strategic partners in innovation. Founded with a vision to bridge the gap between complex technology and business needs, we deliver solutions that are not only robust but also intuitive and engaging.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2.5rem' }}>
                        {benefits.map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '600', color: '#1e293b' }}>
                                <div style={{ padding: '0.25rem', background: '#dcfce7', borderRadius: '50%', display: 'flex' }}>
                                    <CheckCircle color="#10b981" size={16} />
                                </div>
                                {item}
                            </div>
                        ))}
                    </div>

                    <div style={{ paddingLeft: '1.5rem', borderLeft: '4px solid #4f46e5' }}>
                        <p style={{ fontStyle: 'italic', color: '#475569', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                            "We don't just write code; we write success stories for our clients through technology."
                        </p>
                        <div style={{ fontWeight: 'bold' }}>— CEO, ReimVibe Technologies</div>
                    </div>
                </motion.div>

                {/* Right Image/Graphic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8 }}
                    style={{ position: 'relative' }}
                >
                    <div style={{
                        position: 'relative',
                        borderRadius: '2rem',
                        overflow: 'hidden',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                        background: 'linear-gradient(135deg, #e0e7ff 0%, #f3e8ff 100%)',
                        minHeight: '500px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {/* Abstract Representation of Team/Office */}
                        <div style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.5 }}>
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                                <path fill="#4F46E5" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.3,82.1,22.9,71.3,34.6C60.5,46.2,50.3,55.9,38.8,63.4C27.3,70.9,14.5,76.2,0.9,74.6C-12.7,73,-25.3,64.5,-37.2,56.1C-49.1,47.7,-60.2,39.4,-68.8,28.6C-77.4,17.8,-83.4,4.5,-82.7,-8.4C-82,-21.3,-74.6,-33.8,-64.8,-43.8C-55,-53.8,-42.8,-61.3,-30.3,-69.5C-17.8,-77.7,-5,-86.6,6.4,-88.7C17.8,-90.8,35.6,-86.1,44.7,-76.4Z" transform="translate(100 100) scale(1.1)" opacity="0.1" />
                            </svg>
                        </div>

                        <div className="grid-cols-2" style={{ gap: '1rem', width: '80%', position: 'relative', zIndex: 1 }}>
                            <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                                <Users size={32} color="#4f46e5" style={{ marginBottom: '0.5rem' }} />
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Expert Team</h4>
                                <p style={{ fontSize: '0.85rem', margin: 0 }}>Skilled Professionals</p>
                            </div>
                            <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center', marginTop: '2rem' }}>
                                <Award size={32} color="#f59e0b" style={{ marginBottom: '0.5rem' }} />
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Award Winning</h4>
                                <p style={{ fontSize: '0.85rem', margin: 0 }}>Recognized Quality</p>
                            </div>
                            <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                                <Zap size={32} color="#10b981" style={{ marginBottom: '0.5rem' }} />
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Fast Delivery</h4>
                                <p style={{ fontSize: '0.85rem', margin: 0 }}>On-time Execution</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
