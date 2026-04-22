import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Lightbulb, 
  ShieldCheck, 
  Clock, 
  Home, 
  Smartphone,
  Camera, 
  Wifi, 
  Car, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin,
  Menu,
  X,
  ArrowRight,
  HardHat,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import imgHero from './assets/outdoor-lighting.jpeg';
import imgWhyUs from './assets/smoke-detector.webp';
import imgAbout from './assets/living-room-lights.jpeg';
import imgNapit from './assets/napit.jpeg';
import imgNapitPartP from './assets/napit-part-p.jpeg';
import imgLogo from './assets/notts-city-electrical.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={imgLogo} alt="Notts City Electrical" className="h-9 w-auto rounded-lg object-contain" />
            <span className={`text-sm sm:text-xl font-display font-bold tracking-tight ${scrolled ? 'text-brand-dark' : 'text-white'}`}>
              NOTTS CITY <span className="text-brand-yellow">ELECTRICAL</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-yellow ${scrolled ? 'text-slate-600' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-brand-dark' : 'text-white'}`}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-brand-blue text-white px-5 py-4 rounded-lg font-bold"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ServiceCard = ({ icon: Icon, title, description }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
  >
    <div className="w-12 h-12 bg-brand-blue/5 rounded-xl flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-brand-blue" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-brand-dark">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-sm">
      {description}
    </p>
  </motion.div>
);

export default function App() {
  const services = [
    {
      icon: Lightbulb,
      title: "Lighting Systems",
      description: "Expert design and installation of interior, exterior, security, and emergency lighting for your home — from single rooms to full property rewires."
    },
    {
      icon: Zap,
      title: "Power & Sockets",
      description: "Adding or replacing sockets including USB-integrated and weatherproof outdoor options, plus light switch upgrades."
    },
    {
      icon: ShieldCheck,
      title: "Safety Alarms",
      description: "Installation and maintenance of smoke, heat, and carbon monoxide detectors to keep your family safe."
    },
    {
      icon: Smartphone,
      title: "Smart Home",
      description: "Modern automation for lighting, heating controls, and smart thermostats to optimise your energy usage."
    },
    {
      icon: Camera,
      title: "CCTV Systems",
      description: "Professional installation and maintenance of high-definition CCTV camera systems for ultimate peace of mind."
    },
    {
      icon: Car,
      title: "EV Charging",
      description: "Specialised installation of electric vehicle charging points for your home, driveway, or garage."
    },
    {
      icon: Wifi,
      title: "Data & Comms",
      description: "Structured cabling, data points, and specialised equipment installation for modern connectivity needs."
    },
    {
      icon: HardHat,
      title: "Fault Finding",
      description: "Rapid diagnostic services to identify and repair flickering lights, tripped circuits, or electrical smells."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgHero}
            alt="Notts City Electrical"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-dark/70 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl text-white mb-6 leading-[1.1]">
              Trusted Electrical <span className="text-brand-yellow">Experts</span> in Nottinghamshire
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
              Family-oriented service with a modern approach. We work weekends at standard rates so you don't have to sacrifice your work day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="bg-brand-yellow text-brand-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-xl flex items-center justify-center"
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center"
              >
                Contact Us
              </a>
            </div>
            <div className="mt-8 inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-2xl">
              <img src={imgNapit} alt="NAPIT" className="h-8 w-auto object-contain rounded" />
              <div>
                <p className="text-white text-sm font-bold">NAPIT Approved Member</p>
                <p className="text-white/60 text-xs">All work Part P certified & fully compliant</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-brand-blue/5 p-3 rounded-xl">
                <Users className="w-6 h-6 text-brand-blue" />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-dark">Family Owned</p>
                <p className="text-xs text-slate-500">Local & Friendly</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-brand-blue/5 p-3 rounded-xl">
                <Clock className="w-6 h-6 text-brand-blue" />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-dark">Weekend Service</p>
                <p className="text-xs text-slate-500">At Standard Rates</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src={imgNapit} alt="NAPIT" className="h-12 w-auto object-contain rounded-xl" />
              <div>
                <p className="text-sm font-bold text-brand-dark">NAPIT Approved</p>
                <p className="text-xs text-slate-500">Part P Certified</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-brand-blue/5 p-3 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-brand-blue" />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-dark">Free Quotes</p>
                <p className="text-xs text-slate-500">No Obligation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-brand-blue text-sm font-bold uppercase tracking-widest mb-4">What We Do</h2>
            <h3 className="text-3xl md:text-5xl text-brand-dark mb-6">Comprehensive Electrical Solutions</h3>
            <p className="text-slate-600 text-lg">
              From small repairs and extra sockets to full rewires and smart home upgrades, we cover all your household electrical needs — no job too small.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start"
            >
              <img src={imgNapitPartP} alt="NAPIT Part P Certified" className="h-16 w-auto object-contain mb-6" />
              <h3 className="text-xl font-bold mb-3 text-brand-dark">NAPIT Part P Certified</h3>
              <p className="text-slate-600 leading-relaxed text-sm">All our electrical work is carried out by a NAPIT approved member, fully certified under Part P of the Building Regulations and BS 7671.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Value Your Time */}
      <section className="py-16 md:py-24 bg-brand-blue relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2 className="text-brand-yellow text-sm font-bold uppercase tracking-widest mb-4">Why Choose Us</h2>
              <h3 className="text-3xl md:text-5xl text-white mb-6 md:mb-8 leading-tight">We Value Your Time as Much as You Do</h3>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                We know your time is your greatest asset. That’s why we’re working out-of-hours and throughout the weekend—so you don't have to sacrifice a single work day for your project.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-brand-yellow/20 p-2 rounded-lg h-fit">
                    <CheckCircle2 className="w-5 h-5 text-brand-yellow" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Standard Day Rates</h4>
                    <p className="text-white/60 text-sm">We believe "premium timing" shouldn’t mean a premium bill. Get weekend work at weekday prices.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-brand-yellow/20 p-2 rounded-lg h-fit">
                    <CheckCircle2 className="w-5 h-5 text-brand-yellow" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Zero Disruption</h4>
                    <p className="text-white/60 text-sm">Complete your home projects faster without the hassle of taking time off work.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-brand-yellow/20 p-2 rounded-lg h-fit">
                    <CheckCircle2 className="w-5 h-5 text-brand-yellow" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Clear Communication</h4>
                    <p className="text-white/60 text-sm">We prioritise transparency and keep you informed at every stage of the job.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-brand-yellow/20 p-2 rounded-lg h-fit">
                    <ShieldCheck className="w-5 h-5 text-brand-yellow" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">NAPIT Approved</h4>
                    <p className="text-white/60 text-sm">Fully accredited and insured, ensuring your safety and compliance with all regulations.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={imgWhyUs}
                  alt="Outdoor lighting installation"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-yellow p-8 rounded-2xl shadow-xl hidden lg:block">
                <p className="text-brand-blue text-4xl font-bold mb-1">100%</p>
                <p className="text-brand-blue/70 font-bold uppercase tracking-wider text-xs">Satisfaction Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <img
                src={imgAbout}
                alt="Living room lighting"
                className="rounded-2xl md:rounded-[2rem] shadow-2xl w-full aspect-[4/3] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-brand-blue text-sm font-bold uppercase tracking-widest mb-4">Who We Are</h2>
              <h3 className="text-3xl md:text-5xl text-brand-dark mb-6 md:mb-8">A Modern Approach to Electrical Trade</h3>
              <div className="space-y-6 text-slate-600 text-base sm:text-lg leading-relaxed">
                <p>
                  Launched in late 2025, Notts City Electrical Ltd is a family-oriented private limited company bringing a friendly and modern approach to the Nottinghamshire electrical trade.
                </p>
                <p>
                  As a new company, we are dedicated to building a reputation based on trust, reliability, and approachable service. We understand that inviting a tradesperson into your home requires confidence.
                </p>
                <p>
                  That's why we prioritise clear communication, punctuality, and a clean workspace. We're not just fixing wires; we're building lasting relationships with our community.
                </p>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  <img src={imgNapitPartP} alt="NAPIT Part P certified" className="h-16 sm:h-24 w-auto object-contain rounded-xl" />
                  <div>
                    <h4 className="font-bold text-brand-dark">NAPIT Part P Certified</h4>
                    <p className="text-sm text-slate-600">
                      As a NAPIT approved member, our competence is regularly assessed to ensure we meet the highest industry standards. This means all our work is fully insured, guaranteed, and strictly compliant with BS 7671 (UK Wiring Regulations) and Part P of the Building Regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl sm:rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
            <div className="grid lg:grid-cols-2">
              <div className="bg-brand-dark p-6 sm:p-10 lg:p-12 text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Get in Touch</h3>
                  <p className="text-white/60 mb-8 sm:mb-12 text-base sm:text-lg">
                    We're here to help with all your electrical needs. Reach out to us directly via phone or email for a friendly consultation.
                  </p>

                  <div className="space-y-7 sm:space-y-10">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="bg-white/10 p-3 sm:p-4 rounded-2xl shrink-0">
                        <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-brand-yellow" />
                      </div>
                      <div>
                        <p className="text-xs text-white/40 uppercase font-bold tracking-wider mb-1 sm:mb-2">Call Us Directly</p>
                        <p className="text-xl sm:text-2xl font-bold">07767 017594</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="bg-white/10 p-3 sm:p-4 rounded-2xl shrink-0">
                        <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-brand-yellow" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-white/40 uppercase font-bold tracking-wider mb-1 sm:mb-2">Email Us</p>
                        <p className="text-base sm:text-xl font-bold break-all">nottscityelectrical@gmail.com</p>
                        <p className="text-white/40 text-sm mt-1">We typically respond within 2-4 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="bg-white/10 p-3 sm:p-4 rounded-2xl shrink-0">
                        <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-brand-yellow" />
                      </div>
                      <div>
                        <p className="text-xs text-white/40 uppercase font-bold tracking-wider mb-1 sm:mb-2">Service Area</p>
                        <p className="text-lg sm:text-2xl font-bold">Nottinghamshire & Surrounding Areas</p>
                        <p className="text-white/40 text-sm mt-1">Professional service delivered to your doorstep</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 sm:mt-16 pt-8 sm:pt-12 border-t border-white/10">
                  <p className="text-base sm:text-lg text-white/60 italic font-display">
                    "We believe premium timing shouldn't mean a premium bill."
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center bg-slate-50/50">
                <div className="max-w-md mx-auto text-center">
                  <div className="w-20 h-20 bg-brand-blue/5 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Clock className="w-10 h-10 text-brand-blue" />
                  </div>
                  <h4 className="text-2xl font-bold text-brand-dark mb-4">Weekend Work at Standard Rates</h4>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    We understand that your time is valuable. That's why we offer our full range of services throughout the weekend at our standard weekday rates.
                  </p>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <p className="text-brand-blue font-bold text-sm uppercase tracking-widest mb-2">Our Promise</p>
                    <p className="text-slate-700 font-medium">Clear communication, punctuality, and a clean workspace on every single job.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            <div className="col-span-1 sm:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-brand-yellow p-1.5 rounded-lg">
                  <Zap className="w-6 h-6 text-brand-blue fill-brand-blue" />
                </div>
                <span className="text-2xl font-display font-bold tracking-tight">
                  NOTTS CITY <span className="text-brand-yellow">ELECTRICAL</span>
                </span>
              </div>
              <p className="text-white/50 max-w-sm mb-8">
                Bringing a friendly and modern approach to the Nottinghamshire electrical trade. Trust, reliability, and approachable service.
              </p>
              <div className="inline-flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                <ShieldCheck className="w-5 h-5 text-brand-yellow" />
                <span className="text-xs font-bold uppercase tracking-wider text-white/80">NAPIT Approved Member</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-4 text-white/60">
                <li><a href="#" className="hover:text-brand-yellow transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-brand-yellow transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-brand-yellow transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-brand-yellow transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Services</h4>
              <ul className="space-y-4 text-white/60">
                <li>Lighting Systems</li>
                <li>Power & Sockets</li>
                <li>Smart Home</li>
                <li>CCTV & Security</li>
                <li>EV Charging</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Notts City Electrical LTD. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
