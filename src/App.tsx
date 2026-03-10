import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { 
  Mail, 
  ExternalLink, 
  Award,
  ChevronRight,
  Download,
  Code2,
  Cpu,
  Palette,
  Terminal,
  ChevronLeft,
  Camera,
  Github
} from 'lucide-react';
import { SOCIAL_LINKS, SKILLS, CERTIFICATES, PICTURES, PROJECTS } from './constants';

const ROLES = [
  { text: "programmer", color: "text-emerald-400" },
  { text: "student", color: "text-blue-400" },
  { text: "ai enthusiast", color: "text-purple-400" },
  { text: "tech lover", color: "text-orange-400" },
  { text: "developer", color: "text-cyan-400" }
];

function Typewriter({ roles }: { roles: typeof ROLES }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex].text;
      
      if (isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles, typingSpeed]);

  return (
    <span className={`${roles[roleIndex].color} font-bold border-r-2 border-current pr-1 animate-pulse`}>
      {displayText}
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
    <div className="relative w-full aspect-[2/3] md:aspect-[16/10] lg:h-[800px] overflow-hidden rounded-[3rem] glass border-white/10 group bg-zinc-900/50 shadow-[0_0_50px_-12px_rgba(52,211,153,0.15)]">
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
          className="absolute inset-0 flex items-center justify-center p-2 md:p-4"
        >
          <img
            src={PICTURES[index].url}
            alt={PICTURES[index].caption}
            className="max-w-full max-h-full w-auto h-auto object-contain rounded-3xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent pointer-events-none" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-0 left-0 right-0 p-8 md:p-12 pointer-events-none"
          >
            <p className="text-white text-sm md:text-lg font-display font-medium max-w-2xl bg-zinc-950/40 backdrop-blur-md p-4 rounded-2xl border border-white/5 inline-block">
              {PICTURES[index].caption}
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button
          onClick={prev}
          className="p-3 rounded-full glass hover:bg-white/10 text-white transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          className="p-3 rounded-full glass hover:bg-white/10 text-white transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {PICTURES.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              i === index ? "bg-emerald-400 w-6" : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-emerald-500/30 relative">
      {/* Interactive Background - Digital Globe Video */}
      <div className="fixed inset-0 -z-20 overflow-hidden bg-zinc-950">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale brightness-50"
          referrerPolicy="no-referrer"
        >
          <source 
            src="https://cdn.pixabay.com/video/2021/04/12/70874-536966141_large.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-transparent to-zinc-950/80" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <nav className="fixed top-0 w-full z-50 glass border-b-0 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-display font-bold text-xl tracking-tighter"
          >
            ANANYA<span className="text-emerald-400">.</span>
          </motion.span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            {['About', 'Pictures', 'Projects', 'Skills', 'Certificates', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section id="about" className="mb-32 min-h-[60vh] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-[1.1] tracking-tight">
              Hi! I'm <span className="text-gradient">Ananya Bayable</span>
            </h1>
            <div className="text-2xl md:text-4xl font-display font-medium text-zinc-300 h-16 flex items-center gap-3">
              <span>I am a</span>
              <Typewriter roles={ROLES} />
            </div>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed mt-6">
              I'm a full-stack developer and designer focused on building clean, 
              performant, and user-centric applications. Passionate about turning 
              complex problems into simple, beautiful interfaces.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://lavender-working-anteater-929.mypinata.cloud/ipfs/bafkreiga3ah5gjnf6m4ztu4eggwez2g3cj3bqahk6wmksolq24rs5ue6ee"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 glass hover:bg-white/10 text-white font-semibold rounded-full transition-all flex items-center gap-2"
              >
                Download Resume
                <Download className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-16 flex gap-6"
          >
            {SOCIAL_LINKS.map((social) => (
              <motion.a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 glass rounded-xl hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
                title={social.name}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </section>

        {/* Pictures Section */}
        <section id="pictures" className="mb-40">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold flex items-center gap-4">
              <Camera className="w-10 h-10 text-emerald-400" />
              Moments
            </h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <Slideshow />
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-40">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-display font-bold">Featured Projects</h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="glass overflow-hidden rounded-[2rem] h-full flex flex-col hover:border-emerald-500/30 transition-all duration-500">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <div className="flex gap-3">
                        {project.github && (
                          <a 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full glass hover:bg-white/20 text-white transition-all"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {project.link && (
                          <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full glass hover:bg-white/20 text-white transition-all"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-display font-bold">Abilities</h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Frontend', icon: Code2, color: 'text-blue-400' },
              { title: 'Backend', icon: Terminal, color: 'text-emerald-400' },
              { title: 'Design', icon: Palette, color: 'text-purple-400' },
              { title: 'Tools', icon: Cpu, color: 'text-orange-400' }
            ].map((cat) => (
              <motion.div 
                key={cat.title}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl"
              >
                <div className={`p-3 rounded-xl bg-white/5 w-fit mb-4 ${cat.color}`}>
                  <cat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-4">{cat.title}</h3>
                <div className="space-y-3">
                  {SKILLS.filter(s => s.category === cat.title).map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-zinc-400">{skill.name}</span>
                        <span className="text-zinc-500">{skill.level}%</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className={`h-full bg-current ${cat.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-display font-bold">Certifications</h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CERTIFICATES.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="glass p-8 rounded-3xl h-full flex flex-col hover:border-emerald-500/30 transition-all duration-500">
                  <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-emerald-400/60 mb-2 uppercase tracking-wider">{cert.date}</span>
                  <h3 className="text-xl font-display font-bold mb-3 group-hover:text-emerald-400 transition-colors">{cert.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                    {cert.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs font-medium text-zinc-500">{cert.issuer}</span>
                    <a 
                      href={cert.link} 
                      className="p-2 rounded-full hover:bg-white/5 text-zinc-400 hover:text-white transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <div className="glass p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Mail className="w-64 h-64 -rotate-12" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Let's build something <br /> extraordinary together.</h2>
            <p className="text-zinc-400 mb-10 max-w-xl mx-auto">
              Currently looking for new opportunities and collaborations. 
              Whether you have a question or just want to say hi, my inbox is always open.
            </p>
            <div className="flex justify-center gap-6">
              {SOCIAL_LINKS.map((social, idx) => (
                <motion.a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 glass rounded-2xl hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-500">
        <p>© 2026 Ananya Bayable's Portfolio Site. Built with React & Tailwind.</p>
        <div className="flex gap-8">
          {SOCIAL_LINKS.map(social => (
            <a 
              key={social.name} 
              href={social.url} 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {social.name}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
