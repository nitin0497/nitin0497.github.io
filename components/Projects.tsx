import React from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, Cpu, FileText } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="space-y-16">
      {PROJECTS.map((project, index) => (
        <div key={index} className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            <div className="flex flex-col items-end gap-2">
              {project.githubLink && (
                <a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-medium transition-colors bg-slate-50 px-4 py-2 rounded-xl text-sm border border-slate-200 w-fit"
                >
                  <Github size={18} />
                  <span>Source</span>
                  <ExternalLink size={14} />
                </a>
              )}
              {project.ssrnLink && (
                <a 
                  href={project.ssrnLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-medium transition-colors bg-blue-50/50 px-4 py-2 rounded-xl text-sm border border-blue-100 w-fit"
                >
                  <FileText size={18} className="text-blue-600" />
                  <span className="font-bold">SSRN Paper</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed text-lg mb-10 pb-6 border-b border-slate-50">
            {project.description}
          </p>

          <div className="grid grid-cols-1 gap-8">
            {project.keyContributions?.map((contrib, cIdx) => (
              <div key={cIdx} className="space-y-4">
                {contrib.title && (
                  <h4 className="text-md font-bold text-blue-600 flex items-center gap-2">
                    <Cpu size={18} className="text-blue-400" />
                    {contrib.title}
                  </h4>
                )}
                <ul className="list-disc list-outside ml-6 space-y-3 text-slate-700 marker:text-slate-300">
                  {contrib.items.map((item, iIdx) => (
                    <li key={iIdx} className="leading-relaxed pl-1">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
