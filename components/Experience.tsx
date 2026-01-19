import React from 'react';
import { PROFESSIONAL_EXPERIENCE, RESEARCH_EXPERIENCE, TEACHING_EXPERIENCE } from '../constants';
import { Briefcase, BookOpen, PenTool, MapPin, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Professional Experience */}
      <div>
        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8 flex items-center gap-2">
          <Briefcase size={16} />
          Corporate & Industry
        </h4>
        <div className="space-y-10">
          {PROFESSIONAL_EXPERIENCE.map((exp, index) => (
            <div key={index} className="group">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 font-bold">{exp.company}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <span className="text-sm font-bold text-slate-500 block">{exp.duration}</span>
                  <span className="text-xs text-slate-400 flex items-center justify-end gap-1">
                    <MapPin size={12} /> {exp.location}
                  </span>
                </div>
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

      <hr className="border-slate-100" />

      {/* Research Experience */}
      <div>
        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8 flex items-center gap-2">
          <BookOpen size={16} />
          Academic Research
        </h4>
        <div className="space-y-8">
          {RESEARCH_EXPERIENCE.map((res, index) => (
            <div key={index} className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{res.title}</h3>
                  <p className="text-slate-500 font-medium">{res.institution}</p>
                </div>
                <span className="text-xs font-bold bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                  {res.duration}
                </span>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-3 text-slate-700 marker:text-blue-500">
                {res.points.map((point, idx) => (
                  <li key={idx} className="leading-relaxed pl-1">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

       <hr className="border-slate-100" />

       {/* Teaching Experience */}
       <div>
        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
          <PenTool size={16} />
          Instruction & Mentorship
        </h4>
        <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-900">{TEACHING_EXPERIENCE.role}</h3>
            <p className="text-blue-600 font-medium">{TEACHING_EXPERIENCE.institution}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {TEACHING_EXPERIENCE.courses.map((course, idx) => (
              <div key={idx} className="text-slate-700 text-sm bg-slate-50 px-4 py-3 rounded-xl border border-slate-100 font-medium">
                {course}
              </div>
            ))}
          </div>
          <p className="text-slate-600 italic text-sm border-t border-slate-50 pt-4">
            {TEACHING_EXPERIENCE.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
