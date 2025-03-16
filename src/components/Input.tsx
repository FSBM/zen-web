import { InputError } from './Error';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  error?: string;
  className?: string;
}

export default function Input({
  value,
  onChange,
  label,
  placeholder = '',
  type = 'text',
  required = false,
  error,
  className = ''
}: InputProps) {
  return (
    <div className={className}>
      {label && (
        <label className="block mb-1 text-sm font-medium">
          {label}{required && <span className="text-[#8942e8] ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500"
      />
      <div className="min-h-[10px]">
      {error && <InputError error={error}/>}
      </div>
    </div>
  );
}