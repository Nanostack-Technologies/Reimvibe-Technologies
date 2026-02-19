import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ExternalLink, Tag } from 'lucide-react';

const projects = [
    {
        title: "E-Commerce Reimagined",
        category: "Web Development",
        desc: "A full-stack Next.js platform for a leading fashion retailer with real-time inventory and AI-powered recommendations.",
        bg: "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)",
        color: "#db2777"
    },
    {
        title: "FinTech Dashboard",
        category: "Dashboard & CRM",
        desc: "Secure, high-performance financial analytics dashboard handling millions of transactions daily with React and D3.js.",
        bg: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",
        color: "#0284c7"
    },
    {
        title: "HealthTrack App",
        category: "Mobile App",
        desc: "Cross-platform mobile application for patient monitoring and telemedicine, built with Flutter.",
        bg: "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)",
        color: "#16a34a"
    },
    {
        title: "Real Estate Portal",
        category: "Web & Mobile",
        desc: "Property listing and management platform with virtual tours and map integration.",
        bg: "linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%)",
        color: "#ea580c"
    },
    {
        title: "EdTech Learning System",
        category: "SaaS Platform",
        desc: "Comprehensive LMS for schools and universities with video streaming and interactive quizzes.",
        bg: "linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)",
        color: "#9333ea"
    },
    {
        title: "Travel Booking Engine",
        category: "Web Development",
        desc: "Custom booking engine for a travel agency with flight and hotel API integrations.",
        bg: "linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)",
        color: "#dc2626"
    }
];

const Portfolio = () => {
    return (
        <>
            <Helmet>
                <title>Portfolio | ReimVibe Technologies Case Studies</title>
                <meta name="description" content="Explore our portfolio of successful projects in web development, mobile apps, and enterprise software. See how we help businesses grow." />
            </Helmet>
            <Navbar />

            <main style={{ paddingTop: '5rem' }}>
                <section className="section" style={{ background: '#f8fafc', padding: '8rem 0 4rem' }}>
                    <div className="container" style={{ textAlign: 'center' }}>
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-gradient"
                        >
                            Our Work Speaks For Itself
                        </motion.h1>
                        <p style={{ maxWidth: '700px', margin: '1.5rem auto 3rem', fontSize: '1.25rem' }}>
                            We tackle complex challenges and deliver elegant solutions. Here is a selection of our recent projects.
                        </p>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div className="grid-cols-2">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="glass-card"
                                    style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}
                                    whileHover={{ y: -10 }}
                                >
                                    {/* Mockup / Image Area */}
                                    <div style={{ height: '250px', background: project.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                        <div style={{ padding: '2rem', textAlign: 'center', opacity: 0.8, fontWeight: 'bold', fontSize: '1.5rem', color: project.color }}>
                                            {project.title} Preview
                                        </div>
                                    </div>

                                    <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                            <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: project.color, letterSpacing: '0.05em', background: `${project.color}15`, padding: '0.25rem 0.75rem', borderRadius: '1rem' }}>
                                                {project.category}
                                            </span>
                                            <ExternalLink size={20} color="#94a3b8" style={{ cursor: 'pointer' }} />
                                        </div>

                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{project.title}</h3>
                                        <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: '1.6', flex: 1 }}>
                                            {project.desc}
                                        </p>

                                        <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #f1f5f9', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                            {['React', 'Node.js', 'AWS'].map((tag, i) => ( // Placeholder tags
                                                <div key={i} style={{ fontSize: '0.75rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                                    <Tag size={12} /> {tag}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Portfolio;
