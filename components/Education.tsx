import React from 'react';
import { EDUCATION } from '../constants';
import { Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <div className="space-y-10">
      {EDUCATION.map((edu, index) => (
        <div key={index} className="relative pl-8 border-l-2 border-slate-100">
          <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-blue-600 border-2 border-white"></div>
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-2">
            <h3 className="text-xl font-bold text-slate-900">{edu.institution}</h3>
            <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap">
              {edu.duration}
            </span>
          </div>
          <p className="text-lg text-slate-700 font-semibold mb-3">{edu.degree}</p>
          <div className="flex items-center gap-1.5 text-sm text-slate-500 mb-4">
            <MapPin size={14} />
            <span>{edu.location}</span>
          </div>
          <p className="text-slate-600 leading-relaxed bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
            {edu.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Education;
