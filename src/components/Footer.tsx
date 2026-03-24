import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-white p-1.5 rounded text-primary">
                <Plane size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-display font-bold leading-none">DURAN AVIATION</span>
                <span className="text-[8px] font-bold text-accent tracking-[0.2em] uppercase">Services LLC</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Professional FAA DAR-F services and airworthiness certification consulting. 18+ years of aviation expertise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-accent">Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/services" className="hover:text-white transition-colors">Airworthiness Certification</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Experimental Aircraft</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Special Airworthiness</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Aviation Consulting</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-accent">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Bryan</Link></li>
              <li><Link to="/process" className="hover:text-white transition-colors">Our Process</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-accent">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent" />
                <span>bryan@aircraftdar.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent" />
                <span>Contact for Phone</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-accent" />
                <span>United States & Global</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Duran Aviation Services LLC. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
