import React from 'react';
import { motion } from 'motion/react';
import { FileText, ChevronRight, Search, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const ARTICLES = [
  {
    title: 'How to Get an Airworthiness Certificate',
    desc: 'A comprehensive guide for aircraft owners on the steps required to obtain initial or amended certification.',
    readTime: '8 min read',
    category: 'Certification'
  },
  {
    title: 'Common Certification Delays & How to Avoid Them',
    desc: 'Learn the top reasons inspections fail and how you can prepare your documentation to ensure a smooth process.',
    readTime: '6 min read',
    category: 'Compliance'
  },
  {
    title: 'DAR vs. FAA Inspector: What You Need to Know',
    desc: 'Understanding the difference between a Designated Airworthiness Representative and an FAA Inspector.',
    readTime: '5 min read',
    category: 'Industry Insights'
  }
];

export function Resources() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Aviation Insights</h1>
          <p className="text-muted text-xl leading-relaxed">
            Expert resources to help you understand FAA compliance, airworthiness requirements, and industry best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col hover:shadow-xl transition-all group"
            >
              <div className="aspect-video bg-slate-100 flex items-center justify-center text-slate-300 group-hover:bg-slate-200 transition-colors">
                <BookOpen size={48} />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-accent uppercase tracking-widest">{article.category}</span>
                  <span className="text-xs text-muted">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">{article.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-8 flex-1">{article.desc}</p>
                <button className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Read Article
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-slate-50 rounded-3xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold mb-4">Need a specific compliance review?</h3>
            <p className="text-muted">Our consulting services provide tailored guidance for your unique aircraft or operational challenges.</p>
          </div>
          <Link to="/contact" className="bg-primary text-white px-8 py-4 rounded-full font-bold whitespace-nowrap">
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
