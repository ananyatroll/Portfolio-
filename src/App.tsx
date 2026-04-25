import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { 
  Mail, 
  ExternalLink, 
  Award,
  Download,
  Github,
  ArrowUpRight,
  Plus,
  Menu,
  X as CloseIcon,
  ChevronLeft,
  ChevronRight,
  Camera,
  Code2,
  Terminal,
  Palette,
  Cpu
} from 'lucide-react';
import { SOCIAL_LINKS, SKILLS, CERTIFICATES, PROJECTS, PICTURES } from './constants';

function EthiopianFlag() {
  return (
    <div className="flex items-center justify-center p-0.5 bg-white brutal-border-sm shadow-none">
      <img 
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIiJ6OHfH0Gte9F_33r3ppKOKoN0ESjRURapXSgSTodVsqwpeT3LCc24FaUgtCzhNJ0sBM72rvgIpiq68BkuQbLM_toXNfSBqIkfl5_m1jakSge2fh_7ctZqMATB5UyBHmO2QLOdlgCbk/s0-e90-rw/Flag_of_Ethiopia.gif" 
        alt="Ethiopia Flag" 
        className="w-10 h-auto"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const currentWord = words[index % words.length];
      const shouldDelete = isDeleting;
      
      setText(prev => shouldDelete 
        ? currentWord.substring(0, prev.length - 1)
        : currentWord.substring(0, prev.length + 1)
      );

      if (!shouldDelete && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (shouldDelete && text === '') {
        setIsDeleting(false);
        setIndex(prev => prev + 1);
        setSpeed(150);
      } else {
        setSpeed(shouldDelete ? 50 : 150);
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index, words, speed]);

  return (
    <span className="text-neon-pink min-h-[1.2em] inline-block">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}

function Slideshow() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % PICTURES.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + PICTURES.length) % PICTURES.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full aspect-[4/3] lg:aspect-[16/9] overflow-hidden brutal-border bg-white group mt-12 lg:mt-24">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0 flex items-center justify-center p-4 bg-white"
        >
          <img
            src={PICTURES[index].url}
            alt={PICTURES[index].caption}
            className="max-w-full max-h-full w-auto h-auto object-contain brutal-border-sm shadow-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 bg-neon-pink text-white px-4 py-2 brutal-border-sm font-mono text-sm">
            {index + 1} / {PICTURES.length}
          </div>
          <div className="absolute bottom-4 left-4 right-4 lg:bottom-8 lg:left-8 lg:right-8 bg-white brutal-border p-4 lg:p-6 max-w-xl">
             <p className="font-mono text-sm lg:text-lg uppercase tracking-tight text-brutal-black">
               {PICTURES[index].caption}
             </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
        <button
          onClick={prev}
          className="p-4 bg-neon-yellow brutal-border-sm pointer-events-auto hover:bg-white transition-colors"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="p-4 bg-neon-yellow brutal-border-sm pointer-events-auto hover:bg-white transition-colors"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

function Marquee({ text, color = 'bg-neon-green' }: { text: string; color?: string }) {
  return (
    <div className={`marquee ${color}`}>
      <div className="marquee-content gap-8 lg:gap-16">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="font-display text-4xl lg:text-7xl uppercase tracking-tighter text-brutal-black">
            {text} • {text} •
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionHeading({ title, subtitle, badge }: { title: string; subtitle?: string; badge?: string | number }) {
  return (
    <div className="mb-12 lg:mb-24">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-baseline gap-4 flex-wrap"
      >
        <span className="font-mono text-xl lg:text-3xl text-brutal-black opacity-40">/</span>
        <h2 className="text-6xl lg:text-9xl font-display uppercase leading-none tracking-tighter group-hover:skew-x-3 transition-transform duration-500">
          {title}
        </h2>
        {badge !== undefined && (
          <span className="bg-neon-pink text-white font-mono text-xl lg:text-4xl px-3 lg:px-4 py-1 brutal-border-sm ml-4 scale-75 lg:scale-100">
            {badge}
          </span>
        )}
      </motion.div>
      {subtitle && (
        <p className="font-mono text-lg lg:text-2xl mt-4 text-brutal-black/60 max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [selectedIssuer, setSelectedIssuer] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const rotateValue = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const issuers = Array.from(new Set(CERTIFICATES.map(c => c.issuer))).sort();
  const filteredCerts = selectedIssuer 
    ? CERTIFICATES.filter(c => c.issuer === selectedIssuer)
    : CERTIFICATES;

  return (
    <div className={`min-h-screen ${showSplash ? 'bg-brutal-black' : 'bg-brutal-white'} selection:bg-neon-pink selection:text-white grid-bg transition-colors duration-1000`} ref={containerRef}>
      <AnimatePresence mode="wait">
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-brutal-black flex items-center justify-center overflow-hidden"
          >
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "circOut" }}
              className="w-full h-full flex items-center justify-center p-0"
            >
              <video 
                src="https://lavender-working-anteater-929.mypinata.cloud/ipfs/bafkreihvjez7r5ti4uq53vibjr2bl7gxue5mn67o3jyosnpbdqxpaj2ucu" 
                autoPlay 
                muted 
                playsInline
                onEnded={() => setShowSplash(false)}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: showSplash ? 0 : 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className={showSplash ? 'invisible' : 'visible'}
      >
        {/* Navigation */}
        <nav className="fixed top-0 left-0 w-full z-50 p-6 lg:p-10 flex justify-between items-center pointer-events-none">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white brutal-border-sm px-4 lg:px-6 py-2 pointer-events-auto flex items-center gap-3"
        >
          <span className="font-display text-xl lg:text-2xl tracking-tighter uppercase font-bold">ANANYA . B</span>
          <EthiopianFlag />
        </motion.div>

        <div className="flex gap-4 pointer-events-auto">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-3 lg:p-4 bg-neon-yellow brutal-border-sm hover:rotate-3 transition-transform"
          >
            {isMenuOpen ? <CloseIcon className="w-5 h-5 lg:w-6 lg:h-6" /> : <Menu className="w-5 h-5 lg:w-6 lg:h-6" />}
          </button>
        </div>
      </nav>

      {/* Fullscreen Menu */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? { clipPath: 'circle(150% at 100% 0%)' } : { clipPath: 'circle(0% at 100% 0%)' }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-40 bg-brutal-black text-white flex flex-col justify-center p-10 lg:p-20 overflow-hidden"
      >
        <div className="flex flex-col gap-6 lg:gap-12">
          {['About', 'Moments', 'Work', 'Skills', 'Certs', 'Contact'].map((item, i) => (
            <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                initial={{ x: -50, opacity: 0 }}
                animate={isMenuOpen ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="font-display text-4xl lg:text-[10vw] uppercase leading-none tracking-tighter hover:text-neon-green transition-colors flex items-center gap-4 group"
            >
              <span className="font-mono text-2xl opacity-30 group-hover:opacity-100 italic transition-opacity">0{i+1}</span>
              {item}
            </motion.a>
          ))}
        </div>
      </motion.div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="about" className="min-h-screen flex flex-col justify-center px-6 lg:px-20 pt-32 pb-20 overflow-visible">
          <div className="relative">
            <motion.div
              initial={{ rotate: -5, scale: 0.9, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="absolute -top-32 -left-10 lg:-top-56 lg:-left-20 text-[18vw] font-display text-stroke opacity-30 select-none pointer-events-none z-0 whitespace-nowrap"
              style={{ WebkitTextStroke: '2px rgba(0,0,0,0.2)' }}
            >
              ANANYA BAYABLE
            </motion.div>

            <motion.h1 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative z-10 text-[14vw] lg:text-[11vw] font-display uppercase leading-[0.85] mb-8 lg:mb-12 tracking-tighter ml-8 lg:ml-20"
            >
              I BUILD <br />
              <span className="text-neon-pink">BOLD </span> <br />
              <span className="flex items-center gap-4">
                SYSTEMS
              </span>
            </motion.h1>

            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-end gap-10 mt-8 lg:mt-12">
               <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="max-w-xl bg-white brutal-border p-6 lg:p-8"
               >
                 <h2 className="font-display text-2xl lg:text-4xl mb-4 uppercase italic">I am a <Typewriter words={["Creative Developer", "UX/UI Designer", "System Architect", "Problem Solver", "AI Enthusiast", "Full Stack Engineer"]} /></h2>
                 <p className="text-lg lg:text-2xl font-mono leading-tight tracking-tight mb-8">
                   Creative Developer & Designer crafting high-impact digital experiences in Ethiopia.
                 </p>
                 <div className="flex gap-4">
                    <a 
                      href="https://lavender-working-anteater-929.mypinata.cloud/ipfs/bafkreiga3ah5gjnf6m4ztu4eggwez2g3cj3bqahk6wmksolq24rs5ue6ee"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brutal-btn"
                    >
                      Resume
                    </a>
                 </div>
               </motion.div>

               <div className="flex gap-4">
                 {SOCIAL_LINKS.map((social) => (
                   <motion.a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, rotate: 5 }}
                    className="w-16 h-16 bg-white brutal-border-sm flex items-center justify-center"
                   >
                     <social.icon className="w-6 h-6" />
                   </motion.a>
                 ))}
               </div>
            </div>
          </div>
        </section>

        {/* Moments Section */}
        <section id="moments" className="py-24 lg:py-48 px-6 lg:px-20 bg-white">
          <SectionHeading title="Moments" subtitle="A visual journey through my experiences, milestones, and the things that inspire me." />
          <Slideshow />
        </section>

        <Marquee text="DESIGN IS CODE • CODE IS DESIGN" />

        {/* Work Section */}
        <section id="work" className="py-24 lg:py-48 px-6 lg:px-20">
          <SectionHeading title="Selected projects" subtitle="A collection of digital tools, platforms, and experiences built with purpose." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index % 2 * 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="brutal-card group-hover:scale-[1.02] transition-transform duration-500 !p-0 overflow-hidden aspect-[4/3] relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />

                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-x-10 group-hover:translate-x-0 duration-300">
                    {project.github && <a href={project.github} className="p-4 bg-white brutal-border-sm hover:bg-neon-yellow transition-colors"><Github className="w-8 h-8" /></a>}
                    {project.link && <a href={project.link} className="p-4 bg-neon-blue brutal-border-sm hover:bg-white transition-colors"><ExternalLink className="w-8 h-8" /></a>}
                  </div>
                </div>
                <div className="mt-8">
                  <div>
                    <div className="flex gap-2 mb-3">
                        {project.tags.map(tag => (
                            <span key={tag} className="font-mono text-xs uppercase bg-brutal-black text-white px-2 py-0.5">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h3 className="text-4xl lg:text-6xl font-display uppercase tracking-tighter mb-2 underline underline-offset-8 decoration-4 decoration-neon-pink">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <Marquee text="EXPERIENCE IN MULTIPLE PLANES" color="bg-neon-pink" />

        {/* Skills Section */}
        <section id="skills" className="py-24 lg:py-48 px-6 lg:px-20 bg-brutal-black text-white">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-baseline gap-4 mb-20"
          >
            <span className="font-mono text-xl lg:text-3xl opacity-40">/</span>
            <h2 className="text-6xl lg:text-9xl font-display uppercase leading-none tracking-tighter truncate">
              Abilities
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="brutal-border bg-zinc-900 p-8 flex flex-col justify-between hover:bg-neon-green hover:text-brutal-black transition-colors"
                style={{
                  transform: `rotate(${Math.sin(index) * 2}deg)`
                }}
              >
                <span className="font-display text-4xl uppercase leading-none mb-6">
                  {skill.name}
                </span>
                <div className="flex justify-between items-end">
                   <span className="font-mono text-sm opacity-50 uppercase">{skill.category}</span>
                   <span className="font-display text-2xl">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certs Section */}
        <section id="certs" className="py-24 lg:py-48 px-6 lg:px-20">
          <SectionHeading 
            title="Verified knowledge" 
            subtitle="Constant learning is the only constant. Certified across multiple domains." 
            badge={CERTIFICATES.length}
          />

          <div className="flex flex-wrap gap-4 mb-16">
            <button
              onClick={() => setSelectedIssuer(null)}
              className={`px-6 py-3 font-display text-xl uppercase brutal-border-sm transition-all ${
                selectedIssuer === null ? 'bg-neon-green' : 'bg-white hover:bg-zinc-100'
              }`}
            >
              All ({CERTIFICATES.length})
            </button>
            {issuers.map(issuer => (
              <button
                key={issuer}
                onClick={() => setSelectedIssuer(issuer)}
                className={`px-6 py-3 font-display text-xl uppercase brutal-border-sm transition-all ${
                  selectedIssuer === issuer ? 'bg-neon-green' : 'bg-white hover:bg-zinc-100'
                }`}
              >
                {issuer} ({CERTIFICATES.filter(c => c.issuer === issuer).length})
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredCerts.map((cert, index) => (
                <motion.a
                  key={cert.title}
                  layout
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="block group brutal-border bg-white p-8 hover:bg-neon-blue hover:translate-x-4 transition-all"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex gap-8 items-center">
                      <span className="font-mono text-3xl opacity-20 group-hover:opacity-100 transition-opacity">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                          <h3 className="text-3xl lg:text-5xl font-display uppercase tracking-tighter leading-none mb-2">
                            {cert.title}
                          </h3>
                          <p className="font-mono opacity-60 uppercase text-sm">Issued by {cert.issuer} • {cert.date}</p>
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-brutal-black text-white flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-brutal-black transition-colors">
                        <Award className="w-8 h-8" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 lg:py-48 px-6 lg:px-20 bg-neon-pink">
          <SectionHeading title="Let's talk" subtitle="Have a project in mind or just want to chat? Reach out through any of these portals." />

          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                {SOCIAL_LINKS.map(social => (
                  <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutal-card bg-white flex flex-col items-center justify-center gap-4 hover:bg-neon-yellow transition-colors"
                  >
                    <social.icon className="w-12 h-12" />
                    <span className="font-display text-2xl uppercase tracking-tighter">{social.name}</span>
                  </a>
                ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 lg:py-24 px-6 lg:px-20 bg-brutal-black text-white overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="relative">
            <h2 className="text-[10vw] lg:text-[8vw] font-display uppercase leading-[0.6] select-none text-stroke -ml-2 lg:-ml-6 mb-4">ANANYA.B</h2>
            <div className="flex items-center gap-4">
              <span className="w-8 h-8 bg-neon-pink"></span>
              <p className="font-mono text-lg uppercase tracking-widest opacity-80">Digital Architect</p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-6">
            <p className="font-mono text-sm opacity-50">© 2026 ANANYA BAYABLE. ALL RIGHTS RESERVED.</p>
            <motion.a 
              href="#about"
              whileHover={{ y: -10 }}
              className="w-16 h-16 bg-neon-green text-brutal-black brutal-border flex items-center justify-center shrink-0 cursor-pointer"
            >
               <ArrowUpRight className="-rotate-90 w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </footer>
    </motion.div>
  </div>
);
}
