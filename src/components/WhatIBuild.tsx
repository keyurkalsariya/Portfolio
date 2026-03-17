import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Mic, MessageSquareText, Layers } from "lucide-react";

const expertise = [
  {
    icon: Brain,
    title: "AI-Powered Web Apps",
    description: "Building intelligent applications that leverage OpenAI APIs, machine learning models, and smart automation to create exceptional user experiences.",
    gradient: "from-blue-500/10 to-indigo-500/10",
    borderGlow: "group-hover:shadow-blue-500/10",
  },
  {
    icon: Mic,
    title: "Voice AI Systems",
    description: "Developing voice-enabled applications with speech-to-text processing, AI conversation handling, and real-time voice interaction capabilities.",
    gradient: "from-violet-500/10 to-purple-500/10",
    borderGlow: "group-hover:shadow-violet-500/10",
  },
  {
    icon: MessageSquareText,
    title: "Conversational Interfaces",
    description: "Creating intelligent chatbots and conversational UIs that understand context, process natural language, and deliver structured outputs.",
    gradient: "from-emerald-500/10 to-teal-500/10",
    borderGlow: "group-hover:shadow-emerald-500/10",
  },
  {
    icon: Layers,
    title: "Scalable React Frontends",
    description: "Architecting performant, maintainable React applications with modern patterns, TypeScript, and component-driven design systems.",
    gradient: "from-amber-500/10 to-orange-500/10",
    borderGlow: "group-hover:shadow-amber-500/10",
  },
];

const WhatIBuild = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="expertise" className="section-spacing border-t border-border/40">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20 max-w-2xl"
        >
          <span className="mono text-primary mb-5 block">Expertise</span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-foreground tracking-tighter leading-[1.1] mb-5">
            What I build
          </h2>
          <p className="text-muted-foreground text-[15px] leading-relaxed">
            Specializing in the intersection of AI and modern web development — creating products that are both intelligent and beautifully crafted.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {expertise.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative glass-card-hover overflow-hidden`}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative p-7 md:p-9">
                  <div className="p-3.5 rounded-2xl bg-primary/[0.08] text-primary border border-primary/10 w-fit mb-6">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground tracking-tight mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIBuild;
