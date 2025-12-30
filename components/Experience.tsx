import React from 'react';
import { PROFESSIONAL_EXPERIENCE, RESEARCH_EXPERIENCE, TEACHING_EXPERIENCE } from '../constants';
import SectionHeader from './SectionHeader';
import { Briefcase, BookOpen, PenTool } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Professional Experience */}
      <div>
        <SectionHeader title="Professional Experience" />
        <div className="space-y-10">
          {PROFESSIONAL_EXPERIENCE.map((exp, index) => (
            <div key={index} className="group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {exp.title}
                </h3>
                <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                  {exp.duration}
                </span>
              </div>
              
              <div className="text-blue-600 font-medium mb-3 flex items-center gap-2">
                <Briefcase size={16} />
                {exp.company} <span className="text-slate-400">|</span> {exp.location}
              </div>

              <ul className="list-disc list-outside ml-5 space-y-2 text-slate-700 marker:text-blue-400">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="leading-relaxed pl-1">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Research Experience */}
      <div>
        <SectionHeader title="Research Experience" />
        <div className="space-y-10">
          {RESEARCH_EXPERIENCE.map((res, index) => (
            <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h3 className="text-lg font-bold text-slate-900">{res.title}</h3>
                <span className="text-sm font-medium text-slate-500">{res.duration}</span>
              </div>
              <div className="text-blue-600 font-medium mb-4 flex items-center gap-2">
                <BookOpen size={16} />
                {res.institution}
              </div>
              <ul className="list-disc list-outside ml-5 space-y-3 text-slate-700 marker:text-blue-400">
                {res.points.map((point, idx) => (
                  <li key={idx} className="leading-relaxed pl-1">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

       {/* Teaching Experience */}
       <div>
        <SectionHeader title="Teaching Experience" />
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
            <h3 className="text-lg font-bold text-slate-900">{TEACHING_EXPERIENCE.role}</h3>
            <div className="text-blue-600 font-medium flex items-center gap-2">
              <PenTool size={16} />
              {TEACHING_EXPERIENCE.institution}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Courses</h4>
              <ul className="space-y-1">
                {TEACHING_EXPERIENCE.courses.map((course, idx) => (
                  <li key={idx} className="text-slate-700 font-medium bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 text-sm">
                    {course}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-2 border-t border-slate-100">
              <p className="text-slate-600 leading-relaxed italic">
                {TEACHING_EXPERIENCE.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;