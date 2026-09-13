import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Search, 
  Globe, 
  Sparkles, 
  Code2, 
  X,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { PROJECTS, Project, SOCIAL_LINKS } from '../constants';

interface ProjectsPageProps {
  onBack: () => void;
}

export default function ProjectsPage({ onBack }: ProjectsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  // Extract unique tags
  const allTags = ['All', ...Array.from(new Set(PROJECTS.flatMap(p => p.tags)))];

  const filteredProjects = PROJECTS.filter(project => {
    const matchesTag = selectedTag === 'All' || project.tags.includes(selectedTag);
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (project.websiteName && project.websiteName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTag && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-brutal-white selection:bg-neon-pink selection:text-white grid-bg pb-24">
      {/* Top sticky bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur brutal-border-b px-4 lg:px-12 py-4 flex items-center justify-between">
        <button
          onClick={onBack}
          className="brutal-border-sm bg-neon-yellow px-4 py-2 font-display text-sm lg:text-base uppercase flex items-center gap-2 hover:bg-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 lg:w-5 lg:h-5" />
          <span>Back to Portfolio</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="font-mono text-xs lg:text-sm uppercase bg-brutal-black text-white px-3 py-1 brutal-border-sm">
            {PROJECTS.length} Products & Projects
          </span>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 lg:px-12 pt-12 lg:pt-16">
        {/* Header Title */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 bg-neon-pink text-white brutal-border-sm">
              <Layers className="w-6 h-6" />
            </span>
            <span className="font-mono text-sm lg:text-base uppercase tracking-widest text-brutal-black/70">
              Product & Project Directory
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-display uppercase leading-none tracking-tighter mb-6">
            Product <span className="text-neon-pink">Page</span>
          </h1>

          <p className="font-mono text-base lg:text-xl text-brutal-black/70 max-w-3xl">
            A comprehensive catalog of live products, educational platforms, blockchain applications, and software tools.
          </p>
        </div>

        {/* Featured Product Top Display Banner */}
        <div className="mb-14 brutal-border bg-white p-6 lg:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 w-full lg:w-auto">
              <div className="w-28 h-28 sm:w-36 sm:h-36 bg-[#030547] brutal-border p-3 flex items-center justify-center shrink-0">
                <img 
                  src="https://lavender-working-anteater-929.mypinata.cloud/ipfs/bafybeidxtfxjqetbbi235hrthpyk5tvukp77avwjtevlvbpho62dtvwmxu" 
                  alt="ተምህሮ / Temhiro Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="bg-neon-pink text-white font-mono text-xs uppercase px-2.5 py-0.5 font-bold">
                    Featured Product
                  </span>
                  <span className="font-mono text-xs text-zinc-600 flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5 text-neon-blue" />
                    temhiro-web.vercel.app
                  </span>
                </div>

                <h3 className="font-display text-3xl lg:text-4xl uppercase tracking-tight text-brutal-black">
                  ተምህሮ / Temhiro
                </h3>

                <p className="font-mono text-xs sm:text-sm text-zinc-700 mt-2 max-w-2xl leading-relaxed">
                  Interactive Product Showcase with auto-cycling transparent app screenshot slideshow, categorized curriculum feature cards, integrated legal suite (EULA, Privacy Policy, Terms of Service), and ultra-lightweight mobile-first delivery.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {['Education', 'Curriculum Showcase', 'Legal Compliance', 'Ultra-Fast'].map(tag => (
                    <span key={tag} className="font-mono text-[11px] uppercase bg-zinc-100 px-2 py-0.5 brutal-border-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href="https://temhiro-web.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn bg-neon-green text-center flex items-center justify-center gap-2 text-base px-6 py-3.5"
              >
                <span>Launch Live Site</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://temhiro-web.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase text-center py-2 px-3 bg-zinc-100 brutal-border-sm hover:bg-neon-yellow transition-colors"
              >
                temhiro-web.vercel.app
              </a>
            </div>
          </div>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-10 flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by project name, website, or tag..."
              className="w-full bg-white brutal-border px-4 py-3 pl-11 font-mono text-sm uppercase placeholder:normal-case placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-neon-pink"
            />
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-zinc-100 rounded font-mono text-xs"
              >
                Clear
              </button>
            )}
          </div>

          {/* Active count */}
          <span className="font-mono text-xs uppercase text-zinc-600">
            Showing {filteredProjects.length} of {PROJECTS.length} projects
          </span>
        </div>

        {/* Tag Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`font-mono text-xs uppercase px-3 py-1.5 brutal-border-sm transition-all whitespace-nowrap ${
                selectedTag === tag 
                  ? 'bg-brutal-black text-white shadow-none' 
                  : 'bg-white hover:bg-neon-yellow'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="brutal-card flex flex-col justify-between group hover:-translate-y-1 transition-all bg-white"
            >
              <div>
                {/* Image / Banner Container */}
                <div 
                  onClick={() => setActiveProjectModal(project)}
                  style={{ backgroundColor: project.bgColor || undefined }}
                  className="w-full aspect-video bg-zinc-100 brutal-border-sm overflow-hidden mb-6 relative cursor-pointer"
                >
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      style={{ backgroundColor: project.bgColor || undefined }}
                      className={`w-full h-full ${project.bgColor ? 'object-contain p-4' : 'object-cover'} group-hover:scale-105 transition-transform duration-500`}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-zinc-200">
                      <Code2 className="w-12 h-12 text-zinc-400" />
                    </div>
                  )}

                  {/* Optional Logo overlay */}
                  {project.logo && (
                    <div className="absolute top-3 left-3 w-10 h-10 bg-white brutal-border-sm p-1">
                      <img 
                        src={project.logo} 
                        alt={`${project.title} Logo`}
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-brutal-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white brutal-border-sm font-mono text-xs uppercase px-3 py-1 font-bold">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Website Name Badge */}
                {project.websiteName && (
                  <div className="flex items-center gap-1.5 mb-2 font-mono text-xs text-zinc-600">
                    <Globe className="w-3.5 h-3.5 text-neon-blue" />
                    <span className="font-bold truncate">{project.websiteName}</span>
                  </div>
                )}

                {/* Project Title */}
                <h3 
                  onClick={() => setActiveProjectModal(project)}
                  className="font-display text-2xl lg:text-3xl uppercase tracking-tight mb-3 cursor-pointer group-hover:text-neon-pink transition-colors line-clamp-2"
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-mono text-xs lg:text-sm text-brutal-black/75 mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="font-mono text-[10px] uppercase bg-zinc-100 px-2 py-0.5 brutal-border-sm shadow-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 pt-4 border-t border-zinc-200">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-neon-green text-brutal-black font-display text-sm uppercase py-2.5 px-3 brutal-border-sm flex items-center justify-center gap-2 hover:bg-brutal-black hover:text-white transition-colors"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-brutal-black font-display text-sm uppercase p-2.5 brutal-border-sm flex items-center justify-center hover:bg-neon-yellow transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}

                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="bg-white text-brutal-black font-mono text-xs uppercase px-3 py-2.5 brutal-border-sm hover:bg-zinc-100 transition-colors"
                  >
                    Info
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 brutal-border bg-white p-8">
            <Search className="w-12 h-12 mx-auto text-zinc-400 mb-4" />
            <h3 className="font-display text-2xl uppercase mb-2">No projects found</h3>
            <p className="font-mono text-sm text-zinc-600 mb-6">
              No projects matched "{searchQuery}". Try selecting another tag or clearing your search.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedTag('All'); }}
              className="brutal-border-sm bg-neon-yellow px-6 py-2 font-display uppercase"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Back Button */}
        <div className="mt-20 pt-10 border-t-2 border-brutal-black flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            onClick={onBack}
            className="brutal-btn bg-neon-yellow flex items-center gap-3"
          >
            <ArrowLeft className="w-5 h-5" />
            Return to Portfolio
          </button>

          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.slice(0, 4).map(social => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white brutal-border-sm hover:bg-neon-pink hover:text-white transition-colors"
                title={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeProjectModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brutal-black/70 backdrop-blur-sm flex items-center justify-center p-4 lg:p-10"
            onClick={() => setActiveProjectModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white brutal-border w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 lg:p-10 relative"
            >
              <button
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-6 right-6 p-2 bg-neon-yellow brutal-border-sm hover:bg-neon-pink hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Image */}
              {activeProjectModal.image && (
                <div className="aspect-video w-full brutal-border-sm overflow-hidden mb-6 bg-zinc-100">
                  <img
                    src={activeProjectModal.image}
                    alt={activeProjectModal.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              {/* Website Name */}
              {activeProjectModal.websiteName && (
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-4 h-4 text-neon-blue" />
                  <span className="font-mono text-sm uppercase font-bold text-zinc-700">
                    {activeProjectModal.websiteName}
                  </span>
                </div>
              )}

              {/* Title */}
              <h2 className="font-display text-3xl lg:text-5xl uppercase tracking-tight mb-4">
                {activeProjectModal.title}
              </h2>

              {/* Description */}
              <p className="font-mono text-sm lg:text-base text-brutal-black/80 mb-6 leading-relaxed">
                {activeProjectModal.description}
              </p>

              {/* Tags */}
              <div className="mb-8">
                <span className="font-mono text-xs uppercase text-zinc-500 block mb-2">Technologies</span>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.tags.map(tag => (
                    <span key={tag} className="font-mono text-xs uppercase bg-brutal-black text-white px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-zinc-200">
                {activeProjectModal.link && (
                  <a
                    href={activeProjectModal.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutal-btn bg-neon-green flex items-center gap-2"
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
                {activeProjectModal.github && (
                  <a
                    href={activeProjectModal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutal-btn bg-white flex items-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
