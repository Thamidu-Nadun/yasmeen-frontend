import {PlusCircle, PlusCircleIcon} from 'lucide-react';
import React from 'react';

const sizes = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-3 py-2',
  lg: 'px-4 py-3 text-lg',
};

const BaseButton = ({size, name, Icon, onClick, className}) => {
  const buttonSize = sizes[size] || sizes.md;
  return (
    <button
      onClick={onClick}
      className={`${buttonSize} cursor-pointer bg-blue-500 hover:bg-blue-500/90 text-white rounded-lg ${className}`}
    >
      {Icon && <Icon className="inline-block mr-2" size={16} />}
      {name}
    </button>
  );
};

export const ButtonLG = ({name = 'Click Me', Icon = null}) => {
  return <BaseButton size="lg" name={name} Icon={Icon} />;
};

export const ButtonMD = ({name = 'Click Me', Icon = null}) => {
  return <BaseButton size="md" name={name} Icon={Icon} />;
};

export const ButtonSM = ({name = 'Click Me', Icon = null}) => {
  return <BaseButton size="sm" name={name} Icon={Icon} />;
};
