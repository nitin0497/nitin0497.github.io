import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import CollapsibleSection from './components/CollapsibleSection';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 space-y-12">
        <section id="hero">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        <CollapsibleSection id="skills" title="Technical Skills">
          <Skills />
        </CollapsibleSection>

        <CollapsibleSection id="education" title="Education">
          <Education />
        </CollapsibleSection>

        <CollapsibleSection id="experience" title="Professional Experience">
          <Experience />
        </CollapsibleSection>

        <CollapsibleSection id="projects" title="Key Projects">
          <Projects />
        </CollapsibleSection>

        <CollapsibleSection id="research" title="Research & Honors">
          <Publications />
        </CollapsibleSection>
      </main>

      <Footer />
    </div>
  );
}

export default App;
