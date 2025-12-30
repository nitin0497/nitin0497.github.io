import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 py-10 fade-in">
      <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 relative">
        <div className="absolute inset-0 bg-blue-100 rounded-2xl transform rotate-3"></div>
        <img
          src="/images/nitin_profile.jpg"
          alt="Nitin Yadav"
          className="relative w-full h-full object-cover rounded-2xl shadow-lg border-4 border-white"
        />
      </div>

      <div className="flex-1 text-center md:text-left space-y-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-2">
            Nitin Yadav
          </h1>
          <p className="text-xl text-blue-600 font-medium">
            Data Scientist | Applied AI Researcher
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <span className="flex items-center gap-2 px-4 py-2 bg-slate-100 border border-slate-200 text-slate-900 rounded-lg font-medium">
             <Phone size={18} className="text-blue-600" />
             {CONTACT_INFO.phone}
          </span>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-sm"
          >
            <Mail size={18} />
            <span>Email</span>
          </a>
          <a
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
          <a
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;