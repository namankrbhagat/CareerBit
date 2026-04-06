import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Brain, Mic, Clock, TrendingUp, CheckCircle2 } from 'lucide-react';

function Home() {
  return (
    <div className="font-body text-on-surface bg-surface min-h-screen">
      <Navbar />
      <main className="pt-32">
        <Hero />

        {/* Bento Steps Section */}
        <section className="bg-surface-container-low py-32">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-20 text-center max-w-3xl mx-auto">
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-6">
                Refine Your Skills in <span className="text-primary italic">Three Steps</span>
              </h2>
              <p className="text-on-surface-variant text-lg">
                A structured approach to mastering any professional role with precision-engineered AI feedback.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="group relative p-12 bg-surface-container-lowest rounded-lg card-ambient-shadow flex flex-col items-start transition-all hover:-translate-y-2">
                <div className="absolute top-0 right-12 translate-y-[-50%] px-4 py-2 bg-primary-container text-on-primary-container rounded-full font-bold text-sm tracking-widest uppercase">Step 01</div>
                <div className="w-16 h-16 bg-surface-container rounded-lg flex items-center justify-center mb-8">
                  <Brain className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">Role & Experience Selection</h3>
                <p className="text-on-surface-variant leading-relaxed">Customize the simulation to your specific target role, industry, and seniority level for hyper-relevant practice.</p>
              </div>
              {/* Step 2 */}
              <div className="group relative p-12 bg-surface-container-lowest rounded-lg card-ambient-shadow flex flex-col items-start transition-all hover:-translate-y-2">
                <div className="absolute top-0 right-12 translate-y-[-50%] px-4 py-2 bg-primary-container text-on-primary-container rounded-full font-bold text-sm tracking-widest uppercase">Step 02</div>
                <div className="w-16 h-16 bg-surface-container rounded-lg flex items-center justify-center mb-8">
                  <Mic className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">Smart Voice Interview</h3>
                <p className="text-on-surface-variant leading-relaxed">Engage in dynamic, conversational mock interviews powered by natural language processing that listens and responds.</p>
              </div>
              {/* Step 3 */}
              <div className="group relative p-12 bg-surface-container-lowest rounded-lg card-ambient-shadow flex flex-col items-start transition-all hover:-translate-y-2">
                <div className="absolute top-0 right-12 translate-y-[-50%] px-4 py-2 bg-primary-container text-on-primary-container rounded-full font-bold text-sm tracking-widest uppercase">Step 03</div>
                <div className="w-16 h-16 bg-surface-container rounded-lg flex items-center justify-center mb-8">
                  <Clock className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">Timer Based Simulation</h3>
                <p className="text-on-surface-variant leading-relaxed">Pressure-test your responses with realistic time limits that mimic actual interview conditions and stress levels.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Insights Section */}
        <section className="max-w-7xl mx-auto px-8 py-32 flex flex-col md:flex-row items-center gap-24">
          <div className="flex-1 order-2 md:order-1">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-surface-container p-8 rounded-lg space-y-4">
                <span className="text-4xl font-black text-primary">94%</span>
                <p className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Accuracy Rate</p>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant/15 p-8 rounded-lg space-y-4">
                <span className="text-4xl font-black text-secondary">500+</span>
                <p className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Role Profiles</p>
              </div>
              <div className="col-span-2 bg-inverse-surface p-10 rounded-lg text-surface-container-lowest flex justify-between items-center">
                <div className="space-y-2">
                  <p className="text-2xl font-bold">Real-time Analysis</p>
                  <p className="text-surface-variant">Get instant sentiment and clarity scores.</p>
                </div>
                <TrendingUp className="w-12 h-12 text-primary-fixed" />
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-8 order-1 md:order-2">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface">
              Data-Driven <span className="text-primary italic">Confidence.</span>
            </h2>
            <p className="text-on-surface-variant text-xl leading-relaxed">
              Our intelligence engine doesn't just ask questions. It analyzes your body language, tone variance, and semantic strength to provide an editorial-grade review of your performance.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary fill-primary text-white" />
                <span className="font-semibold">Semantic keyword tracking</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary fill-primary text-white" />
                <span className="font-semibold">Confidence and clarity metrics</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary fill-primary text-white" />
                <span className="font-semibold">Customized improvement roadmap</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Final Section */}
        <section className="max-w-7xl mx-auto px-8 mb-32">
          <div className="bg-primary rounded-lg p-16 md:p-24 text-center text-surface-container-lowest overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-fixed/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 space-y-8">
              <h2 className="font-headline text-4xl md:text-6xl font-extrabold leading-tight">Ready to ace your <br/>next big career move?</h2>
              <p className="text-on-primary text-xl opacity-90 max-w-2xl mx-auto">Join thousands of professionals who have transformed their interview performance with CareerBit.ai.</p>
              <div className="pt-8">
                <Link to="/auth" className="inline-flex items-center justify-center bg-surface-container-lowest text-on-primary-container px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform duration-300">
                  Get Started for Free
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;