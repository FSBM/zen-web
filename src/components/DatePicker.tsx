import { useState, useRef, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { InputError } from './Error';

interface DatePickerProps {
  selectedDate: string;
  onDateChange: (date: string) => void;
  label?: string;
  required?: boolean;
  error?: string;
}

export default function DatePicker({
  selectedDate,
  onDateChange,
  label,
  required = false,
  error
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const datePickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
  };

  function generateCalendarDays(date: Date) {
    const currentDate = new Date(date);
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    const daysInMonth = lastDay.getDate();
    const startOffset = firstDay.getDay(); 
    
    const today = new Date();
    const selectedDay = currentDate.getDate();
    
    const days = [];
    
    // Previous month days
    for (let i = 0; i < startOffset; i++) {
      const prevMonthLastDay = new Date(year, month, 0).getDate();
      days.push({
        value: prevMonthLastDay - startOffset + i + 1,
        type: 'prev',
        isSelected: false,
        isToday: false
      });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const isToday = 
        today.getDate() === i && 
        today.getMonth() === month && 
        today.getFullYear() === year;
        
      days.push({
        value: i,
        type: 'current',
        isSelected: i === selectedDay,
        isToday
      });
    }
    
    // Next month days
    const totalDaysShown = 42; // 6 rows of 7 days
    const remainingDays = totalDaysShown - days.length;
    
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        value: i,
        type: 'next',
        isSelected: false,
        isToday: false
      });
    }
    
    return days;
  }
  
  function navigateMonth(direction: number) {
    const currentDate = new Date(selectedDate || new Date());
    currentDate.setMonth(currentDate.getMonth() + direction);
    onDateChange(currentDate.toISOString().split('T')[0]);
  }

  return (
    <div>
      {label && (
        <label className="block mb-1 text-sm font-medium">
          {label}{required && <span className="text-[#8942e8] ml-1">*</span>}
        </label>
      )}
      <div className="relative" ref={datePickerRef}>
        <div 
          className="w-full p-2 bg-transparent border border-gray-700 rounded-lg focus:outline-none hover:border-gray-500 cursor-pointer flex justify-between items-center min-w-[180px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`${!selectedDate ? 'text-gray-500' : ''}`}>
            {selectedDate ? formatDate(selectedDate) : 'dd/mm/yyyy'}
          </span>
          <Calendar size={16} />
        </div>
        
        {isOpen && (
          <div className="absolute mt-1 p-2 w-64 bg-white dark:bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-10">
            <div className="grid grid-cols-7 gap-1">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                <div key={index} className="text-center text-xs font-medium p-1">
                  {day}
                </div>
              ))}
              
              {generateCalendarDays(selectedDate ? new Date(selectedDate) : new Date()).map((day, index) => (
                <div 
                  key={index}
                  className={`text-center p-1 text-sm rounded-full cursor-pointer
                    ${day.type === 'current' ? 'hover:bg-gray-200 dark:hover:bg-gray-700' : 'text-gray-400'}
                    ${day.isSelected ? 'bg-[#8942e8] text-white hover:bg-[#8942e8]' : ''}
                    ${day.isToday && !day.isSelected ? 'border border-[#8942e8]' : ''}
                  `}
                  onClick={() => {
                    if (day.type === 'current') {
                      const newDate = new Date(selectedDate || new Date());
                      newDate.setDate(day.value);
                      onDateChange(newDate.toISOString().split('T')[0]);
                      setIsOpen(false);
                    }
                  }}
                >
                  {day.value}
                </div>
              ))}
            </div>
            
            <div className="flex justify-between mt-2">
              <button 
                className="px-2 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                onClick={() => navigateMonth(-1)}
              >
                Prev
              </button>
              <span className="text-sm font-medium my-auto">
                {selectedDate ? 
                  new Date(selectedDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 
                  new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
                }
              </span>
              <button 
                className="px-2 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                onClick={() => navigateMonth(1)}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="min-h-[10px]">
      {error && <InputError error={error}/>}
      </div>
    </div>
  );
}