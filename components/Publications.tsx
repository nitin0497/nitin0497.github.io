import React from 'react';
import { WORKING_PAPERS, ACADEMIC_HONORS } from '../constants';
import SectionHeader from './SectionHeader';
import { FileText, Award } from 'lucide-react';

const Publications: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Working Papers */}
      <div>
        <SectionHeader title="Working Papers" />
        <div className="space-y-6">
          {WORKING_PAPERS.map((paper, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <FileText className="text-blue-600" size={24} />
                </div>
                <div>
                    <h3 className="font-bold text-slate-900 text-lg leading-snug mb-2">{paper.title}</h3>
                    <p className="text-sm text-slate-500 mb-3 italic">
                      {paper.authors.map((author, i) => (
                        <React.Fragment key={i}>
                          {author.link ? (
                            <a 
                              href={author.link} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="hover:text-blue-600 transition-colors"
                            >
                              {author.name}
                            </a>
                          ) : (
                            <span>{author.name}</span>
                          )}
                          {i < paper.authors.length - 1 && '; '}
                        </React.Fragment>
                      ))}
                    </p>
                    <p className="text-slate-700 leading-relaxed mb-3">
                        {paper.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      {paper.status && (
                          <span className="inline-block bg-amber-50 text-amber-800 text-xs px-2.5 py-1 rounded-md font-medium border border-amber-100">
                              {paper.status}
                          </span>
                      )}
                      {paper.link && (
                          <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium transition-colors">
                              Read on SSRN &rarr;
                          </a>
                      )}
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Academic Honors */}
      <div>
        <SectionHeader title="Academic Honors" />
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-xl p-8 shadow-lg flex items-start gap-6">
           <div className="bg-white/10 p-3 rounded-full flex-shrink-0">
             <Award size={32} className="text-yellow-400" />
           </div>
           <ul className="space-y-4">
             {ACADEMIC_HONORS.map((honor, index) => (
                 <li key={index} className="text-lg leading-relaxed font-light">
                     {honor}
                 </li>
             ))}
           </ul>
        </div>
      </div>
    </div>
  );
};

export default Publications;
