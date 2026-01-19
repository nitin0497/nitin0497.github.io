import React from 'react';
import { WORKING_PAPERS, ACADEMIC_HONORS } from '../constants';
import { FileText, Award, ArrowRight, User } from 'lucide-react';

const Publications: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Working Papers */}
      <div>
        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Selected Working Papers</h4>
        <div className="space-y-12">
          {WORKING_PAPERS.map((paper, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 leading-tight">{paper.title}</h3>
              
              <div className="flex flex-wrap gap-2 text-sm text-slate-500">
                <User size={14} className="mt-0.5" />
                {paper.authors.map((author, i) => (
                  <span key={i}>
                    {author.link ? (
                      <a href={author.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {author.name}
                      </a>
                    ) : (
                      <span>{author.name}</span>
                    )}
                    {i < paper.authors.length - 1 && ';'}
                  </span>
                ))}
              </div>

              <div className="bg-slate-50 border-l-4 border-blue-500 p-6 rounded-r-2xl italic text-slate-700 text-sm leading-relaxed">
                "{paper.description}"
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {paper.status && (
                    <span className="bg-amber-50 text-amber-800 text-xs px-3 py-1 rounded-full font-bold border border-amber-200">
                        {paper.status}
                    </span>
                )}
                {paper.link && (
                    <a href={paper.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-blue-600 hover:text-blue-800 text-sm font-bold transition-colors">
                        <FileText size={16} />
                        View on SSRN
                        <ArrowRight size={14} />
                    </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Academic Honors */}
      <div>
        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Honors & Fellowships</h4>
        <div className="bg-slate-900 text-white rounded-3xl p-10 shadow-xl flex items-center gap-8 border border-slate-800">
           <div className="bg-blue-600 p-5 rounded-2xl shadow-lg shadow-blue-500/20">
             <Award size={40} />
           </div>
           <div className="space-y-2">
             {ACADEMIC_HONORS.map((honor, index) => (
                 <p key={index} className="text-xl font-bold text-slate-100">
                     {honor}
                 </p>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
