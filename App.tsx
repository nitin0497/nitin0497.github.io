import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">
      <Navigation />
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 space-y-24">
        <section id="hero">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        <section id="education" className="scroll-mt-24">
          <Education />
        </section>

        <section id="experience" className="scroll-mt-24">
          <Experience />
        </section>

        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>

        <section id="research" className="scroll-mt-24">
          <Publications />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;