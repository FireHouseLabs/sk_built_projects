/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import skbuiltLogo from './skbuilt.png';
import {
  Hammer,
  Fence,
  DoorOpen,
  Bath,
  PencilRuler,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  ChevronRight,
  Menu,
  X,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const services = [
    {
      title: "Decks & Pergolas",
      description: "Custom-built outdoor living spaces designed for durability and style.",
      icon: <PencilRuler className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1601428243305-25c850953aae?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Fences & Retaining Walls",
      description: "Secure, beautiful boundary solutions and structural landscape features.",
      icon: <Fence className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1601042860368-debed90085e0?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Window Replacements",
      description: "Energy-efficient and aesthetic upgrades for your home's entry points.",
      icon: <DoorOpen className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1637098901773-1d33d75a02bd?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Door Replacements",
      description: "Energy-efficient and aesthetic upgrades for your home's entry points.",
      icon: <DoorOpen className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1628744876657-abd5086695dc?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Kitchen & Bathroom Renovations",
      description: "Full-service remodeling to transform the most important rooms in your home.",
      icon: <Bath className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "General Carpentry & Maintenance",
      description: "Skilled woodwork and comprehensive property maintenance for your home or business.",
      icon: <Hammer className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1626081063434-79a2169791b1?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const params = new URLSearchParams();
    formData.forEach((value, key) => params.append(key, value as string));

    try {
      const response = await fetch('https://submit-form.com/9miEiv6vh', {
        method: 'POST',
        body: params,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setFormStatus('success');
      form.reset();
    } catch (error) {
      console.error(error);
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#" className="flex items-center shrink-0">
              <img
                src={skbuiltLogo}
                alt="SK Built Projects"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium hover:text-[#1B365D] transition-colors font-display">Services</a>
              <a href="#about" className="text-sm font-medium hover:text-[#1B365D] transition-colors font-display">About</a>
              <a href="#contact" className="text-sm font-medium hover:text-[#1B365D] transition-colors font-display">Contact</a>
              <div className="flex items-center gap-2 bg-[#1B365D] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#1B365D]/90 transition-all cursor-pointer font-display">
                <Phone className="w-4 h-4" />
                <span>0448 469 891</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-[#1A1A1A]"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">Services</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">About</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">Contact</a>
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-orange-600 font-bold">
                    <Phone className="w-5 h-5" />
                    <span>0448 469 891</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 font-display text-[#1B365D]">
                Quality Built <br />
                <span className="text-[#75787B]">With Integrity.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                Transforming residential and commercial spaces with SK Built Projects. We specialise in custom decks, renovations, and expert carpentry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-[#1B365D] text-white px-8 py-4 rounded-xl text-center font-bold hover:bg-[#1B365D]/90 transition-all flex items-center justify-center gap-2 group">
                  Get a Free Quote
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#services" className="bg-white border-2 border-[#1B365D] text-[#1B365D] px-8 py-4 rounded-xl text-center font-bold hover:bg-gray-50 transition-all">
                  Our Services
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-display">Our Services</h2>
            <p className="text-gray-400 max-w-2xl">
              We offer a comprehensive range of building and maintenance services, ensuring every job is finished to the highest standard.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-[#262626] rounded-3xl p-8 hover:bg-[#1B365D] transition-all duration-500 cursor-default"
              >
                <div className="mb-6 bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  {React.cloneElement(service.icon as React.ReactElement, { className: 'w-6 h-6 text-[#1B365D] group-hover:text-white' })}
                </div>
                <h3 className="text-2xl font-bold mb-3 font-display">{service.title}</h3>
                <p className="text-gray-400 group-hover:text-white/80 mb-8 transition-colors">
                  {service.description}
                </p>
                <div className="relative h-48 overflow-hidden rounded-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-display">Need a project <br /><span className="text-[#1B365D]">to get started?</span></h2>
              <p className="text-gray-600 mb-12 text-lg">
                Contact us today for a free on-site consultation and quote. Our team is ready to help you bring your vision to life.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-4 rounded-2xl">
                    <Phone className="w-6 h-6 text-[#1B365D]" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Call Us</div>
                    <div className="text-gray-600">0448 469 891</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-4 rounded-2xl">
                    <Mail className="w-6 h-6 text-[#1B365D]" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Email Us</div>
                    <div className="text-gray-600">info@skbuiltprojects.com.au</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-4 rounded-2xl">
                    <MapPin className="w-6 h-6 text-[#1B365D]" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Location</div>
                    <div className="text-gray-600">Tyabb, Victoria, Australia</div>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                {/* <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-[#1B365D] hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </a> */}
                <a href="https://www.facebook.com/profile.php?id=61589608593191" className="p-3 bg-gray-100 rounded-full hover:bg-[#1B365D] hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-12 rounded-[40px] shadow-2xl border border-gray-100">
              <AnimatePresence mode="wait">
                {formStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for your enquiry. We'll be in touch within 24 hours.</p>
                    <button
                      onClick={() => setFormStatus('idle')}
                      className="mt-8 text-[#1B365D] font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    action="https://submit-form.com/9miEiv6vh"
                    method="POST"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-gray-700">Name</label>
                        <input id="name" name="name" required type="text" placeholder="John Doe" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-[#1B365D] focus:ring-0 transition-all outline-none" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-bold text-gray-700">Phone</label>
                        <input id="phone" name="phone" required type="tel" placeholder="0448469891" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-[#1B365D] focus:ring-0 transition-all outline-none" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-gray-700">Email</label>
                      <input id="email" name="email" required type="email" placeholder="john@example.com" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-[#1B365D] focus:ring-0 transition-all outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-bold text-gray-700">Service Required</label>
                      <select id="service" name="service" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-[#1B365D] focus:ring-0 transition-all outline-none">
                        {services.map(s => <option key={s.title}>{s.title}</option>)}
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-bold text-gray-700">Message</label>
                      <textarea id="message" name="message" required rows={4} placeholder="Tell us about your project..." className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-[#1B365D] focus:ring-0 transition-all outline-none resize-none"></textarea>
                    </div>
                    {formStatus === 'error' && (
                      <p className="text-sm text-red-600">
                        Something went wrong while sending your enquiry. Please try again.
                      </p>
                    )}
                    <button
                      disabled={formStatus === 'submitting'}
                      className="w-full bg-[#1B365D] text-white py-5 rounded-2xl font-bold hover:bg-[#1B365D]/90 transition-all disabled:opacity-50"
                    >
                      {formStatus === 'submitting' ? 'Sending...' : 'Send Enquiry'}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <a href="#" className="flex items-center shrink-0">
              <img
                src={skbuiltLogo}
                alt="SK Built Projects"
                className="h-12 w-auto object-contain"
              />
            </a>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} SK Built Projects. All rights reserved.
            </div>
            <div className="flex gap-8 text-sm font-medium">
              <a href="#" className="hover:text-[#1B365D]">Privacy Policy</a>
              <a href="#" className="hover:text-[#1B365D]">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
