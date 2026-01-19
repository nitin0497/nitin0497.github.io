import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Props {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const CollapsibleItem: React.FC<Props> = ({ title, subtitle, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-start justify-between text-left group hover:bg-slate-50/50 px-2 rounded-lg transition-colors"
      >
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-baseline md:gap-3">
            <div className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              {title}
            </div>
            {subtitle && (
              <div className="text-blue-600 font-medium md:text-lg">
                {subtitle}
              </div>
            )}
          </div>
        </div>
        <div className="ml-4 mt-1 text-slate-400 group-hover:text-blue-500">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100 mb-8' : 'max-h-0 opacity-0'}`}>
        <div className="px-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleItem;