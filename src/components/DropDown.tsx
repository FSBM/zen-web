import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { InputError } from './Error';
interface DropdownProps {
  options: string[];
  selectedValue: string;
  onSelect: (value: string) => void;
  placeholder?: string;
  label?: string;
  required?: boolean;
  error?: string;
}

export default function Dropdown({
  options,
  selectedValue,
  onSelect,
  placeholder = 'Select an option',
  label,
  required = false,
  error
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      {label && (
        <label className="block mb-1 text-sm font-medium">
          {label}{required && <span className="text-[#8942e8] ml-1">*</span>}
        </label>
      )}
      <div className="relative" ref={dropdownRef}>
        <div 
          className="w-full p-2 bg-transparent border border-gray-700 rounded-lg focus:outline-none hover:border-gray-500 cursor-pointer flex justify-between items-center min-w-[180px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`${!selectedValue ? 'text-gray-500' : ''}`}>
            {selectedValue || placeholder}
          </span>
          <ChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} size={16} />
        </div>
        
        {isOpen && (
          <div className="absolute mt-1 w-full bg-white dark:bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-10">
            {options.map((option) => (
              <div 
                key={option}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                onClick={() => {
                  onSelect(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="min-h-[10px]">
      {error && <InputError error={error}/>}
      </div>
    </div>
  );
}