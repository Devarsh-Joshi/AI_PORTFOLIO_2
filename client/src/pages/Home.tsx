import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const projects = [
  { 
    id: "01", 
    title: "NEURAL.EYE", 
    type: "COMPUTER VISION", 
    desc: "Real-time cortical mapping interface. Optimized for low-latency edge processing using custom CUDA kernels.", 
    tech: ["PYTORCH", "CUDA", "WASM", "OPENCV"],
    metrics: { accuracy: "99.2%", latency: "4.2ms", throughput: "120fps" }
  },
  { 
    id: "02", 
    title: "SENTIENT.CORE", 
    type: "AGI RESEARCH", 
    desc: "Recursive self-improving heuristic engine. Exploring the boundaries of symbolic reasoning and neural-symbolic integration.", 
    tech: ["LLM", "RAG", "PYTHON", "LANGCHAIN"],
    metrics: { params: "175B", context: "128K", reasoning_depth: "94%" }
  },
  { 
    id: "03", 
    title: "GHOST.SHELL", 
    type: "CYBER SECURITY", 
    desc: "AI-driven neural firewall protocol. Predictive threat detection in high-density networks using unsupervised anomaly detection.", 
    tech: ["RUST", "TENSORFLOW", "ZKP", "KAFKA"],
    metrics: { threat_detection: "99.9%", false_positive: "0.01%", response: "0.8ms" }
  },
  { 
    id: "04", 
    title: "AETHER.NET", 
    type: "DISTRIBUTED AI", 
    desc: "Decentralized training protocol for federated learning across heterogeneous edge devices with privacy-preserving encryption.", 
    tech: ["GO", "FEDERATED", "P2P", "PROTOBUF"],
    metrics: { nodes: "50K+", data_privacy: "AES-GCM", bandwidth_opt: "65%" }
  },
];

const experience = [
  {
    period: "2024 - PRESENT",
    role: "SR. AI ARCHITECT",
    company: "SYNAPSE LABS",
    desc: "Leading the development of multi-modal foundation models for industrial automation."
  },
  {
    period: "2022 - 2024",
    role: "ML ENGINEER",
    company: "NEURAL GRID",
    desc: "Designed and deployed large-scale recommendation systems processing 1B+ daily events."
  },
  {
    period: "2020 - 2022",
    role: "AI RESEARCHER",
    company: "QUANTUM LOGIC",
    desc: "Published 5+ papers on self-supervised learning and reinforcement learning efficiency."
  }
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState("");
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Secret key combo: 'v' + 'o' + 'i' + 'd'
      const sequence = "void";
      let input = "";
      
      const checkKey = (key: string) => {
        if (key.toLowerCase() === 'v' && !window.hasOwnProperty('_v')) {
          (window as any)._v = true;
          setTimeout(() => delete (window as any)._v, 2000);
        } else if (key.toLowerCase() === 'o' && (window as any)._v) {
          (window as any)._o = true;
        } else if (key.toLowerCase() === 'i' && (window as any)._o) {
          (window as any)._i = true;
        } else if (key.toLowerCase() === 'd' && (window as any)._i) {
          setShowEasterEgg(true);
          setTimeout(() => setShowEasterEgg(false), 5000);
          delete (window as any)._v;
          delete (window as any)._o;
          delete (window as any)._i;
        }
      };
      checkKey(e.key);
    };
    window.addEventListener("keydown", handleKeyDown);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    }, 1000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-[1000vh] bg-[#020617] text-white selection:bg-primary selection:text-black font-sans">
      {/* EASTER EGG OVERLAY */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div 
            initial={{ opacity: 0, scale: 2, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 10 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-cyan-400 mix-blend-difference pointer-events-none"
          >
            <div className="text-center font-display font-black text-[15vw] leading-none tracking-tighter text-black uppercase italic">
              NEURAL_OVERLOAD
              <div className="flex justify-center gap-10 mt-10">
                {[...Array(5)].map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={{ height: [20, 100, 20] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                    className="w-4 bg-black"
                  />
                ))}
              </div>
              <p className="font-mono text-sm tracking-[1.5em] mt-10">SYNC_COHERENCE: 0.00%</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HUD Layer */}
      <div className="fixed inset-0 pointer-events-none z-50 border-[1px] border-white/5 m-4 md:m-8" />
      
      {/* Stats Display */}
      <div className="fixed top-8 left-8 md:top-12 md:left-12 z-50 mix-blend-difference pointer-events-none font-mono text-[9px] tracking-widest text-cyan-400/60 space-y-2 hidden md:block">
        <p className="flex items-center gap-2">
          <span className="w-1 h-1 bg-cyan-500 rounded-full animate-pulse" /> 
          UPLINK: ACTIVE_ENCRYPTED
        </p>
        <p>TIME: {currentTime}</p>
        <p>COORDS: {mousePos.x}, {mousePos.y}</p>
        <p>NEURAL_LOAD: {(scrollYProgress.get() * 100).toFixed(2)}%</p>
      </div>

      <motion.div 
        className="fixed top-0 left-0 right-0 h-[1px] bg-cyan-400 z-[60] origin-left shadow-[0_0_10px_rgba(34,211,238,0.5)]" 
        style={{ scaleX }} 
      />

      <div className="fixed inset-0 noise z-40 opacity-10" />
      <div className="fixed inset-0 scanline z-40" />

      {/* HERO SECTION */}
      <section className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/src/assets/hardware.png" className="w-full h-full object-cover opacity-20 grayscale brightness-75" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617]" />
        </div>

        <div className="relative z-20 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 font-mono text-[10px] tracking-[1.2em] text-cyan-400/40 uppercase"
          >
            Initializing_Neural_Interface
          </motion.div>
          
          <motion.div
            style={{ 
              y: useTransform(scrollYProgress, [0, 0.2], [0, -100]),
              opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0])
            }}
          >
            <h1 className="text-[12vw] md:text-[10vw] font-display font-black leading-none tracking-tighter text-white uppercase italic">
              AI_<span className="text-cyan-400 text-glow">CORE</span>
            </h1>
          </motion.div>

          <motion.div
            style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
            className="max-w-2xl mx-auto mt-8"
          >
            <p className="text-cyan-100/40 font-mono text-xs uppercase tracking-[0.3em] leading-relaxed">
              Synthesizing autonomous agents and distributed intelligence protocols. Pushing the boundaries of silicon consciousness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="relative h-screen flex flex-col justify-center px-6 md:px-20 bg-gradient-to-b from-transparent to-black/20">
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0.05, 0.1, 0.15], [0, 1, 0]) }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-5xl md:text-7xl font-display font-black text-white italic tracking-tighter uppercase">Protocol_</h2>
            <div className="h-px flex-1 bg-cyan-400/20" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl font-light text-cyan-100/80 leading-tight lowercase italic">
                I am a designer of cognitive architectures, bridging the gap between raw data and actionable intelligence.
              </p>
              <div className="h-px w-20 bg-cyan-400" />
            </div>
            <div className="space-y-6 text-cyan-100/40 font-mono text-sm uppercase tracking-widest leading-relaxed">
              <p>Specialized in high-density neural networks and low-latency computer vision protocols. My work focuses on the convergence of machine reasoning and human intuition.</p>
              <p>Constantly optimizing for emergent complexity in distributed systems.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="relative h-[150vh] flex flex-col justify-center px-6 md:px-20">
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0.15, 0.25, 0.35], [0, 1, 0]) }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-5xl md:text-7xl font-display font-black text-white italic tracking-tighter uppercase">Chronicle_</h2>
            <div className="h-px flex-1 bg-cyan-400/20" />
          </div>
          
          <div className="space-y-12">
            {experience.map((exp, i) => (
              <div key={i} className="group relative pl-8 border-l border-cyan-400/10 hover:border-cyan-400/40 transition-colors">
                <div className="absolute left-0 top-0 w-2 h-2 bg-cyan-400 -translate-x-1/2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="font-mono text-[10px] text-cyan-400/40 mb-2 tracking-[0.3em]">{exp.period}</p>
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-3">
                  <h3 className="text-2xl font-bold text-white tracking-tight">{exp.role}</h3>
                  <span className="font-mono text-xs text-cyan-400/60">@ {exp.company}</span>
                </div>
                <p className="text-cyan-100/40 font-light leading-relaxed max-w-2xl">{exp.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* HORIZONTAL PROJECTS */}
      <section className="relative h-[500vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-[#020617]">
          <motion.div 
            style={{ x: useTransform(scrollYProgress, [0.35, 0.85], ["0%", "-80%"]) }}
            className="flex gap-[15vw] px-[10vw]"
          >
            {projects.map((p) => (
              <div key={p.id} className="w-[85vw] shrink-0 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-cyan-400 text-xl tracking-tighter">[{p.id}]</span>
                  <div className="h-px flex-1 bg-cyan-400/10" />
                </div>
                <h2 className="text-[10vw] font-display font-black text-white leading-none mb-8 tracking-tighter uppercase italic">
                  {p.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                  <div>
                    <p className="text-xl md:text-2xl text-cyan-100/40 font-light leading-relaxed mb-8">
                      {p.desc}
                    </p>
                    <div className="grid grid-cols-3 gap-4 border-t border-cyan-400/10 pt-8 font-mono text-[9px] text-cyan-400/40 uppercase tracking-widest">
                      {Object.entries(p.metrics).map(([key, val]) => (
                        <div key={key}>
                          <p className="mb-1 text-[7px] opacity-50">{key.replace('_', ' ')}</p>
                          <p className="text-cyan-400">{val}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-end gap-6">
                    <div className="flex flex-wrap gap-3">
                      {p.tech.map(t => (
                        <span key={t} className="px-4 py-1.5 border border-cyan-400/20 font-mono text-[10px] text-cyan-400/60 uppercase tracking-widest bg-cyan-400/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="w-[85vw] shrink-0 flex items-center justify-center">
              <div className="text-cyan-400/5 text-[20vw] font-display font-black select-none tracking-tighter">EOF_</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DATA STREAM SECTION */}
      <section className="relative h-screen flex items-center justify-center pointer-events-none">
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0.85, 0.9, 0.95], [0, 1, 0]) }}
          className="container px-10 flex flex-col md:flex-row justify-between font-mono text-[9px] text-cyan-400/20 uppercase gap-10"
        >
          <div className="space-y-2">
            <p className="text-cyan-400/40 underline">SYSTEM_LOGS</p>
            {[...Array(15)].map((_, i) => (
              <p key={i}>DEBUG: 0x{Math.random().toString(16).slice(2, 8).toUpperCase()} - THREAD_ALIVE</p>
            ))}
          </div>
          <div className="text-right space-y-4">
            <p className="text-cyan-400/40 underline">NEURAL_DENSITY</p>
            <div className="flex gap-1 justify-end h-20 items-end">
              {[...Array(12)].map((_, i) => (
                <motion.div 
                  key={i}
                  animate={{ height: [10, 50, 10] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                  className="w-1 bg-cyan-400/20"
                />
              ))}
            </div>
            <p>Throughput: 14.2 GB/s</p>
          </div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section className="relative h-screen flex items-center justify-center bg-cyan-400 text-black px-6 md:px-12 overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <div className="text-[30vw] font-display font-black leading-none tracking-tighter -mr-20 uppercase italic">CONNECT</div>
        </div>

        <div className="max-w-5xl w-full relative z-10">
          <div className="font-mono text-[10px] mb-16 flex justify-between items-center border-b border-black/20 pb-4 tracking-[0.4em] uppercase">
            <span>Transmission_Ready</span>
            <span>Live_Uplink</span>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12 md:space-y-20"
          >
            <h3 className="text-[12vw] md:text-[10vw] font-display font-black leading-[0.8] tracking-tighter uppercase italic">
              Establish <br />
              <span className="ml-[10vw]">Contact_</span>
            </h3>
            <div className="flex flex-wrap gap-8 md:gap-16 text-2xl md:text-4xl font-mono font-bold tracking-tighter uppercase">
              <a href="mailto:void@ai.core" className="hover:underline decoration-4 underline-offset-8">Email</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:underline decoration-4 underline-offset-8">Github</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline decoration-4 underline-offset-8">Linkedin</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-50 pointer-events-none font-mono text-[8px] text-cyan-400/20 uppercase tracking-[0.5em]">
        Neural_Link_v4.2 // ©2026
      </footer>
    </div>
  );
}
