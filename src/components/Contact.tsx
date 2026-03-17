import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, ArrowUpRight, Copy } from "lucide-react";
import { toast } from "sonner";

const links = [
  { label: "Email", href: "mailto:keyur@example.com", icon: Mail, value: "keyur@example.com", copyable: true },
  { label: "GitHub", href: "https://github.com/keyurkalsariya", icon: Github, value: "github.com/keyurkalsariya" },
  { label: "LinkedIn", href: "https://linkedin.com/in/keyurkalsariya", icon: Linkedin, value: "linkedin.com/in/keyurkalsariya" },
];

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Email copied to clipboard");
  };

  return (
    <section id="contact" className="section-spacing border-t border-border/40">
      <div className="section-container" ref={ref}>
        <div className="grid lg:grid-cols-[1fr,1fr] gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mono text-primary mb-5 block">Contact</span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-foreground tracking-tighter leading-[1.1] mb-5">
              Let's connect.
            </h2>
            <p className="text-muted-foreground text-[15px] leading-[1.8] max-w-md">
              Open to opportunities, collaborations, and interesting conversations about 
              AI-powered development. Let's build something intelligent together.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {links.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={link.href}
                    target={link.label !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="glass-card-hover p-5 md:p-6 group flex items-center gap-5"
                  >
                    <div className="p-3 rounded-xl bg-primary/[0.08] text-primary border border-primary/10 flex-shrink-0">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="mono text-primary mb-0.5">{link.label}</p>
                      <p className="text-sm text-muted-foreground truncate">{link.value}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {link.copyable && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleCopy(link.value);
                          }}
                          className="p-2 rounded-lg hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="Copy email"
                        >
                          <Copy size={14} />
                        </button>
                      )}
                      <ArrowUpRight size={16} className="text-muted-foreground/30 group-hover:text-primary transition-colors" />
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
