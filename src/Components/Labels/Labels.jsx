import React from 'react';

const sizes = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-2 text-sm',
  lg: 'px-4 py-3 text-base',
};

const BaseLabel = ({name = 'new feature', size}) => {
  const labelSize = sizes[size] || sizes.md;
  return (
    <div
      className={`${labelSize} bg-blue-300 text-blue-800/80 text-capitalize w-fit rounded-xl font-medium`}
    >
      {name}
    </div>
  );
};

export const LabelSM = ({name}) => <BaseLabel name={name} size="sm" />;
export const LabelMD = ({name}) => <BaseLabel name={name} size="md" />;
export const LabelLG = ({name}) => <BaseLabel name={name} size="lg" />;
