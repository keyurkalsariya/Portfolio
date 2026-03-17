import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatIBuild from "@/components/WhatIBuild";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <WhatIBuild />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
