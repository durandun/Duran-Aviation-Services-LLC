import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Plane, FlaskConical, Briefcase, ChevronRight, FileText, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICE_DETAILS = [
  {
    title: 'Standard Airworthiness',
    icon: ShieldCheck,
    desc: 'Certification for standard category aircraft (Normal, Utility, Acrobatic, Commuter, and Transport).',
    who: 'Commercial operators, private owners, and corporate flight departments.',
    includes: [
      'Initial issuance of Standard Airworthiness Certificates',
      'Amended or replacement certificates',
      'Export Airworthiness Approvals',
      'Conformity inspections'
    ]
  },
  {
    title: 'Experimental Certification',
    icon: FlaskConical,
    desc: 'Specialized certification for non-standard aircraft categories.',
    who: 'Amateur builders (E-AB), R&D teams, and exhibition aircraft owners.',
    includes: [
      'Amateur-Built (E-AB) inspections',
      'Exhibition and Air Racing certificates',
      'Research & Development / Market Survey',
      'Operating Limitations review'
    ]
  },
  {
    title: 'Light Sport Aircraft (LSA)',
    icon: Plane,
    desc: 'Certification for the growing Light Sport category.',
    who: 'LSA manufacturers and individual owners.',
    includes: [
      'Special LSA (S-LSA) initial issuance',
      'Experimental LSA (E-LSA) certification',
      'Compliance documentation review',
      'Manufacturer coordination'
    ]
  },
  {
    title: 'Aviation Consulting',
    icon: Briefcase,
    desc: 'Strategic guidance for complex regulatory environments.',
    who: 'Brokers, operators, and aerospace companies.',
    includes: [
      'FAA Coordination & Liaison',
      'Documentation & Logbook Audits',
      'Import/Export Compliance',
      'Pre-purchase certification review'
    ]
  }
];

export function Services() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Expert FAA DAR-F Services</h1>
          <p className="text-muted text-xl leading-relaxed">
            We provide direct, efficient airworthiness certification and consulting services tailored to your specific aircraft and mission requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {SERVICE_DETAILS.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="p-8 md:p-12 lg:col-span-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-accent/10 p-3 rounded-2xl text-accent">
                      <service.icon size={32} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-muted text-lg mb-8 leading-relaxed">{service.desc}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-widest text-accent mb-4">Who it's for</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{service.who}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-widest text-accent mb-4">What's Included</h4>
                      <ul className="space-y-2">
                        {service.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-secondary transition-all"
                  >
                    Request This Service
                    <ChevronRight size={18} />
                  </Link>
                </div>
                <div className="bg-slate-50 p-8 md:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-200">
                  <h4 className="font-bold mb-4">What to Expect</h4>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[10px] font-bold shrink-0">1</div>
                      <p className="text-xs text-muted leading-relaxed">Initial documentation review and FAA coordination.</p>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[10px] font-bold shrink-0">2</div>
                      <p className="text-xs text-muted leading-relaxed">On-site physical inspection of the aircraft and records.</p>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[10px] font-bold shrink-0">3</div>
                      <p className="text-xs text-muted leading-relaxed">Issuance of the airworthiness certificate upon compliance.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CheckCircle2({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  );
}
