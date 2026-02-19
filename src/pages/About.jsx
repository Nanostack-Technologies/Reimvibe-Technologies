import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Lightbulb, Target, Users, Heart, Zap, Search, PenTool, Code, Rocket, Check, ArrowRight, Award, Clock, Smile } from 'lucide-react';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About ReimVibe Technologies | Our Story & Vision</title>
                <meta name="description" content="Learn about ReimVibe Technologies, our journey, and the talented team driving digital innovation across the globe." />
            </Helmet>
            <Navbar />

            <main style={{ paddingTop: '5rem' }}>
                <section className="section" style={{ background: '#f8fafc', padding: '8rem 0 4rem' }}>
                    <div className="container" style={{ textAlign: 'center' }}>
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            We Are <span className="text-gradient">ReimVibe</span>
                        </motion.h1>
                        <p style={{ maxWidth: '700px', margin: '1.5rem auto 3rem', fontSize: '1.25rem' }}>
                            A team of dreamers, creators, and innovators committed to reshaping the digital landscape through technology.
                        </p>
                    </div>
                </section>

                <section className="section">
                    <div className="container grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            style={{ position: 'relative', margin: '0 0 3rem' }}
                        >
                            <div style={{ position: 'relative', maxWidth: '400px', margin: '0 auto' }}>
                                <div style={{ height: '350px', width: '100%', background: 'linear-gradient(135deg, #e0e7ff 0%, #f3e8ff 100%)', borderRadius: '1.5rem', overflow: 'hidden' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#4f46e5' }}>
                                        <Users size={64} opacity={0.5} />
                                    </div>
                                </div>
                                <div style={{ position: 'absolute', bottom: '-1.5rem', right: '-1rem', background: 'white', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
                                    <div style={{ fontWeight: '800', fontSize: '2rem', color: '#4f46e5' }}>5+</div>
                                    <div style={{ color: '#64748b', fontSize: '0.9rem' }}>Years of Excellence</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="hero-content"
                        >
                            <h2 style={{ marginBottom: '1.5rem' }}>Our Story</h2>
                            <p>
                                Founded in 2020, ReimVibe Technologies started with a simple idea: technology should be accessible, beautiful, and functional. What began as a small group of passionate developers has grown into a full-service agency partnering with startups and enterprises worldwide.
                            </p>
                            <p>
                                We believe in the power of code to solve real-world problems. Whether it's streamlining a business process or creating an engaging consumer app, our goal remains the same: <strong>Deliver Value.</strong>
                            </p>
                            <div style={{ marginTop: '2rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }} className="responsive-flex-center">
                                <div style={{ padding: '0.5rem 1rem', background: '#f1f5f9', borderRadius: '2rem', fontSize: '0.875rem' }}>#Innovation</div>
                                <div style={{ padding: '0.5rem 1rem', background: '#f1f5f9', borderRadius: '2rem', fontSize: '0.875rem' }}>#Quality</div>
                                <div style={{ padding: '0.5rem 1rem', background: '#f1f5f9', borderRadius: '2rem', fontSize: '0.875rem' }}>#Integrity</div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Key Stats Section */}
                <section className="section" style={{ background: '#f1f5f9' }}>
                    <div className="container">
                        <div className="grid-cols-4" style={{ textAlign: 'center' }}>
                            {[
                                { icon: Award, count: '50+', label: 'Awards Won', color: '#f59e0b' },
                                { icon: Code, count: '100+', label: 'Projects Completed', color: '#3b82f6' },
                                { icon: Smile, count: '98%', label: 'Happy Clients', color: '#10b981' },
                                { icon: Clock, count: '24/7', label: 'Support Available', color: '#8b5cf6' }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    style={{ padding: '2rem', background: 'white', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}
                                >
                                    <div style={{ margin: '0 auto 1rem', width: '60px', height: '60px', background: `${stat.color}15`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <stat.icon size={30} color={stat.color} />
                                    </div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '0.5rem' }}>{stat.count}</div>
                                    <div style={{ color: '#64748b', fontWeight: '500' }}>{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section" style={{ background: '#0f172a', color: 'white' }}>
                    <div className="container">
                        <div className="grid-cols-3">
                            <div style={{ textAlign: 'center', padding: '2rem' }}>
                                <div style={{ margin: '0 auto 1.5rem', width: '80px', height: '80px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Target size={40} color="#60a5fa" />
                                </div>
                                <h3 style={{ color: 'white', fontSize: '1.5rem' }}>Our Mission</h3>
                                <p style={{ color: '#cbd5e1' }}>To empower businesses with scalable and intelligent technology solutions that drive sustainable growth.</p>
                            </div>
                            <div style={{ textAlign: 'center', padding: '2rem', borderLeft: '1px solid rgba(255,255,255,0.1)', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                                <div style={{ margin: '0 auto 1.5rem', width: '80px', height: '80px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Lightbulb size={40} color="#fbbf24" />
                                </div>
                                <h3 style={{ color: 'white', fontSize: '1.5rem' }}>Our Vision</h3>
                                <p style={{ color: '#cbd5e1' }}>To be the global standard for digital innovation, recognized for our creativity and technical excellence.</p>
                            </div>
                            <div style={{ textAlign: 'center', padding: '2rem' }}>
                                <div style={{ margin: '0 auto 1.5rem', width: '80px', height: '80px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Heart size={40} color="#f472b6" />
                                </div>
                                <h3 style={{ color: 'white', fontSize: '1.5rem' }}>Our Values</h3>
                                <p style={{ color: '#cbd5e1' }}>Client-centricity, transparency, and continuous learning are at the heart of everything we do.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Approach Section */}
                <section className="section">
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Approach</h2>
                            <p style={{ maxWidth: '600px', margin: '0 auto', color: '#64748b' }}>We follow a proven methodology to ensure every project is delivered on time and exceeds expectations.</p>
                        </div>
                        <div className="grid-cols-4" style={{ gap: '2rem' }}>
                            {[
                                { icon: Search, title: 'Discovery', desc: 'We dive deep into your business goals and requirements.' },
                                { icon: PenTool, title: 'Design', desc: 'Crafting intuitive and beautiful interfaces for your users.' },
                                { icon: Code, title: 'Development', desc: 'Writing clean, scalable code using modern tech stacks.' },
                                { icon: Rocket, title: 'Launch & Grow', desc: 'Deploying your solution and supporting your growth.' }
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -10 }}
                                    style={{ padding: '2rem', borderRadius: '1rem', border: '1px solid #f1f5f9', position: 'relative', overflow: 'hidden' }}
                                >
                                    <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '5rem', fontWeight: '900', color: '#f1f5f9', opacity: 0.5 }}>0{i + 1}</div>
                                    <div style={{ marginBottom: '1.5rem', color: '#4f46e5' }}>
                                        <step.icon size={32} />
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{step.title}</h3>
                                    <p style={{ color: '#64748b', fontSize: '0.9rem' }}>{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Meet The Team Section */}
                <section className="section" style={{ background: '#f8fafc' }}>
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Meet The team</h2>
                            <p style={{ maxWidth: '600px', margin: '0 auto', color: '#64748b' }}>The talented individuals behind ReimVibe Technologies.</p>
                        </div>
                        <div className="grid-cols-3" style={{ gap: '2rem' }}>
                            {[1, 2, 3].map((member, i) => (
                                <div key={i} style={{ background: 'white', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                                    <div style={{ height: '250px', background: '#cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Users size={48} color="white" />
                                    </div>
                                    <div style={{ padding: '1.5rem' }}>
                                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Team Member {member}</h3>
                                        <p style={{ color: '#4f46e5', fontSize: '0.9rem', marginBottom: '1rem' }}>Position Title</p>
                                        <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Passionate about building great software and solving complex problems.</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section" style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #0ea5e9 100%)', color: 'white', textAlign: 'center' }}>
                    <div className="container">
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Want to Join Our Team?</h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem', color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>
                            We are always looking for talented individuals to join us on our mission. Checked out our open positions.
                        </p>
                        <Link to="/contact" className="btn" style={{ background: 'white', color: '#4f46e5', padding: '1rem 2.5rem' }}>
                            View Careers <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default About;
