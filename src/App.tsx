/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Target, 
  Smartphone, 
  Clock, 
  ShieldCheck, 
  MessageSquare,
  ChevronRight,
  Menu,
  X,
  Layers,
  TrendingUp,
  BrainCircuit
} from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-500/10 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center gap-3">
            <img 
              src="https://i.ibb.co/0y2wmX81/IMG-4856.png" 
              alt="AI Business Mastery Logo" 
              referrerPolicy="no-referrer"
              className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-lg shadow-lg shadow-cyan-500/20"
            />
            <span className="text-lg md:text-xl font-bold tracking-tight text-white">
              AI Business <span className="text-cyan-400">Mastery</span>
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://bit.ly/4bwKlmT"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 md:px-6 md:py-2.5 rounded-full bg-cyan-500 text-slate-950 text-xs md:text-sm font-bold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 active:scale-95 inline-block"
            >
              JOIN NOW
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const WhatIsAI = () => (
  <section className="py-24 bg-slate-900/50 relative overflow-hidden">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
        <BrainCircuit className="w-4 h-4 text-cyan-400" />
        <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">THE CORE MISSION</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight uppercase">
        What is <span className="text-cyan-400">AI Business Mastery?</span>
      </h2>
      <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium">
        AI Business Mastery is a <span className="text-white font-bold">72-hour implementation challenge</span> designed for beginners and business owners who want to move from confusion to a real, sellable AI-powered offer using free AI tools and a smartphone.
      </p>
    </div>
  </section>
);

const Hero = () => (
  <section className="relative pt-24 pb-16 md:pt-48 md:pb-32 overflow-hidden">
    {/* Background Grid & Glow */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-center mb-6 md:mb-8">
          <img 
            src="https://i.ibb.co/0y2wmX81/IMG-4856.png" 
            alt="AI Business Mastery Logo" 
            referrerPolicy="no-referrer"
            className="w-20 h-20 md:w-28 md:h-28 object-contain rounded-2xl shadow-2xl shadow-cyan-500/20"
          />
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6 md:mb-10">
          <Zap className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400" />
          <span className="text-[10px] md:text-xs font-bold tracking-widest text-cyan-400 uppercase">72-Hour Implementation Challenge</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 md:mb-8 leading-[1.1] md:leading-tight max-w-4xl mx-auto uppercase">
          TURN AI CONFUSION <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">INTO A REAL OFFER</span>
        </h1>

        <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-400/90 mb-10 md:mb-12 leading-relaxed px-4 font-medium">
          Stop learning AI in circles. Follow a clear path to build a simple, sellable offer with free tools and your smartphone.
        </p>

        <div className="flex flex-col items-center gap-4 mb-12 md:mb-20">
          <a 
            href="https://bit.ly/4bwKlmT"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full max-w-xs md:max-w-none md:w-auto px-10 py-4 md:px-12 md:py-5 rounded-full bg-cyan-500 text-slate-950 font-bold text-sm md:text-base tracking-widest hover:bg-cyan-400 transition-all shadow-[0_0_30px_rgba(6,182,212,0.25)] active:scale-95 inline-block uppercase"
          >
            <span className="flex items-center justify-center gap-2">
              SEE HOW IT WORKS <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <div className="flex items-center gap-2 text-slate-500">
            <ShieldCheck className="w-4 h-4 text-cyan-500/50" />
            <p className="text-[10px] md:text-sm font-medium italic">
              Join 500+ creators building real AI offers.
            </p>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative group max-w-4xl w-full px-4">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <img 
                src="https://i.ibb.co/RGN82pgZ/IMG-5017.jpg" 
                alt="Mariam - From Confusion to Clarity" 
                referrerPolicy="no-referrer"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/60 backdrop-blur-md border border-white/10 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></div>
                  <p className="text-white font-bold text-xs md:text-sm">FROM SAVING AI CONTENT TO A CLEAR OFFER</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-cyan-400 text-[9px] md:text-xs uppercase tracking-[0.15em] font-black">72 HOURS. FREE TOOLS. REAL DIRECTION.</p>
                  <p className="text-slate-400 text-[8px] md:text-[10px] uppercase tracking-[0.1em]">CLARITY FIRST. MOMENTUM NEXT.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const StorySection = () => (
  <section id="story" className="py-24 bg-slate-950 relative overflow-hidden">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-500/30"></div>
          <span className="text-cyan-400 font-bold tracking-widest uppercase text-xs">The Mariam Story</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500/30"></div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-2xl md:text-3xl font-medium text-slate-200 leading-relaxed italic">
            "Three weeks ago, Mariam was still doing what many beginners do. Saving AI threads. Watching tutorials. Testing random tools. Telling herself she would start properly soon."
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mt-12 items-center">
            <div className="space-y-6 text-slate-400">
              <p>
                Today, she has something she did not have before. A clear AI-powered offer. A simple path to launch it. And the confidence that comes from finally knowing what she is building.
              </p>
              <p>
                That shift is what caught my attention. Because Mariam did not change because she suddenly became more gifted than everybody else.
              </p>
              <p className="text-white font-bold">
                She changed because she stopped learning in pieces and followed a structure.
              </p>
            </div>
            <div className="relative p-8 rounded-2xl bg-slate-900 border border-cyan-500/20">
              <div className="absolute top-0 right-0 p-4">
                <BrainCircuit className="w-8 h-8 text-cyan-500/20" />
              </div>
              <h4 className="text-cyan-400 font-bold mb-4 uppercase tracking-tight">The Shift</h4>
              <ul className="space-y-4">
                {[
                  "From scattered tools to one clear system",
                  "From endless learning to rapid implementation",
                  "From confusion to a sellable offer"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const JustLikeYou = () => (
  <section className="py-24 bg-slate-900/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">
            BEFORE THAT, MARIAM WAS <br />
            <span className="text-cyan-400">EXACTLY WHERE YOU ARE.</span>
          </h2>
          <div className="space-y-6 text-slate-400 text-lg">
            <p>
              Interested in AI, but still confused. She knew AI was a real opportunity. She could see people talking about digital products, content creation, funnels, and online income.
            </p>
            <p>
              But once she tried to apply it to herself, everything became messy.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: Layers, text: "Too many tools" },
                { icon: Target, text: "Too many ideas" },
                { icon: MessageSquare, text: "Too many opinions" },
                { icon: Clock, text: "No clear first step" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/50 border border-white/5">
                  <item.icon className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm font-medium text-slate-200">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-cyan-500/10 blur-2xl rounded-full"></div>
          <div className="relative p-10 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-950 border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">The Real Problem</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              It wasn't laziness. It wasn't lack of ambition. It wasn't lack of intelligence. She simply did not know how to turn AI into something simple and sellable.
            </p>
            <div className="p-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/20">
              <p className="text-cyan-400 font-bold italic">
                "That is why her story matters, because that is where many people are stuck right now."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const BreakingPoint = () => (
  <section className="py-24 bg-slate-950 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#06b6d410_0%,transparent_70%)]"></div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">The Breaking Point</h2>
      <div className="space-y-8 text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
        <p>
          One evening, after spending more time again watching content she still could not use, she had to admit something painful to herself.
        </p>
        <p className="text-white font-bold text-4xl md:text-5xl tracking-tighter">
          She was not lacking information. <br />
          <span className="text-cyan-400">She was drowning in it.</span>
        </p>
        <p className="text-slate-400 text-lg md:text-xl">
          That truth hit hard because life was already moving. Bills were real. Responsibilities were real. Pressure was real. She could not keep saying, “I will start later,” while still having nothing tangible in her hand.
        </p>
      </div>
      <div className="mt-16 flex flex-wrap justify-center gap-8">
        {["Clarity", "Direction", "Method"].map((word, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,1)]"></div>
            <span className="text-white font-bold tracking-widest uppercase text-sm">{word}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Discovery = () => (
  <section className="py-24 bg-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-slate-800 to-slate-950 border border-cyan-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-3xl rounded-full"></div>
        
        <div className="max-w-3xl">
          <span className="text-cyan-400 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">The Discovery</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            INTRODUCING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">AI BUSINESS MASTERY</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 leading-relaxed">
            At first, she was skeptical. She had seen enough online hype already. But this felt different. It wasn't built for tech experts or people with expensive software.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Smartphone, text: "Built for Smartphone users" },
              { icon: Zap, text: "Uses Free AI Tools" },
              { icon: Clock, text: "72-Hour Implementation" },
              { icon: ShieldCheck, text: "Simple, No-Fluff Method" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="text-slate-200 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Transformation = () => (
  <section id="process" className="py-24 bg-slate-950 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#06b6d405_0%,transparent_70%)]"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight"
        >
          HOW MARIAM WENT FROM <span className="text-cyan-400">CONFUSED TO CLEAR</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 max-w-2xl mx-auto text-lg"
        >
          This was not magic. It was a simple structure she could actually follow.
        </motion.p>
      </div>

      <div className="relative">
        {/* Desktop Connector Line */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent -translate-y-1/2"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {[
            { step: "01", title: "IDENTIFY THE RIGHT PROBLEM", body: "Find a real problem people already want solved." },
            { step: "02", title: "SHAPE A SIMPLE SOLUTION", body: "Use AI to turn that problem into something practical." },
            { step: "03", title: "PACKAGE IT INTO AN OFFER", body: "Turn the solution into something clear, useful, and sellable." },
            { step: "04", title: "BUILD A SIMPLE SALES PATH", body: "Create the basic path people can follow to buy from you." },
            { step: "05", title: "MOVE TOWARD LAUNCH", body: "Stop learning in circles and start moving with clarity." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="p-6 rounded-3xl bg-slate-900/50 border border-white/5 h-full hover:border-cyan-500/30 transition-all duration-500 backdrop-blur-sm group-hover:bg-slate-900/80">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl font-black text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">{item.step}</span>
                  <div className="h-px flex-1 bg-white/5"></div>
                </div>
                <h4 className="text-lg font-black text-white mb-3 leading-tight group-hover:text-cyan-400 transition-colors">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{item.body}</p>
              </div>
              {/* Mobile Connector */}
              {i < 4 && (
                <div className="lg:hidden flex justify-center py-4">
                  <div className="w-px h-8 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Results = () => (
  <section className="py-24 bg-slate-900/30 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#06b6d405_0%,transparent_50%)]"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "CLEAR OFFER", desc: "She knew what she was building." },
              { title: "CLEAR DIRECTION", desc: "She knew what problem it solved." },
              { title: "CLEAR NEXT STEP", desc: "She knew how to move forward." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-3xl bg-slate-950/80 border border-cyan-500/10 text-center group hover:border-cyan-500/30 transition-all"
              >
                <h4 className="text-cyan-400 font-black text-xs uppercase tracking-widest mb-3">{item.title}</h4>
                <p className="text-slate-300 text-sm leading-snug">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 p-8 rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5">
            <p className="text-slate-400 text-lg leading-relaxed italic">
              "Before income grows, confidence grows. Before confidence grows, clarity comes first."
            </p>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <motion.h2 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter"
          >
            THE FIRST RESULT <br />
            <span className="text-cyan-400">WAS NOT MONEY.</span>
          </motion.h2>
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
            <p className="text-slate-200">
              It was clarity. For the first time, Mariam was no longer saying, <span className="text-white font-medium">“I do not know where to start.”</span>
            </p>
            <p>
              She knew what she was building. She knew what problem it solved. She knew how to move.
            </p>
            <p className="text-slate-500 text-base">
              Not because it promised noise. Because it created movement.
            </p>
          </div>
          <div className="mt-10">
            <a 
              href="https://bit.ly/4bwKlmT"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-10 py-5 rounded-full bg-cyan-500 text-slate-950 font-black text-xl hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 active:scale-95 inline-block text-center"
            >
              JOIN THE CHALLENGE
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ReaderParallel = () => (
  <section className="py-24 bg-slate-950">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">This is about you.</h2>
      <div className="p-10 md:p-16 rounded-[2.5rem] bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500/20">
        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8">
          If you have been saving AI content, watching videos, and still have nothing clear to show for it, your problem is probably not effort.
        </p>
        <p className="text-3xl md:text-4xl font-black text-white mb-10">
          IT IS <span className="text-cyan-400">STRUCTURE.</span>
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          {[
            "No more random tutorials",
            "No more tool overload",
            "No more learning in circles"
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-center gap-2 text-slate-400">
              <X className="w-4 h-4 text-red-500/50" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Recommendation = () => (
  <section id="offer" className="py-24 bg-slate-900 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase">The Recommendation</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">I am sharing this because it solves a real problem many beginners and business owners have right now: scattered learning and confusion.</p>
      </div>

      <div className="max-w-4xl mx-auto p-1 rounded-[3rem] bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_60px_rgba(6,182,212,0.2)]">
        <div className="bg-slate-950 rounded-[2.9rem] p-10 md:p-16">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h3 className="text-3xl font-black text-white mb-6">AI BUSINESS MASTERY</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                The structured path to turn AI into a real, sellable offer. Join through my link and get exclusive bonuses designed to accelerate your start.
              </p>
              <a 
                href="https://bit.ly/4bwKlmT"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-10 py-5 rounded-full bg-cyan-500 text-slate-950 font-black text-xl hover:bg-cyan-400 transition-all shadow-lg active:scale-95 inline-block text-center"
              >
                JOIN THE CHALLENGE
              </a>
            </div>
            <div className="w-full md:w-72 aspect-square rounded-3xl bg-slate-900 border border-white/10 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent"></div>
              <img 
                src="https://i.ibb.co/0y2wmX81/IMG-4856.png" 
                alt="AI Business Mastery Mockup" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Bonuses = () => (
  <section className="py-24 bg-slate-950">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">EXCLUSIVE BONUSES</h2>
        <p className="text-slate-400">When you join through my link today</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "AI Income Roadmap for Beginners",
            desc: "To give you a clear starting point.",
            icon: TrendingUp,
            image: "https://i.ibb.co/8DTnKHpW/IMG-5048.jpg"
          },
          {
            title: "Beginner AI Business Starter Guide",
            desc: "To help you understand the basics fast.",
            icon: BrainCircuit,
            image: "https://i.ibb.co/btf08kQ/IMG-5050.jpg"
          },
          {
            title: "20 AI Prompts for Small Business Owners",
            desc: "To help you start using AI immediately.",
            icon: MessageSquare,
            image: "https://i.ibb.co/tTJLVMtP/IMG-5049.jpg"
          }
        ].map((bonus, i) => (
          <div key={i} className="p-8 rounded-3xl bg-slate-900 border border-cyan-500/10 hover:border-cyan-500/30 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <bonus.icon className="w-6 h-6 text-cyan-400" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">{bonus.title}</h4>
            {bonus.image && (
              <div className="mb-4 rounded-2xl overflow-hidden border border-white/10">
                <img 
                  src={bonus.image} 
                  alt={bonus.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
            <p className="text-slate-400 text-sm leading-relaxed">{bonus.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-slate-950 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
          What Our <span className="text-cyan-400">Students Say</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">Real results from people who stopped learning and started building.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            quote: "The most valuable training I bought with my money in 2025.",
            author: "Elizabeth",
            role: "Student"
          },
          {
            quote: "I got a $1,500 retainer gig.",
            author: "Joshua",
            role: "AI Strategist"
          },
          {
            quote: "AI Mastery is one of the best investments I made this January.",
            author: "Aminat",
            role: "Business Owner"
          },
          {
            quote: "I have never regretted enrolling because it keeps adding value to me.",
            author: "Elizabeth",
            role: "Digital Freedom Coach"
          }
        ].map((t, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-3xl bg-slate-900 border border-cyan-500/10 hover:border-cyan-500/30 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Zap key={i} className="w-3 h-3 text-cyan-400 fill-cyan-400" />
                ))}
              </div>
              <p className="text-slate-200 text-lg font-medium leading-relaxed italic mb-6">
                "{t.quote}"
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                {t.author[0]}
              </div>
              <div>
                <p className="text-white font-bold text-sm">{t.author}</p>
                <p className="text-cyan-400/60 text-[10px] uppercase tracking-widest font-bold">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const PriceSection = () => (
  <section className="py-24 bg-slate-900/50 border-y border-white/5">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
        <TrendingUp className="w-4 h-4 text-cyan-400" />
        <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">LIMITED TIME OFFER</span>
      </div>
      <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
        INVESTMENT: <span className="text-cyan-400">₦50,000</span>
      </h2>
      <p className="text-xl md:text-2xl text-slate-400 font-medium">
        One-time payment. Lifetime access.
      </p>
    </div>
  </section>
);

const DecisionCTA = () => (
  <section className="py-24 bg-slate-950 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#06b6d410_0%,transparent_70%)]"></div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase">THE CHOICE IS SIMPLE.</h2>
      
      <div className="space-y-6 mb-16">
        <p className="text-2xl md:text-3xl text-slate-300 font-medium">
          72 hours will pass anyway.
        </p>
        <p className="text-3xl md:text-4xl font-black text-white leading-tight">
          The real question is: <br />
          <span className="text-cyan-400">what will you have to show for it?</span>
        </p>
      </div>

      <div className="p-10 md:p-16 rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-cyan-500/20 mb-12">
        <h3 className="text-3xl md:text-5xl font-black text-white mb-4">₦50,000</h3>
        <p className="text-slate-400 text-lg mb-10">One-time payment. Lifetime access.</p>
        
        <a 
          href="https://bit.ly/4bwKlmT"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto px-12 py-6 rounded-full bg-cyan-500 text-slate-950 font-black text-2xl hover:bg-cyan-400 transition-all shadow-[0_0_50px_rgba(6,182,212,0.4)] active:scale-95 inline-block uppercase tracking-tight"
        >
          JOIN AI BUSINESS MASTERY
        </a>
      </div>

      <div className="flex items-center justify-center gap-2 text-slate-400">
        <MessageSquare className="w-5 h-5 text-cyan-400" />
        <p className="text-sm font-medium">Send me a message after joining to receive your bonus pack.</p>
      </div>
    </div>
  </section>
);

const SignatureClose = () => (
  <footer className="py-24 bg-slate-950 border-t border-white/5">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="mb-12">
        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-2 border-cyan-500/30 shadow-xl shadow-cyan-500/20">
          <img 
            src="https://i.ibb.co/KxMmSD7c/d6a1c4c1-85c8-48a6-82ca-485dde4c9647.jpg" 
            alt="Shaddai Nathaniel" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <h4 className="text-xl font-bold text-white">Shaddai Nathaniel <span className="text-cyan-400 font-medium">(also known as Ai Mama)</span></h4>
      </div>
      
      <div className="space-y-6 text-slate-400 text-lg leading-relaxed italic">
        <p>
          "I know how frustrating it is to see opportunity everywhere and still not know how to make it practical for yourself. That gap can make you feel behind."
        </p>
        <p className="text-white not-italic font-bold">
          But sometimes the real breakthrough is not more information. It is one clear process. If that is what you need, this is worth your attention.
        </p>
      </div>
      
      <div className="mt-20 pt-10 border-t border-white/5 text-slate-600 text-xs uppercase tracking-widest">
        &copy; {new Date().getFullYear()} AI Business Mastery. All rights reserved.
      </div>
    </div>
  </footer>
);

const SocialProof = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const notifications = [
    { name: "Michael C.", action: "just purchased AI Business Mastery", location: "Lagos, Nigeria", time: "just now" },
    { name: "Joshua A.", action: "just joined the challenge", location: "Abuja, Nigeria", time: "2 mins ago" },
    { name: "Elizabeth O.", action: "requested access", location: "Port Harcourt, Nigeria", time: "5 mins ago" },
    { name: "Aminat M.", action: "joined the waitlist", location: "Ibadan, Nigeria", time: "7 mins ago" },
    { name: "David K.", action: "just purchased AI Business Mastery", location: "Nairobi, Kenya", time: "just now" },
    { name: "Sarah L.", action: "just joined the challenge", location: "Accra, Ghana", time: "1 min ago" },
    { name: "Samuel T.", action: "requested access", location: "Kumasi, Ghana", time: "4 mins ago" },
    { name: "Blessing E.", action: "joined the waitlist", location: "Enugu, Nigeria", time: "10 mins ago" },
    { name: "Chidi O.", action: "just purchased AI Business Mastery", location: "Lagos, Nigeria", time: "just now" },
    { name: "Favour I.", action: "just joined the challenge", location: "Benin City, Nigeria", time: "3 mins ago" }
  ];

  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    const cycle = () => {
      setIsVisible(true);
      timeoutId = setTimeout(() => {
        setIsVisible(false);
        // Change index after it fades out
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % notifications.length);
        }, 1000);
      }, 5000); // Stay for 5s
    };

    // Initial show after 3s
    const startTimeout = setTimeout(cycle, 3000);

    // Repeat every 12s
    intervalId = setInterval(cycle, 12000);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [notifications.length]);

  const current = notifications[currentIndex];

  return (
    <div className="fixed bottom-6 left-4 md:bottom-8 md:left-8 z-[100] pointer-events-none w-[calc(100%-2rem)] md:w-auto max-w-[280px] sm:max-w-sm">
      <motion.div
        initial={{ opacity: 0, x: -20, scale: 0.95 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          x: isVisible ? 0 : -20, 
          scale: isVisible ? 1 : 0.95 
        }}
        transition={{ 
          duration: 0.6, 
          ease: [0.16, 1, 0.3, 1]
        }}
        className="bg-slate-950/90 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-4 shadow-[0_8px_32px_rgba(6,182,212,0.15)] flex items-center gap-4"
      >
        <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20">
          <CheckCircle2 className="w-5 h-5 text-green-400" />
        </div>
        <div className="flex flex-col min-w-0">
          <p className="text-white font-bold text-sm truncate leading-tight">
            {current.name}
          </p>
          <p className="text-cyan-400 text-[11px] font-medium leading-tight mt-0.5">
            {current.action}
          </p>
          <p className="text-slate-500 text-[10px] mt-1.5 font-medium">
            {current.location} • {current.time}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main>
        <Hero />
        <WhatIsAI />
        <StorySection />
        <JustLikeYou />
        <BreakingPoint />
        <Discovery />
        <Transformation />
        <Results />
        <Testimonials />
        <ReaderParallel />
        <Recommendation />
        <Bonuses />
        <PriceSection />
        <DecisionCTA />
        <SignatureClose />
        <SocialProof />
      </main>
    </div>
  );
}
