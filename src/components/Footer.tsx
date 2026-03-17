import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/40">
      <div className="section-container py-10 md:py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-bold text-foreground tracking-tighter text-lg">KK<span className="text-primary">.</span></span>
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Keyur Kalsariya
          </span>
        </div>
        <div className="flex items-center gap-1">
          <a
            href="https://github.com/keyurkalsariya"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-all duration-200"
            aria-label="GitHub"
          >
            <Github size={18} strokeWidth={1.5} />
          </a>
          <a
            href="https://linkedin.com/in/keyurkalsariya"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
