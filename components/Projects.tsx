import React from 'react';
import { PROJECTS } from '../constants';
import SectionHeader from './SectionHeader';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const resolveImageSrc = (vid: string) => {
    if (vid.startsWith('http://') || vid.startsWith('https://')) return vid;
    return vid.startsWith('/') ? vid : `/${vid}`;
  };

  return (
    <div>
      <SectionHeader title="Key Projects" />
      <div className="grid grid-cols-1 gap-16">
        {PROJECTS.map((project, index) => (
          <div key={index} className="flex flex-col gap-8 border-b border-slate-200 pb-16 last:border-0 last:pb-0">
            {/* Header */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
              {project.githubLink && (
                <a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  <Github size={18} />
                  <span>View on GitHub</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>

            {/* Description */}
            <p className="text-slate-700 leading-relaxed text-lg">
              {project.description}
            </p>

            {(() => {
              const isZeroShot = project.title.toLowerCase().includes('zero-shot object counting');
              const frameworkVisual = project.visualIds?.[0];
              if (!isZeroShot || !frameworkVisual) return null;

              return (
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 border-dashed">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Framework Overview</h4>
                  <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                    <img
                      src={resolveImageSrc(frameworkVisual)}
                      alt="VA-Count framework overview diagram"
                      className="w-full h-auto object-contain max-h-[520px]"
                    />
                  </div>
                </div>
              );
            })()}

            {/* Visual Mapping Area */}
            {(() => {
              const isZeroShot = project.title.toLowerCase().includes('zero-shot object counting');
              const eemVisual = project.visualIds?.[1];
              const nsmVisual = project.visualIds?.[2];

              if (isZeroShot && eemVisual && nsmVisual) {
                return (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-xl border border-slate-200 border-dashed">
                    <div className="md:col-span-2">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Module Visuals</h4>
                    </div>

                    <div className="group relative bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all">
                      <div className="px-4 py-3 border-b border-slate-100">
                        <p className="text-sm font-semibold text-slate-800">EEM — ZSCO Exemplars</p>
                      </div>
                      <img
                        src={resolveImageSrc(eemVisual)}
                        alt="Exemplar Enhancement Module (EEM) exemplars"
                        className="w-full h-auto object-contain max-h-[420px]"
                      />
                    </div>

                    <div className="group relative bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all">
                      <div className="px-4 py-3 border-b border-slate-100">
                        <p className="text-sm font-semibold text-slate-800">NSM — Zero-Shot Counting Examples</p>
                      </div>
                      <img
                        src={resolveImageSrc(nsmVisual)}
                        alt="Noise Suppression Module (NSM) zero-shot counting examples"
                        className="w-full h-auto object-contain max-h-[420px]"
                      />
                    </div>
                  </div>
                );
              }

              return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-xl border border-slate-200 border-dashed">
                  <div className="md:col-span-2">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Project Visuals</h4>
                  </div>
                  {project.visualIds.map((vid, vIdx) => (
                    <div
                      key={vIdx}
                      className="group relative bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all"
                    >
                      <img
                        src={resolveImageSrc(vid)}
                        alt={`Visual for ${project.title}`}
                        className="w-full h-auto object-contain max-h-[400px]"
                      />
                    </div>
                  ))}
                </div>
              );
            })()}

            {/* Key Contributions */}
            <div className="space-y-6">
              {project.keyContributions?.map((contrib, cIdx) => (
                <div key={cIdx}>
                  {contrib.title && (
                    <h4 className="text-lg font-bold text-slate-800 mb-2">{contrib.title}</h4>
                  )}
                  <ul className="list-disc list-outside ml-5 space-y-2 text-slate-700 marker:text-blue-400">
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
    </div>
  );
};

export default Projects;
