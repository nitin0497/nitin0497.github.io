import React from 'react';
import { USER_INFORMATION } from '../constants';
import SectionHeader from './SectionHeader';

const About: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100">
      <SectionHeader title="About Me" />
      <div className="space-y-4 text-slate-700 leading-relaxed text-justify">
        {USER_INFORMATION.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default About;