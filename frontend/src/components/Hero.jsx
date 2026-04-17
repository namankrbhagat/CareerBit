import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mic } from 'lucide-react';

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-32 text-center md:text-left flex flex-col md:flex-row items-center gap-16">
      <div className="flex-1 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-container/20 text-on-primary-container text-sm font-semibold tracking-wide">
          <Zap className="w-4 h-4 fill-current" />
          NEXT-GEN INTERVIEW PREP
        </div>
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-on-surface">
          Practice Interviews with <span className="text-gradient">AI Intelligence</span>
        </h1>
        <p className="text-on-surface-variant text-xl md:text-2xl leading-relaxed max-w-2xl">
          Role-based mock interviews with smart follow-ups, adaptive difficulty and real-time performance evaluation.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Link to="/auth" className="inline-flex items-center justify-center bg-inverse-surface text-surface-container-lowest px-10 py-5 rounded-xl font-bold text-lg btn-shadow active:scale-95 transition-all">
            Start Interview
          </Link>
          <Link to="/history" className="bg-surface-container text-on-surface px-10 py-5 rounded-xl font-bold text-lg active:scale-95 transition-all cursor-pointer inline-flex items-center justify-center">
            View History
          </Link>
        </div>
      </div>
      <div className="flex-1 relative">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-fixed/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-tertiary-fixed/20 blur-3xl rounded-full"></div>
        <div className="relative rounded-lg overflow-hidden card-ambient-shadow">
          <img 
            alt="Professional Interview" 
            className="w-full aspect-[4/3] object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA05i45cT6fsaXSlvth7CYGKDm-AwzFmr9-9U26kXj-OWuCaeUaRwq-aQazIa01HtoTS7qakh35-jn-G82VUT5z6B0bk1LH3C_GJ_z-Opjjsn5F7F3FjxvDYHco0Y8CyxSMf5KEYs78Eula52pSVuJqPGyaNR6Zc8wV5M27o8r1OEqe8a2VR78ZpRnzJa0QZdqb1afPIhXMph5ranO_OjvQk6F_i0z_5yAuKzoyERp4TQ2aiEoLtN9kK7tbHQDBolz3fq_TcNPh4NYJ"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8 bg-surface-container-lowest/90 backdrop-blur-md p-6 rounded-lg border border-white/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center">
                <Mic className="w-6 h-6 text-on-primary-container fill-current" />
              </div>
              <div>
                <p className="text-sm font-bold text-on-surface">AI Interviewer active</p>
                <p className="text-xs text-on-surface-variant">Analyzing tone and clarity...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
