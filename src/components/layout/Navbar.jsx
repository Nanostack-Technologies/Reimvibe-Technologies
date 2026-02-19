import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Career', path: '/career' }, // Added Career link
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path ? '#4f46e5' : (scrolled ? '#1e293b' : '#334155');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <div className="container flex-between">
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src="/reimvibe-logo.png" alt="ReimVibe Logo" className="nav-logo" />
            <span className="nav-logo-text">
              Reim<span style={{ color: '#4f46e5' }}>Vibe</span>
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden-mobile" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: isActive(link.path),
                textDecoration: 'none',
                transition: 'color 0.2s',
                position: 'relative'
              }}
              className="nav-link"
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="underline"
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: '#4f46e5',
                    borderRadius: '2px'
                  }}
                />
              )}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn btn-primary"
            style={{
              padding: '0.75rem 2rem',
              fontSize: '0.95rem',
              display: 'flex',
              gap: '0.5rem',
              marginLeft: '1rem'
            }}
          >
            Get Started <ArrowRight size={18} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer', display: 'none', color: '#334155' }}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }} // Full screen menu
            exit={{ opacity: 0, height: 0 }}
            style={{
              position: 'fixed',
              top: '60px', /* Match new navbar height */
              left: 0,
              right: 0,
              bottom: 0,
              background: 'white',
              padding: '2rem',
              zIndex: 999,
              overflowY: 'auto'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', marginTop: '2rem' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: location.pathname === link.path ? '#4f46e5' : '#1e293b',
                    textDecoration: 'none'
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)} className="btn btn-primary" style={{ width: '100%', maxWidth: '300px', padding: '1rem' }}>
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


    </motion.nav>
  );
};

export default Navbar;
