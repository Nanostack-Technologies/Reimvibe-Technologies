import { motion } from 'framer-motion';
import { Globe, Smartphone, Code, PenTool, Database, Cloud, ArrowRight } from 'lucide-react';

const services = [
    {
        icon: Globe,
        title: 'Web Development',
        description: 'Custom websites built with modern frameworks like React, Next.js, and Django for speed and SEO.',
        color: '#3b82f6'
    },
    {
        icon: Smartphone,
        title: 'App Development',
        description: 'Native and Cross-platform mobile applications for iOS and Android using Flutter and React Native.',
        color: '#8b5cf6'
    },
    {
        icon: PenTool,
        title: 'UI/UX Design',
        description: 'User-centric design that ensures your product is intuitive, accessible, and visually stunning.',
        color: '#ec4899'
    },
    {
        icon: Code,
        title: 'Custom Software',
        description: 'Tailored software solutions to automate business processes and improve efficiency.',
        color: '#10b981'
    },
    {
        icon: Database,
        title: 'CRM & Dashboards',
        description: 'Powerful admin panels and customer relationship management systems for data-driven decisions.',
        color: '#f59e0b'
    },
    {
        icon: Cloud,
        title: 'Cloud Solutions',
        description: 'Scalable cloud infrastructure setup and management on AWS, Google Cloud, and Azure.',
        color: '#06b6d4'
    }
];

const Services = () => {
    return (
        <section className="section" style={{ background: '#f8fafc' }}>
            <div className="container">

                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        style={{ color: '#4f46e5', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem' }}
                    >
                        What We Do
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ marginTop: '0.5rem', marginBottom: '1rem' }}
                    >
                        Our <span className="text-gradient">Core Services</span>
                    </motion.h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#64748b' }}>
                        We provide end-to-end digital services to help your business grow and stay ahead in the competitive market.
                    </p>
                </div>

                <div className="grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card"
                            style={{
                                background: 'white',
                                border: '1px solid #e2e8f0',
                                padding: '2.5rem 2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                        >
                            <div style={{
                                width: '60px', height: '60px', borderRadius: '16px',
                                background: `${service.color}15`, // 15 = roughly 10% opacity hex
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '1.5rem',
                                color: service.color
                            }}>
                                <service.icon size={32} />
                            </div>

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
                            <p style={{ fontSize: '1rem', color: '#64748b', marginBottom: '2rem', flex: 1 }}>
                                {service.description}
                            </p>

                            <div style={{
                                display: 'flex', alignItems: 'center', gap: '0.5rem',
                                color: service.color, fontWeight: '600', fontSize: '0.9rem'
                            }}>
                                Learn More <ArrowRight size={16} />
                            </div>

                            {/* Hover Glow Effect */}
                            <div style={{
                                position: 'absolute', top: 0, right: 0, width: '100px', height: '100px',
                                background: `radial-gradient(circle at top right, ${service.color}20, transparent 70%)`,
                                borderRadius: '0 0 0 100%'
                            }}></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
