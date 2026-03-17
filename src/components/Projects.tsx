import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Mic, Bot, MessageSquare, FileText, Sparkles } from "lucide-react";

const projects = [
  {
    title: "AI Voice Calling Agent",
    subtitle: "AI-Powered Sales Automation",
    description:
      "Browser-based AI cold-calling agent that initiates calls, converses with prospects using AI, generates summaries, and categorizes leads automatically.",
    features: ["AI voice conversation", "Automated call summaries", "Lead categorization", "Follow-up scheduling", "SIP integration"],
    tech: ["React", "OpenAI", "WebSockets", "Node.js"],
    icon: Mic,
    gradient: "from-blue-500/20 to-indigo-500/20",
    iconBg: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    badge: "Featured",
  },
  {
    title: "AI Assistant for Content Editing",
    subtitle: "Intelligent Content Platform",
    description:
      "Built-in AI assistant integrated inside a content editor that helps users generate, modify, and enhance content directly within the interface.",
    features: ["AI-powered suggestions", "Markdown rendering", "File upload support", "Smart suggestions", "Interactive chat UI"],
    tech: ["React", "TypeScript", "OpenAI", "Tailwind"],
    icon: Bot,
    gradient: "from-violet-500/20 to-purple-500/20",
    iconBg: "bg-violet-500/10 text-violet-500 border-violet-500/20",
    badge: "AI",
  },
  {
    title: "Voice Chatbot with Speech-to-Text",
    subtitle: "Conversational Data Processing",
    description:
      "Voice-enabled chatbot converting spoken user input into structured JSON data, categorizing contacts and product information automatically.",
    features: ["Speech-to-text processing", "JSON structured output", "AI conversation handling", "Real-time backend comm"],
    tech: ["React", "Web Speech API", "OpenAI", "Supabase"],
    icon: MessageSquare,
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconBg: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    badge: "Voice AI",
  },
  {
    title: "Advanced Content Editor",
    subtitle: "Modern Editor Framework",
    description:
      "Advanced content editing using modern editor frameworks including custom plugins, media handling, and structured content generation.",
    features: ["Custom editor plugins", "Media embedding", "Structured content", "AI-assisted generation"],
    tech: ["React", "TypeScript", "TipTap", "Next.js"],
    icon: FileText,
    gradient: "from-amber-500/20 to-orange-500/20",
    iconBg: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative glass-card-hover shine overflow-hidden"
    >
      {/* Top gradient accent */}
      <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="p-7 md:p-8 lg:p-9">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-xl border ${project.iconBg}`}>
              <Icon size={20} strokeWidth={1.5} />
            </div>
            {project.badge && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                <Sparkles size={10} />
                {project.badge}
              </span>
            )}
          </div>
          <ArrowUpRight size={18} className="text-muted-foreground/30 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
        </div>

        {/* Content */}
        <div className="mb-6">
          <p className="mono text-muted-foreground/50 mb-2">{project.subtitle}</p>
          <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">{project.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="mono px-2.5 py-1.5 rounded-lg bg-secondary/80 text-secondary-foreground border border-border/50">
              {t}
            </span>
          ))}
        </div>

        {/* Features */}
        <div className="pt-6 border-t border-border/40">
          <p className="mono text-muted-foreground/40 mb-3">Key Features</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((f) => (
              <li key={f} className="text-[13px] text-muted-foreground flex items-center gap-2.5">
                <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-spacing border-t border-border/40">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20 max-w-2xl"
        >
          <span className="mono text-primary mb-5 block">Projects</span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-foreground tracking-tighter leading-[1.1] mb-5">
            Featured work
          </h2>
          <p className="text-muted-foreground text-[15px] leading-relaxed">
            A selection of AI-powered products and developer tools — each solving real problems with modern web technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
