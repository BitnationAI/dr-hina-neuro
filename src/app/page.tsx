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
              aria-label="Open mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6 text-neural-600" /> : <Menu className="h-6 w-6 text-neural-600 hover:text-primary-600" />}
            </button>
          </div>
        </div>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={'lg:hidden ' + (isMobileMenuOpen ? 'block' : 'hidden')}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-neural-100 p-6 space-y-4">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="block text-base font-medium text-neural-700 hover:text-primary-600 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </motion.a>
          ))}
          <Button variant="primary" className="w-full mt-4">Book Appointment</Button>
        </div>
      </motion.div>
    </motion.header>
  );
};

// Hero Section
const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="section-container relative">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="lg:pr-8"
        >          <motion.div variants={fadeInUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-sm font-medium">
              New Patients Welcome - Same Week Appointments Available
            </span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="heading-1 mb-6 text-neural-900">
            Expert Neurological Care
            <br />
            <span className="text-primary-600">With Compassion</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="body-large text-neural-600 mb-8 max-w-xl">
            Dr. Hina Ahmed brings 15+ years of specialized neurology experience to provide personalized, 
            evidence-based care for complex neurological conditions. Your brain health deserves expertise you can trust.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 mb-10">
            <Button size="lg" className="group">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Button>
            <Button variant="outline" size="lg">Learn About Dr. Hina</Button>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex items-center gap-8 text-sm text-neural-500">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 text-primary-600 flex-shrink-0">✓</span>
              <span>Board Certified Neurologist</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 text-primary-600 flex-shrink-0">✓</span>
              <span>15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 text-primary-600 flex-shrink-0">✓</span>
              <span>5,000+ Patients Treated</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <div className="relative">
            <motion.div
              variants={float}
              className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-neural-50 to-white border border-neural-100"
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-primary-100/50 via-white to-accent-100/50 flex items-center justify-center">
                <Brain className="w-48 h-48 text-primary-200/50" aria-hidden="true" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-600/10 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-6 border border-neural-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-neural-500">Next Available</p>
                  <p className="font-semibold text-neural-900">This Week</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-lg p-6 border border-neural-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-accent-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-neural-500">Patient Satisfaction</p>
                  <p className="font-semibold text-neural-900">4.9/5 Stars</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="w-6 h-10 border-2 border-neural-300 rounded-full flex justify-center pt-2"
      >
        <div className="w-1.5 h-1.5 bg-neural-400 rounded-full" />
      </motion.div>
    </motion.div>
  </section>
);

// About Section
const About = () => (
  <section id="about" className="section-padding bg-white">
    <div className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-sm font-medium mb-4">
            About Dr. Hina
          </span>
          <h2 className="heading-2 mb-4 text-neural-900">
            Dedicated to Advancing
            <br />
            <span className="text-primary-600">Neurological Wellness</span>
          </h2>
          <p className="body-large text-neural-600">
            Dr. Hina Ahmed combines world-class medical training with a genuine passion for patient advocacy, 
            delivering neurological care that's both scientifically rigorous and deeply compassionate.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div variants={fadeInUp}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="heading-4 mb-2 text-neural-900">Medical Education</h3>
                  <p className="body text-neural-600">MD, Neurology Residency - Johns Hopkins Hospital</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <h3 className="heading-4 mb-2
text-neural-900">Board Certification</h3>
                  <p className="body text-neural-600">American Board of Psychiatry & Neurology</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="heading-4 mb-2 text-neural-900">Fellowship Training</h3>
                  <p className="body text-neural-600">Clinical Neurophysiology & Epilepsy - Mayo Clinic</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="heading-4 mb-2 text-neural-900">Professional Memberships</h3>
                  <p className="body text-neural-600">AAN, AES, CNS, ANA - Active Member & Committee Contributor</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="bg-neural-50 rounded-3xl p-8 lg:p-12">
              <h3 className="heading-3 mb-6 text-neural-900">Philosophy of Care</h3>
              <div className="space-y-6 text-neural-600">
                <p className="body">
                  Neurological conditions affect not just the nervous system, but every aspect of a person's life - 
                  their work, relationships, independence, and sense of self. My approach centers on treating the 
                  whole person, not just the diagnosis.
                </p>
                <p className="body">
                  I believe in the power of listening. Every patient's story holds clues that no test can reveal. 
                  By combining thorough clinical evaluation with advanced diagnostics and the latest evidence-based 
                  treatments, I create personalized care plans that address both immediate symptoms and long-term 
                  neurological health.
                </p>
                <p className="body font-medium text-primary-600">
                  "Expertise without empathy is incomplete. Compassion without competence is insufficient. 
                  My mission is to provide both."
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-neural-200">
                <h4 className="heading-4 mb-4 text-neural-900">Education & Training Timeline</h4>
                <div className="space-y-6">
                  <motion.div 
                    variants={fadeInUp} 
                    className="flex items-start gap-4 relative"
                    style={{ '--index': 0 } as React.CSSProperties}
                  >
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-4 h-4 rounded-full bg-primary-600 border-4 border-white shadow-sm z-10" />
                      <div className="w-0.5 h-16 bg-neural-200 hidden lg:block" />
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-neural-100 shadow-sm flex-1">
                      <p className="text-sm font-medium text-primary-600 mb-1">2020 - Present</p>
                      <p className="font-semibold text-neural-900">Attending Neurologist, Dr. Hina Neuro</p>
                      <p className="text-sm text-neural-500 mt-1">Private practice focusing on complex neurological disorders</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    variants={fadeInUp} 
                    className="flex items-start gap-4 relative"
                    style={{ '--index': 1 } as React.CSSProperties}
                  >
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-4 h-4 rounded-full bg-primary-600 border-4 border-white shadow-sm z-10" />
                      <div className="w-0.5 h-16 bg-neural-200 hidden lg:block" />
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-neural-100 shadow-sm flex-1">
                      <p className="text-sm font-medium text-primary-600 mb-1">2015 - 2020</p>
                      <p className="font-semibold text-neural-900">Staff Neurologist, Regional Medical Center</p>
                      <p className="text-sm text-neural-500 mt-1">Led epilepsy monitoring unit & neurology consultation service</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    variants={fadeInUp} 
                    className="flex items-start gap-4 relative"
                    style={{ '--index': 2 } as React.CSSProperties}
                  >
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-4 h-4 rounded-full bg-primary-600 border-4 border-white shadow-sm z-10" />
                      <div className="w-0.5 h-16 bg-neural-200 hidden lg:block" />
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-neural-100 shadow-sm flex-1">
                      <p className="text-sm font-medium text-primary-600 mb-1">2013 - 2015</p>
                      <p className="font-semibold text-neural-900">Clinical Neurophysiology Fellowship, Mayo Clinic</p>
                      <p className="text-sm text-neural-500 mt-1">Advanced EEG, EMG, evoked potentials, intraoperative monitoring</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    variants={fadeInUp} 
                    className="flex items-start gap-4 relative"
                    style={{ '--index': 3 } as React.CSSProperties}
                  >
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-4 h-4 rounded-full bg-primary-600 border-4 border-white shadow-sm z-10" />
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-neural-100 shadow-sm flex-1">
                      <p className="text-sm font-medium text-primary-600 mb-1">2009 - 2013</p>
                      <p className="font-semibold text-neural-900">Neurology Residency, Johns Hopkins Hospital</p>
                      <p className="text-sm text-neural-500 mt-1">Chief Resident, final year. Research: Neuroinflammation in MS</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

// Expertise Section
const Expertise = () => (
  <section id="expertise" className="section-padding bg-neural-50">
    <div className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-sm font-medium mb-4">
            Areas of Expertise
          </span>
          <h2 className="heading-2 mb-4 text-neural-900">
            Specialized Neurological Care
            <br />
            <span className="text-primary-600">Across the Spectrum</span>
          </h2>
          <p className="body-large text-neural-600">
            From common headaches to complex movement disorders, Dr. Hina provides comprehensive
            diagnosis and
            treatment for the full range of neurological conditions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Brain, title: 'Epilepsy & Seizure Disorders', description: 'Advanced diagnostic evaluation, medication management, vagus nerve stimulation, and surgical referral for refractory epilepsy.', conditions: ['Focal Seizures', 'Generalized Epilepsy', 'Status Epilepticus', 'Epilepsy in Pregnancy'] },
            { icon: Zap, title: 'Headache & Migraine', description: 'Comprehensive headache management including Botox for chronic migraine, CGRP inhibitors, and personalized prevention strategies.', conditions: ['Chronic Migraine', 'Cluster Headache', 'Tension Headache', 'Medication Overuse'] },
            { icon: Activity, title: 'Movement Disorders', description: "Expert care for Parkinson's disease, essential tremor, dystonia, and other movement disorders including deep brain stimulation programming.", conditions: ["Parkinson's Disease", 'Essential Tremor', 'Dystonia', 'Ataxia'] },
            { icon: Shield, title: 'Multiple Sclerosis & Neuroimmunology', description: 'Disease-modifying therapy selection, relapse management, and comprehensive MS care following latest treatment algorithms.', conditions: ['Relapsing MS', 'Progressive MS', 'NMOSD', 'MOGAD'] },
            { icon: Microscope, title: 'Neuromuscular Disorders', description: 'Diagnosis and management of peripheral neuropathies, myopathies, and neuromuscular junction disorders.', conditions: ['Peripheral Neuropathy', 'Myasthenia Gravis', 'ALS', "Guillain-Barre"] },
            { icon: Monitor, title: 'Clinical Neurophysiology', description: 'Advanced electrodiagnostic testing including EEG, EMG/NCS, evoked potentials, and intraoperative monitoring.', conditions: ['Video EEG', 'EMG/NCS', 'VEP/BAER/SEP', 'IOM'] },
          ].map((exp, index) => (
            <motion.article key={exp.title} variants={fadeInUp} className="card-hover bg-white rounded-2xl p-8 border border-neural-100">
              <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center mb-6">
                <exp.icon className="w-7 h-7 text-primary-600" aria-hidden="true" />
              </div>
              <h3 className="heading-4 mb-3 text-neural-900">{exp.title}</h3>
              <p className="body text-neural-600 mb-6">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.conditions.map((condition, i) => (
                  <span key={condition} className="px-3 py-1 bg-neural-100 text-neural-700 text-sm rounded-full">{condition}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

// Why Choose Us Section
const WhyChoose = () => (
  <section id="why-choose" className="section-padding bg-white">
    <div className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="heading-2 mb-4 text-neural-900">
            Your Neurological Health
            <br />
            <span className="text-primary-600">Deserves the Best</span>
          </h2>
          <p className="body-large text-neural-600">
            We combine world-class expertise with personalized attention to deliver outcomes that matter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Heart, title: 'Patient-Centered Care', description: 'Every treatment plan is tailored to your unique needs, lifestyle, and goals. You\'re not a case number - you\'re a person.' },
            { icon: Award, title: 'Academic Excellence', description: 'Trained at Johns Hopkins and Mayo Clinic. Board-certified with active research contributions and leadership in national neurology organizations.' },
            { icon: Sparkles, title: 'Cutting-Edge Technology', description: 'State-of-the-art diagnostics including 3T MRI, video-EEG monitoring, and advanced neurophysiology testing on-site.' },
            { icon: Users, title: 'Collaborative Approach', description: 'We coordinate seamlessly with your primary care, physical therapy, neurosurgery, and other specialists for comprehensive care.' },
            { icon: Shield, title: 'Safety First', description: 'Evidence-based protocols, regular outcome tracking, and transparent communication about risks and benefits of every treatment option.' },
            { icon: Clock, title: 'Accessible & Responsive', description: 'Same-week appointments for new patients. Direct portal messaging. After-hours coverage for urgent neurological concerns.' },
          ].map((reason, index) => (
            <motion.article key={reason.title} variants={fadeInUp} className="card-hover bg-neural-50 rounded-2xl p-8 border border-neural-100">
              <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center mb-6">
                <reason.icon className="w-7 h-7 text-primary-600" aria-hidden="true" />
              </div>
              <h3 className="heading-4 mb-3 text-neural-900">{reason.title}</h3>
              <p className="body text-neural-600">{reason.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

// Patient Journey Section
const PatientJourney = () => (
  <section id="patient-journey" className="section-padding bg-neural-50">
    <div className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-sm font-medium mb-4">
            Your Path to Wellness
          </span>
          <h2 className="heading-2 mb-4 text-neural-900">
            A Streamlined Process
            <br />
            <span className="text-primary-600">Designed Around You</span>
          </h2>
          <p className="body-large text-neural-600">
            We've designed a patient journey that makes neurological care as smooth and effective as possible.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-neural-200 -translate-x-1/2" />
          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {[
              { step: '01', title: 'Comprehensive Evaluation', description: '90-minute initial consultation including detailed history, neurological examination, and review of prior records.', icon: Stethoscope },
              { step: '02', title: 'Advanced Diagnostics', description: 'On-site MRI, EEG, EMG/NCS, and evoked potentials. Results often available same day.', icon: Microscope },
              { step: '03', title: 'Personalized Treatment', description: 'Evidence-based treatment plan with clear goals, timeline, and follow-up schedule. Medication, therapy, or surgical referral as needed.', icon: Pill },
              { step: '04', title: 'Ongoing Partnership', description: 'Regular follow-ups, remote monitoring, direct messaging access. We adjust treatment as your needs evolve.', icon: Heart },
            ].map((journey, index) => (
              <motion.div key={journey.step} variants={fadeInUp} className="relative z-10 pl-8 lg:pl-12">
                <div className="flex items-center gap-3 mb
4">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-sm font-bold text-primary-600">{journey.step}</div>
                  <journey.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="heading-4 mb-2 text-neural-900">{journey.title}</h3>
                <p className="body text-neural-600">{journey.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

// Services Section
const Services = () => (
  <section id="services" className="section-padding bg-white">
    <div className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="heading-2 mb-4 text-neural-900">
            Comprehensive Neurological
            <br />
            <span className="text-primary-600">Services</span>
          </h2>
          <p className="body-large text-neural-600">
            Full spectrum of diagnostic and therapeutic services for neurological conditions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Brain, title: 'EEG & Video-EEG Monitoring', description: 'Routine, sleep-deprived, ambulatory, and long-term video-EEG for seizure characterization.' },
            { icon: Activity, title: 'EMG/Nerve Conduction Studies', description: 'Comprehensive electrodiagnostic testing for neuropathy, radiculopathy, and neuromuscular disorders.' },
            { icon: Microscope, title: 'Evoked Potentials (VEP/BAER/SEP)', description: 'Visual, brainstem auditory, and somatosensory evoked potentials for demyelinating and compressive lesions.' },
            { icon: Shield, title: 'Botox for Chronic Migraine', description: 'FDA-approved onabotulinumtoxinA injections for chronic migraine prophylaxis per PREEMPT protocol.' },
            { icon: Pill, title: 'CGRP Inhibitor Therapy', description: 'Latest monoclonal antibody and gepant treatments for migraine prevention and acute treatment.' },
            { icon: Zap, title: 'Deep Brain Stimulation Management', description: 'DBS programming and optimization for Parkinson\'s disease, essential tremor, and dystonia.' },
            { icon: Users, title: 'Infusion Therapy', description: 'In-office IVIG, natalizumab, ocrelizumab, and other disease-modifying therapy infusions.' },
            { icon: Monitor, title: 'Telemedicine Visits', description: 'Secure video consultations for follow-ups, medication management, and acute concerns.' },
          ].map((service, index) => (
            <motion.article key={service.title} variants={fadeInUp} className="card-hover bg-neural-50 rounded-2xl p-6 border border-neural-100">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary-600" aria-hidden="true" />
              </div>
              <h3 className="heading-4 mb-2 text-neural-900">{service.title}</h3>
              <p className="body text-neural-600">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

// Conditions Section
const Conditions = () => (
  <section id="conditions" className="section-padding bg-neural-50">
    <div className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-sm font-medium mb-4">
            Conditions We Treat
          </span>
          <h2 className="heading-2 mb-4 text-neural-900">
            Expertise Across the
            <br />
            <span className="text-primary-600">Neurological Spectrum</span>
          </h2>
          <p className="body-large text-neural-600">
            From the most common to the most complex neurological disorders.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'Epilepsy & Seizures', 'Migraine & Chronic Headache', "Parkinson's Disease", 'Essential Tremor', 'Dystonia', 'Multiple Sclerosis',
            'Peripheral Neuropathy', 'Myasthenia Gravis', 'ALS', 'Guillain-Barre Syndrome', 'CIDP', 'Ataxia',
            'Normal Pressure Hydrocephalus', 'Memory Disorders', 'Concussion & TBI', 'Sleep Disorders',
          ].map((condition) => (
            <motion.div key={condition} variants={fadeInUp} className="card-hover bg-white rounded-xl p-4 border border-neural-100 text-center">
              <span className="text-neural-700 font-medium">{condition}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

// FAQ Section
const FAQ = () => (
  <section id="faq" className="section-padding bg-white">
    <div className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-sm font-medium mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="heading-2 mb-4 text-neural-900">
            Your Questions,
            <br />
            <span className="text-primary-600">Answered</span>
          </h2>
          <p className="body-large text-neural-600">
            Common questions about our practice and neurological care.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {[
            { q: 'Do I need a referral to see Dr. Hina?', a: 'We accept both self-referrals and physician referrals. Some insurance plans may require a referral, so we recommend checking with your insurance provider. Our team can help verify your benefits before your appointment.' },
            { q: 'What should I bring to my first appointment?', a: 'Please bring your insurance card, photo ID, list of current medications, any prior imaging (MRI/CT) on CD, previous EEG/EMG reports, and a list of questions you\'d like to discuss. A detailed symptom timeline is also very helpful.' },
            { q: 'How long is the initial consultation?', a: 'New patient consultations are 90 minutes to allow for a comprehensive history, neurological examination, and development of a personalized care plan. Follow-up visits are typically 30 minutes.' },
            { q: 'Does Dr. Hina perform procedures like Botox or nerve blocks?', a: 'Yes, Dr. Hina performs Botox injections for chronic migraine per the PREEMPT protocol, as well as trigger point injections and nerve blocks for headache and facial pain disorders.' },
            { q: 'What insurance plans do you accept?', a: 'We accept most major insurance plans including Medicare, Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, and others. Our team verifies your benefits and provides a cost estimate before your visit.' },
            { q:
'Do you offer telemedicine appointments?', a: 'Yes, we offer secure video visits for follow-up appointments, medication management, and acute concerns. In-person visits are recommended for new patients and those requiring neurological examinations.' },
          ].map((faq, index) => (
            <motion.div key={index} variants={fadeInUp} className="mb-6">
              <button className="w-full text-left p-6 bg-neural-50 rounded-xl border border-neural-100 hover:border-primary-200 transition-colors flex items-center justify-between">
                <span className="font-medium text-neural-900 pr-4">{faq.q}</span>
                <ChevronDown className="w-5 h-5 text-neural-400" />
              </button>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-2 p-4 bg-white rounded-xl border border-neural-100"
              >
                <p className="text-neural-600">{faq.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

// Contact Section
const Contact = () => (
  <section id="contact" className="section-padding bg-neural-50">
    <div className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="heading-2 mb-4 text-neural-900">
            Ready to Start Your
            <br />
            <span className="text-primary-600">Journey to Wellness</span>
          </h2>
          <p className="body-large text-neural-600">
            Schedule your consultation today and take the first step toward better neurological health.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div variants={fadeInUp}>
            <h3 className="heading-3 mb-6 text-neural-900">Send Us a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="First Name"
                  name="firstName"
                  placeholder="Jane"
                  required
                />
                <Input
                  label="Last Name"
                  name="lastName"
                  placeholder="Doe"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="jane.doe@email.com"
                  required
                />
                <Input
                  label="Phone"
                  type="tel"
                  name="phone"
                  placeholder="(555) 123-4567"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Preferred Date"
                  type="date"
                  name="preferredDate"
                />
                <Input
                  label="Insurance Provider"
                  name="insurance"
                  placeholder="Blue Cross Blue Shield"
                />
              </div>
              <Textarea
                label="Message / Reason for Visit"
                name="message"
                placeholder="Describe your symptoms, concerns, or reason for seeking care..."
                rows={5}
                required
              />
              <Button size="lg" className="w-full md:w-auto">
                Request Appointment
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </Button>
            </form>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-8">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft border border-neural-100">
              <h3 className="heading-3 mb-6 text-neural-900">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-neural-500">Location</p>
                    <p className="font-medium text-neural-900">123 Neurology Way, Suite 400</p>
                    <p className="font-medium text-neural-900">San Francisco, CA 94102</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-neural-500">Phone</p>
                    <p className="font-medium text-neural-900">(415) 555-0123</p>
                    <p className="text-sm text-neural-500">Mon-Fri: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-neural-500">Email</p>
                    <p className="font-medium text-neural-900">care@drhinaneuro.com</p>
                    <p className="text-sm text-neural-500">Secure portal messaging available</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-neural-500">Office Hours</p>
                    <p className="font-medium text-neural-900">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-sm text-neural-500">After-hours: Urgent concerns via portal</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-neural-200">
              <h4 className="heading-4 mb-4 text-neural-900">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center hover:bg-primary-200 transition-colors" aria-label="LinkedIn">
                  <MessageSquare className="w-5 h-5 text-primary-600" />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center hover:bg-primary-200 transition-colors" aria-label="Twitter">
                  <MessageSquare className="w-5 h-5 text-primary-600" />
                </
a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

// Footer Component
const Footer = () => (
  <footer className="bg-neural-900 text-neural-100 pt-16 pb-8">
    <div className="section-container">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <span className="font-display font-bold text-xl text-white">Dr. Hina Neuro</span>
          </div>
          <p className="text-neural-400 mb-6 max-w-xs">
            Expert neurological care with compassion. Board-certified neurologist with 15+ years of experience
            treating complex neurological conditions.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-xl bg-neural-800 flex items-center justify-center hover:bg-neural-700 transition-colors" aria-label="LinkedIn">
              <MessageSquare className="w-5 h-5 text-neural-300" />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-neural-800 flex items-center justify-center hover:bg-neural-700 transition-colors" aria-label="Twitter">
              <MessageSquare className="w-5 h-5 text-neural-300" />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-neural-800 flex items-center justify-center hover:bg-neural-700 transition-colors" aria-label="Email">
              <Mail className="w-5 h-5 text-neural-300" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <nav className="space-y-3">
            {[
              { href: '#about', label: 'About Dr. Hina' },
              { href: '#expertise', label: 'Expertise' },
              { href: '#why-choose', label: 'Why Choose Us' },
              { href: '#patient-journey', label: 'Patient Journey' },
              { href: '#services', label: 'Services' },
              { href: '#conditions', label: 'Conditions' },
              { href: '#faq', label: 'FAQ' },
              { href: '#contact', label: 'Contact' },
            ].map((link) => (
              <a key={link.href} href={link.href} className="text-neural-400 hover:text-primary-400 transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Contact</h4>
          <address className="text-neural-400 not-italic space-y-3">
            <p>123 Neurology Way, Suite 400</p>
            <p>San Francisco, CA 94102</p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>(415) 555-0123</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span>care@drhinaneuro.com</span>
            </p>
            <p className="flex items-center gap-2">
              <Clock className="w-4 h-4" aria-hidden="true" />
              <span>Mon-Fri: 8:00 AM - 5:00 PM</span>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-neural-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-neural-500 text-sm">
          © 2024 Dr. Hina Neuro. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-neural-500">
          <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary-400 transition-colors">Accessibility</a>
        </div>
      </div>
    </div>
  </footer>
);

// Main Home Page Component
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <WhyChoose />
        <PatientJourney />
        <Services />
        <Conditions />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
