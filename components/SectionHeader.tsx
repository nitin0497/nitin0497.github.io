import React from 'react';

interface Props {
  title: string;
}

const SectionHeader: React.FC<Props> = ({ title }) => {
  return (
    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center after:content-[''] after:ml-4 after:flex-1 after:h-px after:bg-slate-200">
      {title}
    </h2>
  );
};

export default SectionHeader;