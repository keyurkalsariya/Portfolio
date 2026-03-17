import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, Briefcase } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const responsibilities = [
    "Building scalable React applications with complex state management and TypeScript",
    "Developing advanced UI components, design systems, and reusable component libraries",
    "Integrating AI features including chat interfaces, voice systems, and automation workflows",
    "Working with RESTful APIs, WebSockets, and real-time backend communication systems",
  ];

  return (
    <section id="experience" className="section-spacing border-t border-border/40">
      <div className="section-container" ref={ref}>
        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mono text-primary mb-5 block">Experience</span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-foreground tracking-tighter leading-[1.1] mb-5">
              Professional
              <br className="hidden sm:block" />
              timeline
            </h2>
            <p className="text-muted-foreground text-[15px] leading-relaxed">
              Building production-grade applications with a focus on AI integration and modern frontend architecture.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-border to-transparent" />
            
            {/* Timeline dot */}
            <div className="absolute left-0 top-8 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_2px_hsl(var(--primary)/0.3)]" />

            <div className="pl-10 md:pl-12">
              <div className="glass-card p-7 md:p-9 group hover:border-primary/20 transition-colors duration-500">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-7">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase size={14} className="text-primary" />
                      <span className="mono text-primary">Current Role</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground tracking-tight mb-1.5">Frontend Developer</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 size={14} />
                      <span className="text-sm font-semibold text-foreground/80">Toshal infotech</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mono text-muted-foreground bg-secondary/60 px-3.5 py-2 rounded-lg border border-border/50">
                    <Calendar size={12} />
                    ~1 Year
                  </div>
                </div>

                <ul className="space-y-4">
                  {responsibilities.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      className="text-[15px] text-muted-foreground flex items-start gap-3 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0 mt-2" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
