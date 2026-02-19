import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Briefcase, Zap, Coffee, Globe, Users, Smile } from 'lucide-react';

const perks = [
    { icon: Zap, title: "Cutting-Edge Tech", desc: "Work with the latest frameworks and tools in AI, Web, and Mobile." },
    { icon: Globe, title: "Remote Friendly", desc: "Work from anywhere or from our modern offices. Your choice." },
    { icon: Coffee, title: "Work-Life Balance", desc: "Flexible hours and unlimited coffee (or tea)!" },
    { icon: Users, title: "Collaborative Culture", desc: "A supportive team that learns and grows together." },
    { icon: Briefcase, title: "Career Growth", desc: "Regular mentorship, workshops, and conference budgets." },
    { icon: Smile, title: "Health & Wellness", desc: "Comprehensive insurance and wellness programs." }
];

const jobs = [
    {
        title: "Senior Full Stack Engineer",
        type: "Full-time",
        location: "Remote / Hybrid",
        dept: "Engineering",
        desc: "We are looking for an experienced developer to lead our core product team using React, Node.js, and Python."
    },
    {
        title: "UI/UX Designer",
        type: "Full-time",
        location: "On-site",
        dept: "Design",
        desc: "Create intuitive and beautiful user interfaces that solve complex problems for our global clients."
    },
    {
        title: "Marketing Specialist",
        type: "Contract",
        location: "Remote",
        dept: "Marketing",
        desc: "Drive our digital presence and help us reach new markets through innovative campaigns."
    }
];

const Career = () => {
    return (
        <>
            <Helmet>
                <title>Careers at ReimVibe Technologies | Join Our Team</title>
                <meta name="description" content="Join ReimVibe Technologies and build the future of digital solutions. We are hiring developers, designers, and innovators." />
            </Helmet>
            <Navbar />

            <main style={{ paddingTop: '5rem' }}>
                {/* Hero Section */}
                <section className="section" style={{ background: '#f8fafc', textAlign: 'center', padding: '8rem 0 4rem' }}>
                    <div className="container">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-gradient"
                        >
                            Build The Future With Us
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            style={{ maxWidth: '700px', margin: '1rem auto 3rem', fontSize: '1.25rem' }}
                        >
                            At ReimVibe, we don't just write code; we craft experiences. Join a team of passionate innovators dedicated to transforming visions into reality.
                        </motion.p>
                        <motion.a
                            href="#openings"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="btn btn-primary"
                        >
                            View Open Positions
                        </motion.a>
                    </div>
                </section>

                {/* Perks Section */}
                <section className="section">
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2>Why ReimVibe?</h2>
                            <p>More than just a job, it's a lifestyle.</p>
                        </div>
                        <div className="grid-cols-3">
                            {perks.map((perk, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass-card text-center"
                                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                                >
                                    <div style={{ padding: '1rem', background: '#e0e7ff', borderRadius: '50%', marginBottom: '1.5rem', color: '#4f46e5' }}>
                                        <perk.icon size={32} />
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{perk.title}</h3>
                                    <p style={{ fontSize: '0.95rem', marginBottom: 0 }}>{perk.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Openings Section */}
                <section id="openings" className="section" style={{ background: '#f1f5f9' }}>
                    <div className="container">
                        <h2 style={{ marginBottom: '3rem', textAlign: 'center' }}>Current Openings</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
                            {jobs.map((job, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    style={{
                                        background: 'white',
                                        padding: '2rem',
                                        borderRadius: '1rem',
                                        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                        gap: '1rem'
                                    }}
                                >
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                                            <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{job.title}</h3>
                                            <span style={{ fontSize: '0.75rem', background: '#dcfce7', color: '#166534', padding: '0.25rem 0.5rem', borderRadius: '4px', fontWeight: '600' }}>{job.type}</span>
                                        </div>
                                        <p style={{ margin: 0, color: '#64748b' }}>{job.dept} • {job.location}</p>
                                        <p style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>{job.desc}</p>
                                    </div>
                                    <button className="btn btn-outline" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>Apply Now</button>
                                </motion.div>
                            ))}
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <p>Don't see your role? Send your resume to <a href="mailto:careers@reimvibe.com" style={{ color: '#4f46e5', fontWeight: 'bold' }}>careers@reimvibe.com</a></p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Career;
