import React from 'react';

interface ButtonProps {
  label: string;
  color: string;
  borderColor: string;
  textClr : string;
}

function Button({ label, color, borderColor, textClr }: ButtonProps): JSX.Element {
  return (
    <button
      className={`text-${textClr} bg-${color} border border-${borderColor} focus:outline-none 
      hover:bg-gray-100 hover:text-black transition-all ease-in-out duration-500 focus:ring-4 focus:ring-gray-100 rounded-full 
      text-sm font-bold px-5 py-2 me-2 mb-2`}
    >
      {label}
    </button>
  );
}

export default Button;