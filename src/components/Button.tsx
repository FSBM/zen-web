
interface ButtonProps {
  label: string;
  color: string;
  borderColor: string;
  textClr : string;
  isDisabled ?: boolean
  onClick ?: () => void
}

function Button({ label, color, borderColor, textClr,isDisabled,onClick }: ButtonProps): JSX.Element {
  return (
    <button
    disabled={isDisabled || false}
      className={`text-${textClr} bg-${color} border border-${borderColor} focus:outline-none 
      ${isDisabled ? 'cursor-not-allowed' : 'hover:bg-gray-100 hover:text-black'} transition-all ease-in-out duration-500  focus:ring-gray-100 rounded-full 
      text-sm font-bold px-5 py-2 me-2 mb-2
      min-w-[95px]`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;