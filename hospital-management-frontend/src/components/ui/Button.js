import React from 'react';

const Button = ({ children, onClick, className = '', variant = 'default', ...props }) => {
  const baseClasses = 'px-4 py-2 rounded-md font-medium transition-colors';
  const variantClasses = {
    default: 'bg-blue-500 text-white hover:bg-blue-600',
    destructive: 'bg-red-500 text-white hover:bg-red-600',
    outline: 'border border-gray-300 bg-transparent hover:bg-gray-100',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;