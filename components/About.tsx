
import React from 'react';
import { USER_INFORMATION } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-8 border border-slate-100">
      <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Introduction</h2>
      <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
        {USER_INFORMATION.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default About;
