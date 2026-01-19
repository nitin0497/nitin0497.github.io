import React from 'react';

const SKILLS = [
  {
    title: "Core AI/ML",
    skills: ["Deep Learning", "Computer Vision", "NLP", "Vision-Language Models (VLMs)", "Transformers", "PyTorch", "OpenCV", "CUDA"]
  },
  {
    title: "Data Engineering",
    skills: ["Python", "Git", "Databricks", "Alteryx", "R", "SQL", "Webscraping", "Visualization"]
  },
  {
    title: "Statistical Modeling",
    skills: ["Causal Inference", "Network Science", "Time-series Analysis", "Multivariate Analysis"]
  }
];

const Skills: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {SKILLS.map((category, index) => (
        <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 transition-colors">
          <h3 className="font-bold text-slate-900 mb-6 text-xs uppercase tracking-widest text-blue-600">
            {category.title}
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {category.skills.map((skill, sIdx) => (
              <span 
                key={sIdx} 
                className="px-3 py-1.5 bg-slate-50 text-slate-700 text-xs rounded-lg border border-slate-200 font-bold"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;