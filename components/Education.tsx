import React from 'react';
import { EDUCATION } from '../constants';
import SectionHeader from './SectionHeader';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <div>
      <SectionHeader title="Education" />
      <div className="space-y-8">
        {EDUCATION.map((edu, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-slate-200 hover:border-blue-400 transition-colors pb-2">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-slate-300 group-hover:border-blue-500"></div>
            
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
              <div>
                <h3 className="text-lg font-bold text-slate-900">{edu.institution}</h3>
                <p className="text-blue-600 font-medium text-lg">{edu.degree}</p>
              </div>
              <div className="flex flex-col items-start sm:items-end text-sm text-slate-500 mt-1 sm:mt-0">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{edu.duration}</span>
                </div>
                {edu.location && (
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                )}
              </div>
            </div>
            
            <p className="text-slate-600 mt-3 leading-relaxed">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;