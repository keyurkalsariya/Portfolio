import { motion } from "framer-motion";
import { ArrowDown, Mail, Sparkles } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Accent glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/[0.06] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 section-container w-full pt-32 pb-20 md:pt-40 md:pb-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start max-w-4xl"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-secondary/50 text-xs font-medium text-muted-foreground mb-8 md:mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.75rem] font-extrabold leading-[1.05] tracking-tighter text-foreground mb-7"
          >
            Building intelligent
            <br />
            <span className="text-gradient-accent">web experiences.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-[1.7] mb-12"
          >
            React developer specializing in AI-powered products and 
            high-performance web systems. Crafting intelligent interfaces 
            and scalable full-stack solutions.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 sm:gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:shadow-[0_8px_30px_-6px_hsl(var(--primary)/0.4)] transition-all duration-300 hover:-translate-y-0.5"
            >
              View Projects
              <ArrowDown size={15} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-border text-foreground rounded-xl font-semibold text-sm hover:bg-secondary hover:border-secondary transition-all duration-300"
            >
              <Mail size={15} />
              Contact Me
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="mt-16 md:mt-24 flex items-center gap-8 md:gap-12"
          >
            {[
              { value: "1+", label: "Year Experience" },
              { value: "4+", label: "AI Projects" },
              { value: "10+", label: "Technologies" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">{stat.value}</div>
                <div className="mono text-muted-foreground/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
