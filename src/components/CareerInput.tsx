import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface Career {
  id: number | string;
  name: string;
  
}

interface CareerInputProps {
  canProceed: boolean;
  setCanProceed: (value: boolean) => void;
  Error: string | null;
  selectedCareer:Career[];
  setSelectedCareer: (value: Career[])=> void;
  AboutCareer:string;
  setAboutCareer:(value: string) => void

}

const CareerInput = ({ canProceed, setCanProceed, Error,selectedCareer,setSelectedCareer,AboutCareer,setAboutCareer }: CareerInputProps) => {  
  const [inputValue, setInputValue] = useState('');
  const suggestedCareer = [
    { id: 1, name: 'FAANG' },
    { id: 2, name: 'StartUps' },
    { id: 3, name: 'Self-Employed' },
    { id: 4, name: 'FreeLancer' },
    { id: 5, name: 'Research' },

  ];

  useEffect(() => {
      setAboutCareer(inputValue);
  }, [inputValue]);
  const [availableCareer, setAvailableCareer] = useState<Career[]>(suggestedCareer);

  useEffect(() => {
    setCanProceed(selectedCareer.length > 0);
    if(selectedCareer.length>0){
      setCanProceed(true);
    }
  }, [selectedCareer, setCanProceed]);

  const handleAddCareer = (Career: Career) => {
    if (!selectedCareer.some(s => s.id === Career.id)) {
      setSelectedCareer([...selectedCareer, Career]);
      setAvailableCareer(prev => prev.filter(s => s.id !== Career.id));

    }
  };

  

  const handleRemoveCareer = (CareerId: string | number) => {
    const CareerToRemove = selectedCareer.find(Career => Career.id === CareerId);
    
    if (CareerToRemove) {
      setSelectedCareer(selectedCareer.filter(Career => Career.id !== CareerId));
      setAvailableCareer(prev => [...prev, CareerToRemove]);
    }
  };



  return (
    <div className="p-4 bg-black text-white w-[100%]">
      <div className="space-y-2">
        <h2 className="text-md w-[100%]">Your Career</h2>
        
        <div className="relative flex items-center gap-2">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter'}
            placeholder="Enter About Your Career and What is your goal in crewo"
            className="w-full md:w-[650px] md:h-[150px] p-2 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 resize-none"
          />
        </div>

        

        <div className="flex flex-wrap gap-2 mt-2">
          {selectedCareer.map(Career => (
            <div
              key={Career.id}
              className="flex text-base items-center gap-2 px-3 py-1 bg-transparent border border-gray-700 rounded-full"
            >
              <span>{Career.name}</span>
              <button
                onClick={() => handleRemoveCareer(Career.id)}
                className="focus:outline-none"
                aria-label={`Remove ${Career.name}`}
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-sm text-gray-400 mb-2 max-w-[400px]">Suggested Career</h3>
          <div className="flex flex-wrap gap-2 max-w-[650px]">
            {availableCareer.map(Career => (
              <button
                key={Career.id}
                onClick={() => handleAddCareer(Career)}
                className="flex items-center gap-2 px-3 py-1 bg-transparent border border-gray-700 rounded-full hover:border-gray-500 focus:outline-none"
              >
                <span>+</span>
                <span>{Career.name}</span>
              </button>
            ))}
          </div>
        </div>
        <div className='mt-2 min-h-[30px]'>
          {!canProceed && Error !=null && AboutCareer.length<5 && <p className="text-red-500">{Error}</p>}
        </div>
      </div>
    </div>
  );
};

export default CareerInput;