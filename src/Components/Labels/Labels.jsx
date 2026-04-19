import React from 'react';

const sizes = {
  sm: 'px-3 py-1 text-xs font-semibold',
  md: 'px-4 py-1.5 text-sm font-semibold',
  lg: 'px-5 py-2 text-base font-bold',
};

const BaseLabel = ({name = 'new feature', size = 'md', variant = 'primary'}) => {
  const labelSize = sizes[size] || sizes.md;

  const variants = {
    primary:
      'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border border-blue-300/50 shadow-sm',
    accent:
      'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border border-purple-300/50 shadow-sm',
    success:
      'bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border border-green-300/50 shadow-sm',
    warning:
      'bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 border border-orange-300/50 shadow-sm',
  };

  const variantClass = variants[variant] || variants.primary;

  return (
    <div
      className={`${labelSize} ${variantClass} w-fit rounded-2xl capitalize font-google-sans-bold tracking-wide transition-all duration-200 hover:shadow-md`}
    >
      {name}
    </div>
  );
};

export const LabelSM = ({name, variant = 'primary'}) => (
  <BaseLabel name={name} size="sm" variant={variant} />
);
export const LabelMD = ({name, variant = 'primary'}) => (
  <BaseLabel name={name} size="md" variant={variant} />
);
export const LabelLG = ({name, variant = 'primary'}) => (
  <BaseLabel name={name} size="lg" variant={variant} />
);
