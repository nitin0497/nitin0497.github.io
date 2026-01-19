import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Props {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  id?: string;
}

const CollapsibleSection: React.FC<Props> = ({ title, children, defaultOpen = false, id }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div id={id} className="scroll-mt-24 border-b border-slate-200 last:border-0 pb-8 last:pb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 group hover:bg-white transition-all rounded-xl px-4 -mx-4"
      >
        <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-4">
          <span className={`w-2 h-8 rounded-full transition-colors ${isOpen ? 'bg-blue-600' : 'bg-slate-300 group-hover:bg-blue-400'}`}></span>
          {title}
        </h2>
        <div className={`p-2 rounded-full transition-all ${isOpen ? 'bg-blue-50 text-blue-600 rotate-180' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
          <ChevronDown size={28} />
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[5000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
        <div className="pt-2 animate-in fade-in slide-in-from-top-4 duration-500">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleSection;