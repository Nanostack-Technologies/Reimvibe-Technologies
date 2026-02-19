import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Globe, Smartphone, Code, PenTool, Database, Cloud, ArrowRight, Check } from 'lucide-react';

const services = [
    {
        icon: Globe,
        title: 'Web Design & Development',
        desc: 'From landing pages to complex enterprise web apps, we build scalable solutions using React, Next.js, and Django.',
        features: ['Responsive Design', 'SEO Optimization', 'React/Next.js Architecture', 'CMS Integration']
    },
    {
        icon: Smartphone,
        title: 'Mobile App Development',
        desc: 'Native and cross-platform mobile apps that provide seamless user experiences on iOS and Android.',
        features: ['Flutter & React Native', 'iOS & Android', 'App Store Submission', 'Push Notifications']
    },
    {
        icon: PenTool,
        title: 'UI/UX Design',
        desc: 'User-centric design that focuses on usability, accessibility, and visual appeal to keep users engaged.',
        features: ['Wireframing & Prototyping', 'User Research', 'Brand Identity', 'Interaction Design']
    },
    {
        icon: Code,
        title: 'Custom Software',
        desc: 'Tailored software solutions designed to automate your specific business processes and inefficient workflows.',
        features: ['Automation Tools', 'API Development', 'Legacy System Modernization', 'SaaS Products']
    },
    {
        icon: Database,
        title: 'CRM & Admin Panels',
        desc: 'Powerful dashboards to visualize data, manage customers, and track business performance in real-time.',
        features: ['Data Visualization', 'User Management', 'Reporting Tools', 'Custom Workflows']
    },
    {
        icon: Cloud,
        title: 'Cloud & DevOps',
        desc: 'Secure and scalable cloud infrastructure setup to ensure your applications are always online and performant.',
        features: ['AWS/Azure/GCP', 'CI/CD Pipelines', 'Docker & Kubernetes', 'Server Management']
    }
];

const Services = () => {
    return (
        <>
            <Helmet>
                <title>Services | Web & App Development, Design, Cloud Solutions</title>
                <meta name="description" content="ReimVibe Technologies offers comprehensive IT services including Web Development, Mobile Apps, UI/UX Design, and Cloud Solutions." />
            </Helmet>
            <Navbar />

            <main style={{ paddingTop: '5rem' }}>
                <section className="section" style={{ background: '#f8fafc', padding: '8rem 0 4rem' }}>
                    <div className="container" style={{ textAlign: 'center' }}>
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-gradient"
                        >
                            Solutions That Scale
                        </motion.h1>
                        <p style={{ maxWidth: '700px', margin: '1.5rem auto 3rem', fontSize: '1.25rem' }}>
                            We leverage the latest technologies to build digital products that drive results. Explore our comprehensive range of services.
                        </p>
                    </div>
                </section>

                <section className="section">
                    <div className="container grid-cols-2" style={{ gap: '3rem' }}>
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card"
                                style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}
                                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}
                            >
                                <div style={{
                                    width: '60px', height: '60px', borderRadius: '1rem',
                                    background: 'linear-gradient(135deg, #e0e7ff 0%, #f3e8ff 100%)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    marginBottom: '1.5rem', color: '#4f46e5'
                                }}>
                                    <service.icon size={32} />
                                </div>

                                <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{service.title}</h3>
                                <p style={{ fontSize: '1rem', color: '#64748b', marginBottom: '2rem', lineHeight: '1.6' }}>
                                    {service.desc}
                                </p>

                                <ul style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {service.features.map((feature, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: '#334155' }}>
                                            <div style={{ padding: '0.2rem', background: '#dcfce7', borderRadius: '50%', display: 'flex' }}>
                                                <Check size={12} color="#16a34a" />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #f1f5f9' }}>
                                    <a href="/contact" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4f46e5', fontWeight: '600' }}>
                                        Start Project <ArrowRight size={18} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="section" style={{ background: '#0f172a', color: 'white', textAlign: 'center' }}>
                    <div className="container">
                        <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '2rem' }}>Ready to Get Started?</h2>
                        <a href="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}>
                            Get a Free Consultation
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Services;
