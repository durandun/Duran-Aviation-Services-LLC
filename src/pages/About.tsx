import React from 'react';
import { motion } from 'motion/react';
import { Award, Shield, Briefcase, History, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">About Bryan Duran</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Decades of Aviation <br />
              <span className="text-accent">Integrity & Expertise.</span>
            </h1>
            <p className="text-muted text-lg mb-8 leading-relaxed">
              Bryan Duran is an FAA Designated Airworthiness Representative (DAR-F) with a career spanning over 18 years in the most demanding sectors of the aviation industry. 
            </p>
            <p className="text-muted text-lg mb-10 leading-relaxed">
              His philosophy is simple: provide practical, efficient, and uncompromising certification services that keep aircraft safe and compliant without wasting time.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-secondary transition-all">
                Work With Bryan
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000" 
                alt="Professional Aviation Consultant" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 hidden md:block max-w-xs">
              <p className="text-sm italic text-slate-600 leading-relaxed">
                "In aviation, there is no room for 'good enough.' Compliance is the foundation of safety."
              </p>
              <p className="mt-4 font-bold text-primary">— Bryan Duran</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {[
            { 
              icon: History, 
              title: 'Military Foundation', 
              desc: 'Started in the United States Marine Corps (USMC), building a foundation of discipline, technical mastery, and mission-first thinking.' 
            },
            { 
              icon: Briefcase, 
              title: 'Aerospace Leadership', 
              desc: 'Extensive experience with Boeing, SpaceX, and Lockheed Martin, managing complex airworthiness and quality systems.' 
            },
            { 
              icon: Award, 
              title: 'FAA DAR-F', 
              desc: 'Directly authorized by the FAA to perform airworthiness inspections and issue certificates, providing a direct path to compliance.' 
            }
          ].map((item, idx) => (
            <div key={idx} className="p-8 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center text-accent shadow-sm mb-6">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-3xl p-12 md:p-20 text-white">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Clients Trust Duran Aviation</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-accent/20 p-2 rounded text-accent h-fit">
                  <Shield size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Uncompromising Compliance</h4>
                  <p className="text-slate-400 leading-relaxed">We don't cut corners. Our inspections are thorough, ensuring your aircraft meets every FAA requirement for safe operation.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-accent/20 p-2 rounded text-accent h-fit">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Efficiency & Clarity</h4>
                  <p className="text-slate-400 leading-relaxed">We understand that time is money in aviation. We explain the process in plain English and work to get you certified without unnecessary delays.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-accent/20 p-2 rounded text-accent h-fit">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Proven Track Record</h4>
                  <p className="text-slate-400 leading-relaxed">From experimental builds to transport category aircraft, we have the experience to handle diverse certification challenges.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
