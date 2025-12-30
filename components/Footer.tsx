import React from 'react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-12">
           <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
             {CONTACT_INFO.email}
           </a>
           <span className="hidden md:block w-1.5 h-1.5 bg-slate-700 rounded-full"></span>
           <span>{CONTACT_INFO.phone}</span>
        </div>

        <div className="flex justify-center gap-6 mb-8">
            <a href={CONTACT_INFO.linkedin} className="text-slate-400 hover:text-blue-400 transition-colors">LinkedIn</a>
            <a href={CONTACT_INFO.github} className="text-slate-400 hover:text-white transition-colors">GitHub</a>
        </div>

        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()} Nitin Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;