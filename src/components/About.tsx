import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cpu, Zap, TrendingUp } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Modern Stack", desc: "React, TypeScript, Next.js — building with the best tools in the ecosystem." },
  { icon: Cpu, label: "AI Integration", desc: "OpenAI, Voice AI, and automation — making applications intelligent." },
  { icon: Zap, label: "Performance", desc: "Scalable architecture and optimized systems that handle real-world load." },
  { icon: TrendingUp, label: "Full Stack Growth", desc: "Expanding into backend, databases, and end-to-end product development." },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-spacing border-t border-border/40">
      <div className="section-container" ref={ref}>
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-16 lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mono text-primary mb-5 block">About</span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-foreground tracking-tighter leading-[1.1] mb-8">
              Engineering intelligence
              <br className="hidden sm:block" />
              into every interface.
            </h2>

            <div className="space-y-5 text-muted-foreground text-[15px] md:text-base leading-[1.8]">
              <p>
                React.js developer with strong experience building modern web applications 
                and AI-powered products. Focused on building scalable user interfaces, 
                integrating AI features, and developing full-stack solutions.
              </p>
              <p>
                Work spans AI chat interfaces, voice-based AI agents, automation tools, 
                and developer-focused systems — solving complex problems 
                and building intelligent systems that improve business workflows.
              </p>
              <p>
                Currently a Frontend Developer at{" "}
                <span className="text-foreground font-semibold">MyHub</span>, 
                transitioning into full-stack development with a focus on 
                AI-integrated applications.
              </p>
            </div>
          </motion.div>

          {/* Right - Highlight cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="grid sm:grid-cols-2 gap-4 lg:pt-14"
          >
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-card p-6 group hover:border-primary/20 transition-colors duration-500"
                >
                  <div className="p-3 rounded-xl bg-primary/[0.08] text-primary border border-primary/10 w-fit mb-4">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-foreground text-[15px] tracking-tight mb-2">{h.label}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{h.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
