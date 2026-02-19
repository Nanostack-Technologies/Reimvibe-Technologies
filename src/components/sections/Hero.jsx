import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, BarChart, Code, Smartphone, Globe } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero-section section">
            <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="grid-cols-2" style={{ alignItems: 'center', flex: 1 }}>

                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                marginBottom: '2rem',
                                padding: '0.5rem 1.25rem',
                                background: 'rgba(255, 255, 255, 0.8)',
                                backdropFilter: 'blur(4px)',
                                color: '#4f46e5',
                                borderRadius: '2rem',
                                fontWeight: '700',
                                fontSize: '0.9rem',
                                border: '1px solid rgba(99, 102, 241, 0.2)',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                            }}
                        >
                            <span style={{ position: 'relative', display: 'flex', height: '10px', width: '10px' }}>
                                <span style={{ animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite', position: 'absolute', height: '100%', width: '100%', borderRadius: '50%', background: '#4f46e5', opacity: 0.75 }}></span>
                                <span style={{ position: 'relative', height: '10px', width: '10px', borderRadius: '50%', background: '#4f46e5' }}></span>
                            </span>
                            Top Rated IT Agency 2026
                        </motion.div>

                        <h1 style={{ marginBottom: '1.5rem', lineHeight: '1.1', fontWeight: '900' }}>
                            Transforming <br /> Visions Into <span className="text-gradient">Digital Reality</span>
                        </h1>

                        <p style={{ fontSize: '1.25rem', color: '#475569', marginBottom: '3rem', maxWidth: '600px', lineHeight: '1.8' }}>
                            ReimVibe Technologies builds scalable Websites, high-performance Apps, and custom Software solutions that drive business growth and user engagement.
                        </p>

                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }} className="responsive-flex-center">
                            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                                Get Started <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                            </Link>
                            <Link to="/services" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', borderColor: '#cbd5e1', color: '#475569' }}>
                                Explore Services
                            </Link>
                        </div>

                        {/* Tech Stack Icons (Small) */}
                        <div style={{ marginTop: '4rem' }}>
                            <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold' }}>Trusted Technology Stack</p>
                            <div style={{ display: 'flex', gap: '2rem', opacity: 0.6 }} className="responsive-flex-center">
                                {[Code, Smartphone, Globe, Shield].map((Icon, i) => (
                                    <Icon key={i} size={28} color="#64748b" />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual/Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
                    >
                        {/* Abstract Background Glow */}
                        <div style={{
                            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                            width: '120%', height: '120%',
                            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)',
                            zIndex: -1,
                            filter: 'blur(60px)'
                        }}></div>

                        {/* Hero Graphic */}
                        <div className="glass-card animate-float" style={{
                            width: '100%', maxWidth: '550px', minHeight: '550px',
                            display: 'flex', flexDirection: 'column',
                            position: 'relative', padding: '0', overflow: 'hidden',
                            borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.6)'
                        }}>

                            {/* Mockup Interface Header */}
                            <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(226, 232, 240, 0.6)', display: 'flex', gap: '0.75rem', background: 'rgba(255,255,255,0.8)' }}>
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }}></div>
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }}></div>
                            </div>

                            {/* Mockup Content area with animated graphs/charts */}
                            <div style={{ flex: 1, padding: '2.5rem', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                {/* Decorative Chart Lines */}
                                <svg viewBox="0 0 100 50" style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 4px 6px rgba(99, 102, 241, 0.3))' }}>
                                    <path d="M0 40 Q 25 20, 50 30 T 100 10" fill="none" stroke="#4f46e5" strokeWidth="2" />
                                    <path d="M0 40 Q 25 20, 50 30 T 100 10 L 100 50 L 0 50 Z" fill="url(#gradient)" opacity="0.2" />
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#4f46e5" />
                                            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                {/* Floating Cards within Graphic */}
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    style={{
                                        position: 'absolute', top: '20%', right: '5%',
                                        background: 'white', padding: '1.25rem', borderRadius: '1rem',
                                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                                        display: 'flex', alignItems: 'center', gap: '1rem',
                                        border: '1px solid #f1f5f9'
                                    }}
                                >
                                    <div style={{ padding: '0.75rem', background: '#e0f2fe', borderRadius: '10px' }}>
                                        <Smartphone size={24} color="#0ea5e9" />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.8rem', color: '#64748b' }}>User Growth</div>
                                        <div style={{ fontWeight: 'bold', color: '#1e293b', fontSize: '1.2rem' }}>+125%</div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 15, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    style={{
                                        position: 'absolute', bottom: '15%', left: '5%',
                                        background: 'white', padding: '1.25rem', borderRadius: '1rem',
                                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                                        display: 'flex', alignItems: 'center', gap: '1rem',
                                        border: '1px solid #f1f5f9'
                                    }}
                                >
                                    <div style={{ padding: '0.75rem', background: '#dcfce7', borderRadius: '10px' }}>
                                        <Zap size={24} color="#22c55e" />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Performance</div>
                                        <div style={{ fontWeight: 'bold', color: '#1e293b', fontSize: '1.2rem' }}>Lightning Fast</div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Background Decor */}
            <div className="bg-pattern" style={{ zIndex: 0 }}></div>
        </section>
    );
};

export default Hero;
