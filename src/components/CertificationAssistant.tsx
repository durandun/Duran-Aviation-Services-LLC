import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Loader2, Plane, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export function CertificationAssistant() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const analyzeNeeds = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `You are an expert aviation certification assistant for Duran Aviation Services. 
        The user is asking about their aircraft certification needs: "${input}".
        Provide a professional, concise summary of:
        1. Likely certification category (Standard, E-AB, LSA, etc.)
        2. Key FAA forms or requirements they should be aware of.
        3. A recommended next step for working with Bryan Duran.
        Keep it professional, direct, and aviation-focused. Use plain English.`,
      });
      setResult(response.text || 'Unable to analyze at this time.');
    } catch (error) {
      console.error(error);
      setResult('Error connecting to AI assistant. Please contact Bryan directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden max-w-4xl mx-auto">
      <div className="bg-primary p-6 text-white flex items-center gap-3">
        <div className="bg-accent p-2 rounded-lg">
          <Sparkles size={20} />
        </div>
        <div>
          <h3 className="font-bold">Certification Assistant</h3>
          <p className="text-xs text-slate-400">AI-Powered Compliance Insight</p>
        </div>
      </div>
      <div className="p-8">
        <p className="text-sm text-muted mb-6">
          Describe your aircraft (e.g., "I'm building an RV-14 and need an initial inspection" or "I have a Cessna 182 that needs an amended certificate") to get instant guidance.
        </p>
        <div className="flex gap-4">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe your aircraft or situation..."
            className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:border-accent outline-none transition-all"
            onKeyDown={(e) => e.key === 'Enter' && analyzeNeeds()}
          />
          <button 
            onClick={analyzeNeeds}
            disabled={loading}
            className="bg-accent text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all disabled:opacity-50 flex items-center gap-2"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <Sparkles size={20} />}
            Analyze
          </button>
        </div>

        <AnimatePresence>
          {result && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-200"
            >
              <div className="prose prose-slate prose-sm max-w-none">
                <div className="whitespace-pre-wrap text-slate-700 leading-relaxed">
                  {result}
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-muted italic">This is an AI-generated summary for guidance only.</span>
                <button 
                  onClick={() => setResult(null)}
                  className="text-xs font-bold text-accent hover:underline"
                >
                  Clear Result
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
