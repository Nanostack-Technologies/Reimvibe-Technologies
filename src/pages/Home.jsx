import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import Stats from '../components/sections/Stats';
import TechStack from '../components/sections/TechStack';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>ReimVibe Technologies | Innovative IT Solutions & Digital Agency</title>
                <meta name="description" content="ReimVibe Technologies provides top-tier Web Development, Mobile Apps, CRM Design, and Digital Transformation services. We build aesthetic, scalable, and production-ready software." />
                <meta name="keywords" content="ReimVibe, IT Company, Web Development, React, Software Agency, Digital Solutions" />
            </Helmet>

            <Navbar />

            <main>
                <Hero />

                {/* Floating Divider */}
                <div style={{ height: '4rem', background: 'linear-gradient(to bottom, transparent, #f8fafc)' }}></div>

                <Stats />

                <About />

                <TechStack />

                <Services />

                {/* Highlight/Process Section */}
                <section className="section" style={{ background: '#f8fafc' }}>
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '2.5rem' }}>How We <span className="text-gradient">Deliver Excellence</span></h2>
                            <p style={{ color: '#64748b' }}>Our proven process ensures transparency, quality, and timely delivery.</p>
                        </div>

                        <div className="grid-cols-4" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                            gap: '2rem',
                            position: 'relative'
                        }}>
                            {[
                                { step: '01', title: 'Discovery', desc: 'Understanding your goals & requirements.' },
                                { step: '02', title: 'Design', desc: 'Creating intuitive & beautiful interfaces.' },
                                { step: '03', title: 'Develop', desc: 'Building robust & scalable code.' },
                                { step: '04', title: 'Launch', desc: 'Deploying & optimizing for success.' }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    style={{
                                        background: 'white',
                                        padding: '2rem',
                                        borderRadius: '1rem',
                                        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                                        position: 'relative',
                                        zIndex: 1
                                    }}
                                >
                                    <div style={{
                                        fontSize: '3rem', fontWeight: '900', color: '#e2e8f0',
                                        position: 'absolute', top: '1rem', right: '1rem', lineHeight: 1
                                    }}>
                                        {item.step}
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', position: 'relative' }}>{item.title}</h3>
                                    <p style={{ fontSize: '0.9rem', color: '#64748b', margin: 0 }}>{item.desc}</p>
                                </motion.div>
                            ))}

                            {/* Connecting Line (Desktop) */}
                            <div className="hidden-mobile" style={{
                                position: 'absolute', top: '50%', left: '0', width: '100%', height: '2px',
                                background: 'linear-gradient(90deg, #4f46e5, #06b6d4)',
                                zIndex: 0, transform: 'translateY(-50%)', opacity: 0.2
                            }}></div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section" style={{ background: '#0f172a', color: 'white', textAlign: 'center', padding: '8rem 0' }}>
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 style={{ marginBottom: '1.5rem', lineHeight: '1.1', color: 'white' }}>
                                Ready to Transform <br /> Your <span className="text-gradient">Digital Presence?</span>
                            </h2>
                            <p style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.25rem', color: '#94a3b8' }}>
                                Join hands with ReimVibe Technologies to build solutions that matter. Let's turn your idea into a market-leading product.
                            </p>
                            <a href="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem', boxShadow: '0 0 20px rgba(79, 70, 229, 0.5)' }}>
                                Start Your Project Now
                            </a>
                        </motion.div>
                    </div>

                    {/* Background Glow */}
                    <div style={{
                        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
                        width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
                        pointerEvents: 'none'
                    }}></div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Home;
