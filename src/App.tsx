/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Play, 
  Smartphone, 
  Video, 
  Tag, 
  Building2, 
  Clapperboard, 
  Tv, 
  Palette, 
  CheckCircle2, 
  Star, 
  Mail, 
  MapPin, 
  Timer,
  Menu,
  X,
  ArrowRight,
  MessageCircle,
  Globe,
  Hexagon,
  Shield,
  Zap,
  Cpu
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background-dark/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-3xl font-bold tracking-wider font-display">
          MOONLIGHT<span className="text-primary">.</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6 text-sm font-medium tracking-wide">
            <a href="#work" className="hover:text-primary transition-colors">WORK</a>
            <a href="#services" className="hover:text-primary transition-colors">SERVICES</a>
            <a href="#pricing" className="hover:text-primary transition-colors">PRICING</a>
            <a href="#contact" className="hover:text-primary transition-colors">CONTACT</a>
          </div>
          <div className="h-4 w-[1px] bg-white/20"></div>
          <div className="flex items-center gap-3 text-xs font-bold tracking-widest">
            <button className="text-primary">RU</button>
            <span className="text-white/20">|</span>
            <button className="text-white/40 hover:text-white transition-colors">EN</button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden md:inline-flex items-center justify-center px-6 py-2 bg-primary text-white font-semibold hover:bg-red-700 transition-colors duration-300 rounded-sm font-display text-xl">
            BOOK NOW
          </a>
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-surface-dark border-b border-white/10 p-6 md:hidden flex flex-col space-y-4"
          >
            <a href="#work" className="text-xl font-display" onClick={() => setIsMobileMenuOpen(false)}>WORK</a>
            <a href="#services" className="text-xl font-display" onClick={() => setIsMobileMenuOpen(false)}>SERVICES</a>
            <a href="#pricing" className="text-xl font-display" onClick={() => setIsMobileMenuOpen(false)}>PRICING</a>
            <a href="#contact" className="text-xl font-display" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</a>
            <a href="#contact" className="w-full py-3 bg-primary text-center font-display text-xl" onClick={() => setIsMobileMenuOpen(false)}>BOOK NOW</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-surface-dark">
      <img 
        src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1920" 
        alt="Dubai skyline luxury" 
        className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent"></div>
    </div>
    
    <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-primary tracking-[0.4em] font-bold text-sm md:text-base mb-6 uppercase"
      >
        Dubai's Production Powerhouse
      </motion.p>
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-6xl md:text-[110px] font-bold leading-[0.9] mb-8 tracking-tighter"
      >
        WE IGNITE YOUR IDEAS<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">WITH UAE PRECISION</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-lg md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
      >
        10+ Years Global, 4+ Years Dubai—Partnering with top venues and talent for seamless productions. We don't just film; we dominate.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-6"
      >
        <a href="#contact" className="group relative px-10 py-5 bg-primary text-white text-2xl font-display font-bold tracking-wider hover:bg-red-700 transition-all overflow-hidden w-full sm:w-auto text-center rounded-sm">
          DOMINATE THE MARKET
          <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
        </a>
        <a href="#work" className="group flex items-center gap-3 px-10 py-5 liquid-glass w-full sm:w-auto justify-center text-sm font-bold tracking-[0.2em] uppercase rounded-sm">
          <Play className="w-5 h-5 fill-current" />
          Watch Showreel
        </a>
      </motion.div>
    </div>
  </section>
);

const Stats = () => (
  <section className="py-12 bg-background-dark border-t border-white/10 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: 'Years Global Experience', value: '10+' },
          { label: 'Years Dubai Presence', value: '4+' },
          { label: 'Projects Delivered', value: '200+' },
          { label: 'Organic Views', value: '50M+' },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <span className="text-5xl md:text-6xl font-black font-display chrome-text leading-none mb-2">{stat.value}</span>
            <span className="text-[10px] md:text-xs text-text-muted font-black tracking-widest uppercase max-w-[120px]">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Logos = () => (
  <section className="py-8 bg-surface-dark border-y border-white/5">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
      <span className="text-[10px] font-black tracking-[0.3em] text-text-muted uppercase shrink-0">Trusted By Industry Leaders</span>
      <div className="flex flex-wrap justify-center md:justify-end items-center gap-8 md:gap-12 lg:gap-16">
        {[
          { icon: Globe, name: 'EXPO CITY' },
          { icon: Hexagon, name: 'DMCC' },
          { icon: Shield, name: 'NAKHEEL' },
          { icon: Zap, name: 'EMAAR' },
          { icon: Cpu, name: 'MERAAS' }
        ].map((logo, i) => (
          <div key={i} className="flex items-center gap-3 group/logo">
            <logo.icon className="w-6 h-6 md:w-8 md:h-8 text-white group-hover/logo:text-primary transition-colors" strokeWidth={1.5} />
            <span className="text-lg md:text-2xl font-bold font-display tracking-widest">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => (
  <section className="py-24 bg-background-dark" id="services">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-primary tracking-[0.3em] font-bold text-sm mb-4 uppercase">No Compromise Quality</p>
          <h2 className="text-6xl md:text-8xl font-bold leading-none">CORE SERVICES</h2>
        </div>
        <p className="text-text-muted max-w-sm text-sm uppercase tracking-widest leading-relaxed font-medium">
          We provide end-to-end production with the fastest turnaround in the UAE.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5 auto-rows-[260px]">
        {/* Reels Production */}
        <div className="md:col-span-3 lg:col-span-4 bg-surface-dark p-8 rounded-xl flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] border border-white/5 relative overflow-hidden chrome-border group">
          <div className="flex justify-between items-start">
            <Smartphone className="text-primary w-12 h-12 transition-transform group-hover:rotate-12" />
            <span className="text-[10px] font-black tracking-tighter border border-primary/30 px-2 py-0.5 text-primary uppercase">Social Dominance</span>
          </div>
          <div>
            <h3 className="text-4xl font-bold font-display">Reels Production</h3>
            <p className="text-text-muted text-sm mt-2 font-medium">Single or monthly packages for social dominance. We make you viral.</p>
          </div>
        </div>

        {/* Full Event Coverage */}
        <div className="md:col-span-3 lg:col-span-8 bg-surface-dark p-8 rounded-xl flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] border border-white/5 relative overflow-hidden chrome-border group">
          <div className="flex justify-between items-start">
            <Video className="text-primary w-12 h-12 transition-transform group-hover:scale-110" />
            <span className="px-3 py-1 bg-primary text-white text-xs font-bold tracking-widest uppercase">Elite Team</span>
          </div>
          <div>
            <h3 className="text-5xl font-bold font-display">Full Event Coverage</h3>
            <p className="text-text-muted text-sm mt-2 max-w-lg font-medium">Multi-camera teams for forums, galas, and corporate events. Every angle, perfectly captured.</p>
          </div>
        </div>

        {/* Brand Content */}
        <div className="md:col-span-3 lg:col-span-5 bg-surface-dark p-8 rounded-xl flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] border border-white/5 relative overflow-hidden chrome-border group">
          <Tag className="text-primary w-12 h-12 mb-4 group-hover:translate-x-2 transition-transform" />
          <div>
            <h3 className="text-4xl font-bold font-display">Brand Content</h3>
            <p className="text-text-muted text-sm mt-2 font-medium">High-end product shoots that convert viewers into customers. Results-driven visuals.</p>
          </div>
        </div>

        {/* Real Estate Media */}
        <div className="md:col-span-3 lg:col-span-7 bg-surface-dark p-8 rounded-xl flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] border border-white/5 relative overflow-hidden chrome-border group">
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-5">
            <Building2 className="w-48 h-48 text-white" />
          </div>
          <Building2 className="text-primary w-12 h-12 mb-4" />
          <div className="relative z-10">
            <h3 className="text-5xl font-bold font-display">Real Estate Media</h3>
            <p className="text-text-muted text-sm mt-2 max-w-md font-medium">Professional visuals for luxury properties in Dubai's competitive market. Selling the dream.</p>
          </div>
        </div>

        {/* Show Production */}
        <div className="md:col-span-6 lg:col-span-4 bg-surface-dark p-8 rounded-xl flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] border border-white/5 relative overflow-hidden chrome-border group">
          <Clapperboard className="text-primary w-12 h-12 mb-4 group-hover:-translate-y-1 transition-transform" />
          <div>
            <h3 className="text-4xl font-bold font-display">Show Production</h3>
            <p className="text-text-muted text-sm mt-2 font-medium">High-quality YouTube-style content and professional podcast filming. Your show, our expertise.</p>
          </div>
        </div>

        {/* Multicam Live Stream */}
        <div className="md:col-span-3 lg:col-span-4 bg-surface-dark p-8 rounded-xl flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] border border-white/5 relative overflow-hidden chrome-border group">
          <Tv className="text-primary w-12 h-12 mb-4" />
          <div>
            <h3 className="text-4xl font-bold font-display">Multicam Live Stream</h3>
            <p className="text-text-muted text-sm mt-2 font-medium">Real-time coverage for sports, forums, and global digital events. Zero latency, maximum impact.</p>
          </div>
        </div>

        {/* Music Clips & Art */}
        <div className="md:col-span-3 lg:col-span-4 bg-surface-dark p-8 rounded-xl flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] border border-white/5 relative overflow-hidden chrome-border group">
          <Palette className="text-primary w-12 h-12 mb-4" />
          <div>
            <h3 className="text-4xl font-bold font-display">Music Clips & Art</h3>
            <p className="text-text-muted text-sm mt-2 font-medium">Creative and experimental video projects for artists and visionaries. Push the boundaries.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Portfolio = () => (
  <section className="py-24 bg-background-dark" id="work">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <p className="text-primary tracking-[0.3em] font-bold text-sm mb-4 uppercase">Visual Dominance</p>
        <h2 className="text-6xl md:text-8xl font-bold leading-none">PORTFOLIO</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="relative overflow-hidden group rounded-lg h-[600px] md:row-span-2">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" 
            alt="Real Estate Video" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
            <span className="text-xs font-black tracking-[0.2em] mb-2">LUXURY REAL ESTATE</span>
            <h4 className="text-4xl font-bold font-display leading-none mb-4">PALM JUMEIRAH VILLA TOUR</h4>
            <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
              <Play className="w-6 h-6 fill-current" />
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden group rounded-lg h-[290px]">
          <img 
            src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=800" 
            alt="Event Production" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <span className="text-xs font-black tracking-[0.2em] mb-2">FORUMS</span>
            <h4 className="text-3xl font-bold font-display leading-none mb-4">GLOBAL TECH SUMMIT</h4>
            <Play className="w-5 h-5 fill-current" />
          </div>
        </div>

        <div className="relative overflow-hidden group rounded-lg h-[290px]">
          <img 
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800" 
            alt="Commercial" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <span className="text-xs font-black tracking-[0.2em] mb-2">COMMERCIAL</span>
            <h4 className="text-3xl font-bold font-display leading-none mb-4">SUPERCARS EMIRATES</h4>
            <Play className="w-5 h-5 fill-current" />
          </div>
        </div>

        <div className="relative overflow-hidden group rounded-lg h-[290px] lg:col-span-2">
          <img 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200" 
            alt="Music Video" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
            <span className="text-xs font-black tracking-[0.2em] mb-2">MUSIC & ART</span>
            <h4 className="text-4xl font-bold font-display leading-none mb-4">DUBAI NIGHTS VISUALS</h4>
            <Play className="w-6 h-6 fill-current" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section className="py-24 bg-surface-dark relative border-y border-white/5" id="pricing">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-6xl md:text-8xl font-bold mb-4 leading-none">INVESTMENT</h2>
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
          <CheckCircle2 className="text-primary w-5 h-5" />
          <span className="text-sm font-bold tracking-[0.2em] uppercase">No Bureaucracy. Just Results.</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Essential */}
        <div className="bg-background-dark p-8 rounded-lg border border-white/5 hover:border-primary/50 transition-colors relative flex flex-col group">
          <h3 className="text-3xl font-bold font-display mb-2">ESSENTIAL</h3>
          <p className="text-gray-400 text-sm mb-8 h-12">Perfect for single high-impact promotional videos and social content.</p>
          <div className="mb-10">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-widest block mb-2">Starting from</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-primary font-display">AED</span>
              <span className="text-6xl font-bold font-display group-hover:chrome-text transition-all">5,000</span>
            </div>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            {[
              'Half-day shoot (4 hrs)',
              '1x Master Edit (60s)',
              'Premium Color Grading'
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle2 className="text-primary w-5 h-5" />
                {item}
              </li>
            ))}
          </ul>
          <a href="#contact" className="block w-full py-4 text-center border border-white/20 hover:bg-white hover:text-black transition-all font-bold text-lg font-display tracking-[0.2em] uppercase rounded-sm">GET STARTED</a>
        </div>

        {/* Premium */}
        <div className="bg-background-dark p-8 rounded-lg relative flex flex-col transform md:-translate-y-6 shadow-2xl z-10 border border-white/10 group chrome-border">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-black px-6 py-1.5 uppercase tracking-widest rounded-sm">
            MOST REQUESTED
          </div>
          <h3 className="text-3xl font-bold font-display mb-2">PREMIUM</h3>
          <p className="text-gray-400 text-sm mb-8 h-12">Comprehensive production for corporate campaigns and commercial launches.</p>
          <div className="mb-10">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-widest block mb-2 text-primary">Starting from</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-primary font-display">AED</span>
              <span className="text-7xl font-bold font-display chrome-text">12,000</span>
            </div>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            {[
              'Full-day shoot (8 hrs)',
              '1x Main + 3x Social Cuts',
              '4K Drone Cinema Capture',
              'Pro Sound Design'
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle2 className="text-primary w-5 h-5" />
                {item}
              </li>
            ))}
          </ul>
          <a href="#contact" className="block w-full py-5 text-center bg-primary text-white hover:bg-red-700 transition-all font-bold text-2xl font-display tracking-[0.2em] uppercase rounded-sm shadow-[0_10px_30px_rgba(255,0,0,0.3)]">CHOOSE PREMIUM</a>
        </div>

        {/* Retainer */}
        <div className="bg-background-dark p-8 rounded-lg border border-white/5 hover:border-primary/50 transition-colors relative flex flex-col group">
          <h3 className="text-3xl font-bold font-display mb-2">RETAINER</h3>
          <p className="text-gray-400 text-sm mb-8 h-12">Monthly ongoing content creation. We become your dedicated media house.</p>
          <div className="mb-10">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-widest block mb-2">Starting from</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-primary font-display">AED</span>
              <span className="text-6xl font-bold font-display group-hover:chrome-text transition-all">25,000</span>
              <span className="text-gray-500 text-sm font-bold">/MO</span>
            </div>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            {[
              'Multiple Shoot Days/Month',
              'Daily Content Deliverables',
              'VIP Priority Editing'
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle2 className="text-primary w-5 h-5" />
                {item}
              </li>
            ))}
          </ul>
          <a href="#contact" className="block w-full py-4 text-center border border-white/20 hover:bg-white hover:text-black transition-all font-bold text-lg font-display tracking-[0.2em] uppercase rounded-sm">PARTNER WITH US</a>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-background-dark">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <p className="text-primary tracking-[0.3em] font-bold text-sm mb-4 uppercase">Testimonials</p>
          <h2 className="text-6xl md:text-8xl font-bold leading-none">CLIENT STORIES</h2>
        </div>
        <div className="bg-surface-dark border border-white/10 p-4 rounded-lg flex items-center gap-4">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
          </div>
          <div>
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
            </div>
            <p className="text-xs font-black tracking-widest uppercase mt-1">5.0 GOOGLE RATING</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            quote: "Moonlight transformed our brand identity. The quality of the property tour they produced resulted in a direct sale within 48 hours. Absolute elite service in Dubai.",
            name: "Alexey Romanov",
            role: "Founder, Prime Estates"
          },
          {
            quote: "The fastest turnaround I've ever seen. We needed a recap for our forum in 5 hours, and they delivered a masterpiece. They don't just film; they understand business.",
            name: "Elena Petrova",
            role: "CEO, Visionary Hub"
          },
          {
            quote: "Working with Moonlight is a game-changer for my social presence. 10M+ views on our first campaign together. Their 'no bureaucracy' approach is exactly what I need.",
            name: "Maxim Sokolov",
            role: "Lifestyle Entrepreneur"
          }
        ].map((item, i) => (
          <div key={i} className="bg-surface-dark p-8 rounded-xl border border-white/5 relative group">
            <span className="text-primary/30 text-6xl absolute top-6 right-8 font-serif leading-none opacity-50">"</span>
            <p className="text-lg text-gray-300 mb-8 italic leading-relaxed relative z-10">"{item.quote}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-white/20"></div>
              <div>
                <p className="font-bold font-display text-xl">{item.name}</p>
                <p className="text-[10px] text-text-muted uppercase tracking-widest">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [timeLeft, setTimeLeft] = useState('14:59');

  useEffect(() => {
    const interval = setInterval(() => {
      // Simple mock timer
      const now = new Date();
      const seconds = 59 - now.getSeconds();
      const minutes = 14;
      setTimeLeft(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black relative py-32 border-t border-white/10" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-6xl md:text-[100px] font-bold mb-8 font-display leading-none tracking-tighter">
              STOP THINKING.<br />
              <span className="text-primary">START PRODUCING.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 font-light max-w-lg leading-relaxed">
              The best entrepreneurs in the UAE don't wait for the 'perfect moment'. They create it. We are the architects of that moment.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-sm border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                  <Mail className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-bold">Direct Line</p>
                  <a href="mailto:hello@moonlight.ae" className="text-2xl font-bold hover:text-primary transition-colors font-display">HELLO@MOONLIGHT.AE</a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-sm border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-bold">Global HQ</p>
                  <p className="text-2xl font-bold font-display">DUBAI MEDIA CITY, BLDG 10</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-dark p-10 rounded-xl shadow-2xl relative chrome-border">
            <div className="mb-8 flex flex-col sm:flex-row justify-between items-center bg-red-950/40 p-5 rounded border border-primary/30 gap-4">
              <div className="flex items-center gap-3 text-primary">
                <Timer className="w-5 h-5 animate-pulse" />
                <span className="font-black text-sm tracking-widest uppercase">LIMITED AVAILABILITY</span>
              </div>
              <div className="flex gap-4 font-mono text-xl">
                <div className="text-center">
                  <span className="block text-white font-bold">02</span>
                  <span className="text-[8px] text-primary uppercase font-bold">Slots Left</span>
                </div>
                <div className="text-white/20">:</div>
                <div className="text-center">
                  <span className="block text-white font-bold">{timeLeft}</span>
                  <span className="text-[8px] text-primary uppercase font-bold">Next Refresh</span>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] text-gray-500 uppercase font-black tracking-widest mb-2">Founder / CEO Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter name"
                    className="w-full bg-background-dark border border-white/5 rounded-sm px-5 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-gray-500 uppercase font-black tracking-widest mb-2">WhatsApp / Phone</label>
                  <input 
                    type="tel" 
                    placeholder="+971..."
                    className="w-full bg-background-dark border border-white/5 rounded-sm px-5 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] text-gray-500 uppercase font-black tracking-widest mb-2">Project Vision</label>
                <select className="w-full bg-background-dark border border-white/5 rounded-sm px-5 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none">
                  <option>Commercial / Ads</option>
                  <option>Monthly Social Retainer</option>
                  <option>Real Estate Portfolio</option>
                  <option>Elite Event Coverage</option>
                  <option>Music / Art Production</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] text-gray-500 uppercase font-black tracking-widest mb-2">Project Scale & Brief</label>
                <textarea 
                  placeholder="Tell us how you want to disrupt the industry..."
                  rows={4}
                  className="w-full bg-background-dark border border-white/5 rounded-sm px-5 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                ></textarea>
              </div>
              <button 
                type="button"
                className="w-full bg-primary text-white font-black text-2xl font-display tracking-[0.3em] py-5 rounded-sm hover:bg-red-700 transition-all mt-6 shadow-lg shadow-primary/20 flex items-center justify-center gap-3"
              >
                LOCK IN CONSULTATION
                <ArrowRight className="w-6 h-6" />
              </button>
              <p className="text-center text-[10px] text-gray-600 uppercase tracking-widest mt-4">Typical response time: Under 120 minutes</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-black py-12 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex flex-col items-center md:items-start">
        <p className="text-4xl font-bold tracking-wider font-display">MOONLIGHT<span className="text-primary">.</span></p>
        <p className="text-xs text-gray-600 mt-2 uppercase tracking-widest">Global Precision. Dubai Execution.</p>
      </div>
      <p className="text-xs text-gray-500 font-medium">© 2024 MOONLIGHT MEDIA DUBAI. UNRIVALED QUALITY SINCE DAY ONE.</p>
      <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
        <a href="#" className="hover:text-primary transition-colors">Instagram</a>
        <a href="#" className="hover:text-primary transition-colors">Vimeo</a>
        <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
      </div>
    </div>
  </footer>
);

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/971500000000" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-10 right-10 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-transform hover:scale-110 border-4 border-white/10"
  >
    <MessageCircle className="w-8 h-8 fill-current" />
  </a>
);

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Logos />
      <Services />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
