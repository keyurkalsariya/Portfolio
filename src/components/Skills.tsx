import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const skillCategories = [
  {
    label: "Frontend",
    tag: "01",
    color: "text-blue-500",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    label: "Backend & APIs",
    tag: "02",
    color: "text-emerald-500",
    skills: ["Node.js", "REST APIs", "Supabase", "PostgreSQL"],
  },
  {
    label: "AI & Integrations",
    tag: "03",
    color: "text-violet-500",
    skills: ["OpenAI APIs", "AI Chat Interfaces", "Voice AI Systems", "Speech-to-Text", "AI Automation"],
  },
  {
    label: "Tools",
    tag: "04",
    color: "text-amber-500",
    skills: ["Git", "GitHub", "VS Code", "Postman", "WebSockets"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="section-spacing border-t border-border/40">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20 max-w-2xl"
        >
          <span className="mono text-primary mb-5 block">Skills</span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-foreground tracking-tighter leading-[1.1] mb-5">
            Technical matrix
          </h2>
          <p className="text-muted-foreground text-[15px] leading-relaxed">
            Technologies and tools used to build intelligent, scalable web applications.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-6 md:p-7 group hover:border-primary/20 transition-colors duration-500"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className={`mono ${cat.color}`}>{cat.label}</h3>
                <span className="mono text-muted-foreground/30">{cat.tag}</span>
              </div>
              <ul className="space-y-3">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`text-sm cursor-default transition-all duration-300 flex items-center gap-2.5 ${
                      hoveredSkill === null || hoveredSkill === skill
                        ? "text-foreground/80"
                        : "text-muted-foreground/30"
                    } ${hoveredSkill === skill ? "translate-x-1.5 text-primary" : ""}`}
                  >
                    <span className={`w-1 h-1 rounded-full flex-shrink-0 transition-colors duration-300 ${
                      hoveredSkill === skill ? "bg-primary" : "bg-muted-foreground/30"
                    }`} />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
