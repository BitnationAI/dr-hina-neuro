// Complete Dr. Hina Neuro Demo Site
'use client';

import { motion, Variants } from 'framer-motion';
import {
  Brain,
  Calendar,
  Users,
  Award,
  ChevronDown,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Stethoscope,
  Heart,
  Shield,
  Sparkles,
  Microscope,
  Pill,
  Monitor,
  Menu,
  X,
  ChevronRight,
  Quote,
  Star,
  Zap,
  GraduationCap,
  Briefcase,
  CheckCircle,
  MapPin as MapPinIcon,
  MessageSquare,
  FileText,
  Shield as ShieldIcon,
  Truck,
  RotateCcw,
  Activity,
  ClipboardCheck,
  Linkedin,
  Twitter,
} from 'lucide-react';
import { useState, useEffect } from 'react';

// Components
const Button = ({ children, className = '', variant = 'primary', size = 'md', ...props }: { children: React.ReactNode; className?: string; variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost'; size?: 'sm' | 'md' | 'lg'; }) => {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
  } as const;
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  } as const;
  return (
    <button className={variants[variant] + ' ' + sizes[size] + ' ' + className} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children, className = '', hover = false, ...props }: { children: React.ReactNode; className?: string; hover?: boolean; }) => {
  return (
    <div className={'card ' + (hover ? 'card-hover' : '') + ' ' + className} {...props}>
      {children}
    </div>
  );
};

const Input = ({ label, error, ...props }: { label?: string; error?: string; name?: string; placeholder?: string; required?: boolean; type?: string; }) => {
  return (
    <div className="w-full">
      {label && <label className="label">{label}</label>}
      <input className="input-field" {...props} />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

const Textarea = ({ label, error, ...props }: { label?: string; error?: string; name?: string; placeholder?: string; required?: boolean; rows?: number; }) => {
  return (
    <div className="w-full">
      {label && <label className="label">{label}</label>}
      <textarea className="input-field min-h-[120px] resize-none" {...props} />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const float: Variants = {
  hidden: { y: 0 },
  visible: {
    y: [0, -10, 0] as const,
    transition: { y: { duration: 3, ease: 'easeInOut' as const, repeat: Infinity } },
  },
};

// Navbar
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About Dr Hina' },
    { href: '#expertise', label: 'Expertise' },
    { href: '#why-choose', label: 'Why Choose Us' },
    { href: '#patient-journey', label: 'Patient Journey' },
    { href: '#services', label: 'Services' },
    { href: '#conditions', label: 'Conditions' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.header
      className={'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ' +
        (isScrolled ? 'bg-white/90 backdrop-blur-xl border-b border-neural-100 shadow-soft' : 'bg-transparent')}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <nav className="section-container" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <span className="font-display font-bold text-xl text-neural-900 hidden sm:block">
              Dr. Hina Neuro
            </span>
          </motion.div>

          <div className="hidden lg:flex items-center gap-8">
            <motion.ul
              className="flex items-center gap-6"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {navLinks.map((link) => (
                <motion.li key={link.href} variants={fadeInUp}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-neural-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <Button variant="ghost" className="hidden lg:inline-flex">Book Appointment</Button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl hover:bg-neural-50"
              aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6 text-neural-600" /> : <Menu className="h-6 w-6 text-neural-600 hover:text-primary-600" />}
            </button>
          </div>
        </div>
      </nav>

      <motion.div
        id="mobile-menu"
        initial={{ opacity: 0, height: 0 }}
        animate={isMobileMenuOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="lg:hidden overflow-hidden"
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-neural-100 p-6 space-y-4">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href