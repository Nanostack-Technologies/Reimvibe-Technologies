import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
    { value: 500, label: 'Projects Completed', suffix: '+' },
    { value: 98, label: 'Client Satisfaction', suffix: '%' },
    { value: 50, label: 'Team Experts', suffix: '+' },
    { value: 5, label: 'Years Experience', suffix: '+' },
];

const Stats = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="section" ref={ref} style={{
            background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
            color: 'white',
            padding: '4rem 0',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background decoration to improve contrast if needed */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.1)' }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="grid-cols-4" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '2rem',
                }}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1 }}
                            style={{ padding: '1rem' }}
                        >
                            <div style={{ fontSize: '4rem', fontWeight: '900', marginBottom: '0.5rem', lineHeight: '1', textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
                                {isInView ? <CountUp end={stat.value} duration={2.5} /> : '0'}
                                <span style={{ fontSize: '2.5rem', verticalAlign: 'top', marginLeft: '0.25rem', opacity: 0.9 }}>{stat.suffix}</span>
                            </div>
                            <p style={{ fontSize: '1.2rem', opacity: 0.9, fontWeight: '600', color: 'rgba(255,255,255,0.9)', margin: 0 }}>{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
