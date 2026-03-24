import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ShieldCheck, Clock, Award, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, TRUST_INDICATORS } from '../constants';
import { CertificationAssistant } from '../components/CertificationAssistant';

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=2000" 
            alt="Aircraft Hangar" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6 border border-accent/20">
                <Award size={14} />
                FAA DAR-F Designated
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
                Airworthiness Certification <br />
                <span className="text-accent">Done Right.</span>
              </h1>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                Navigate FAA compliance with confidence. Expert DAR-F services for aircraft owners, builders, and operators—backed by 18+ years of real-world aviation experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-accent/20"
                >
                  Request Certification
                  <ChevronRight size={20} />
                </Link>
                <Link
                  to="/services"
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center"
                >
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Trust Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-xl border-t border-white/10 py-8 hidden lg:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-4 gap-8">
              {TRUST_INDICATORS.map((item) => (
                <div key={item.label} className="flex flex-col">
                  <span className="text-2xl font-display font-bold text-white">{item.value}</span>
                  <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Experience That Matters. <br />
                Authority You Can Trust.
              </h2>
              <p className="text-muted text-lg mb-8 leading-relaxed">
                Bryan Duran brings a unique blend of military discipline and corporate aerospace precision to every inspection. From the USMC to major players like SpaceX and Boeing, the focus has always been on safety, compliance, and efficiency.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg text-accent">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">FAA DAR-F</h4>
                    <p className="text-xs text-muted">Direct FAA Authorization</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg text-accent">
                    <Plane size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">18+ Years</h4>
                    <p className="text-xs text-muted">Aviation Expertise</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=1000" 
                  alt="Aircraft Inspection" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <span className="block text-4xl font-bold mb-1">100%</span>
                <span className="text-sm text-slate-400 uppercase tracking-widest font-bold">Compliance Focus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Certification Services</h2>
            <p className="text-muted text-lg">We handle the technical details so you can focus on the mission.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
                <div className="bg-slate-50 w-14 h-14 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="text-accent font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More
                  <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A Streamlined Path to Certification</h2>
            <p className="text-muted text-lg">No fluff, no wasted time. Just a clear, professional process.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            {[
              { step: '01', title: 'Submit Request', desc: 'Provide aircraft details and your specific certification needs via our secure form.' },
              { step: '02', title: 'Review & Coordination', desc: 'We review your documentation and coordinate with the FAA to ensure a smooth path forward.' },
              { step: '03', title: 'Inspection & Certification', desc: 'On-site inspection and issuance of airworthiness certificates upon compliance.' }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <span className="text-6xl font-display font-bold text-slate-100 absolute -top-10 -left-4 z-0">{item.step}</span>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                  <p className="text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* AI Assistant Integration */}
          <div className="mt-12">
            <div className="text-center mb-12">
              <span className="text-accent font-bold uppercase tracking-widest text-xs mb-2 block">Not sure what you need?</span>
              <h3 className="text-2xl font-bold">Try our Certification Assistant</h3>
            </div>
            <CertificationAssistant />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img 
                src="https://images.unsplash.com/photo-1464039397811-476f652a343b?auto=format&fit=crop&q=80&w=2000" 
                alt="Sky" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to get your aircraft certified?</h2>
              <p className="text-slate-300 text-lg mb-10">
                Don't let compliance delays ground your operation. Get expert DAR-F support today.
              </p>
              <Link
                to="/contact"
                className="inline-flex bg-accent text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-accent/40"
              >
                Contact Bryan Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
