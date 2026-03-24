import React from 'react';
import { motion } from 'motion/react';
import { ClipboardCheck, Search, CheckCircle2, AlertTriangle, Clock, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Process() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">The Path to Certification</h1>
          <p className="text-muted text-xl leading-relaxed">
            We've refined our process to be as transparent and efficient as possible. Here is exactly what to expect when working with Bryan Duran.
          </p>
        </div>

        <div className="space-y-24">
          {[
            {
              step: '01',
              title: 'Initial Request & Scoping',
              icon: FileText,
              desc: 'Submit your aircraft details and certification needs. We review the scope of work and provide a clear path forward, including necessary FAA coordination.',
              details: ['Aircraft type and history review', 'Identification of certification basis', 'Initial FAA coordination']
            },
            {
              step: '02',
              title: 'Documentation Audit',
              icon: ClipboardCheck,
              desc: 'We perform a deep-dive review of your aircraft logbooks, 8130-3 forms, and compliance documentation to ensure everything is in order before the physical inspection.',
              details: ['Logbook entry verification', 'AD compliance review', 'Major alteration/repair review', 'Weight and balance check']
            },
            {
              step: '03',
              title: 'Physical Inspection',
              icon: Search,
              desc: 'Bryan performs an on-site physical inspection of the aircraft to verify conformity and condition for safe operation.',
              details: ['Airframe and engine inspection', 'Systems functional checks', 'Data plate verification', 'Marking and placard review']
            },
            {
              step: '04',
              title: 'Certificate Issuance',
              icon: CheckCircle2,
              desc: 'Upon successful inspection and verification of compliance, the airworthiness certificate and operating limitations are issued.',
              details: ['Issuance of FAA Form 8130-7 or 8100-2', 'Review of operating limitations', 'Final logbook endorsements']
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl font-display font-bold text-accent/20">{item.step}</span>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>
                <h2 className="text-3xl font-bold mb-6">{item.title}</h2>
                <p className="text-muted text-lg mb-8 leading-relaxed">{item.desc}</p>
                <ul className="space-y-3">
                  {item.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`bg-slate-50 rounded-3xl p-12 flex items-center justify-center border border-slate-200 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <item.icon size={120} className="text-slate-200" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-amber-50 p-10 rounded-3xl border border-amber-100">
            <div className="flex items-center gap-3 text-amber-600 mb-6">
              <AlertTriangle size={24} />
              <h3 className="text-xl font-bold">Common Delays to Avoid</h3>
            </div>
            <ul className="space-y-4 text-slate-700">
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-2" />
                <p>Incomplete or missing logbook entries for major repairs/alterations.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-2" />
                <p>Outdated or missing Airworthiness Directive (AD) compliance records.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-2" />
                <p>Incorrect or missing data plates and placards.</p>
              </li>
            </ul>
          </div>
          <div className="bg-slate-900 p-10 rounded-3xl text-white">
            <div className="flex items-center gap-3 text-accent mb-6">
              <Clock size={24} />
              <h3 className="text-xl font-bold">Timeline Expectations</h3>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Timelines vary based on aircraft complexity and FAA coordination requirements. Generally, once documentation is complete:
            </p>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-300">Initial Review</span>
                <span className="font-bold">2-5 Days</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-300">FAA Coordination</span>
                <span className="font-bold">1-2 Weeks</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-300">Physical Inspection</span>
                <span className="font-bold">1-2 Days</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to start the process?</h2>
          <Link to="/contact" className="bg-accent text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-700 transition-all shadow-xl shadow-accent/20">
            Get a Quote Today
          </Link>
        </div>
      </div>
    </div>
  );
}
