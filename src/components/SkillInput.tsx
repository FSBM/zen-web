import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { IoIosAddCircleOutline } from "react-icons/io";
import { InputError } from './Error';

interface Skill {
  id: number | string;
  name: string;
  
}

interface SkillsInputProps {
  canProceed: boolean;
  setCanProceed: (value: boolean) => void;
  Error: string | null;
  selectedSkills:Skill[];
  setSelectedSkills: (value: Skill[])=> void;

}

const SkillsInput = ({ canProceed, setCanProceed, Error,selectedSkills,setSelectedSkills }: SkillsInputProps) => {  
  const [inputValue, setInputValue] = useState('');
  const [suggestedSkills, setSuggestedSkills] = useState<Skill[]>([
    { id: 1, name: 'React' },
    { id: 2, name: 'Vue' },
    { id: 3, name: 'Angular' },
    { id: 4, name: 'Node' },
    { id: 5, name: 'Express' },
    { id: 6, name: 'MongoDB' },
    { id: 7, name: 'Postgres' },
    { id: 8, name: 'GraphQL' },
    { id: 9, name: 'REST API' },
    { id: 10, name: 'TypeScript' },
    { id: 11, name: 'JavaScript' },
    { id: 12, name: 'HTML' },
    { id: 13, name: 'CSS' },
    { id: 14, name: 'SASS' },
    { id: 15, name: 'Tailwind CSS' },
    { id: 16, name: 'Bootstrap' },
    { id: 17, name: 'Material UI' },
    { id: 18, name: 'Chakra UI' },
    { id: 19, name: 'Ant Design' },
    { id: 20, name: 'Figma' },
    { id: 21, name: 'Adobe XD' },
    { id: 22, name: 'Sketch' },
    { id: 23, name: 'InVision' },
    { id: 24, name: 'Zeplin' },
    { id: 25, name: 'Jira' },
    { id: 26, name: 'Trello' },
    { id: 27, name: 'Asana' },
    { id: 28, name: 'Slack' },
    { id: 29, name: 'Discord' },
    { id: 30, name: 'Zoom' },
    { id: 31, name: 'Google Meet' },
    { id: 32, name: 'Microsoft Teams' },
    { id: 33, name: 'WebRTC' }
  ]);

  const [availableSkills, setAvailableSkills] = useState<Skill[]>(suggestedSkills);

  useEffect(() => {
    setCanProceed(selectedSkills.length > 0);
    if(selectedSkills.length>0){
      setCanProceed(true);
      setAvailableSkills(prev=> prev.filter(items => !selectedSkills.some(s => s.id === items.id)));
    }
  }, [selectedSkills, setCanProceed]);



  const handleAddSkill = (skill: Skill) => {
    if (!selectedSkills.some(s => s.id === skill.id)) {
      setSelectedSkills([...selectedSkills, skill]);
      setAvailableSkills(prev => prev.filter(s => s.id !== skill.id));
      setInputValue('');

    }
  };

  const handleInputAddSkill = () => {
    if (!inputValue.trim()) return;
    
    const normalizedInput = inputValue.trim().toLowerCase();
    
   
    const existingSkill = availableSkills.find(
      skill => skill.name.toLowerCase() === normalizedInput
    );


    const isAlreadySelected = selectedSkills.some(
      skill => skill.name.toLowerCase() === normalizedInput
    );

    if (isAlreadySelected) {
      return; 
    }

    if (existingSkill) {

      handleAddSkill(existingSkill);
    } else {

      const newId = Math.max(...[...selectedSkills, ...availableSkills].map(s => Number(s.id)), 0) + 1;
      const newSkill = { id: newId, name: inputValue.trim() };
      
      setSelectedSkills([...selectedSkills, newSkill]);
      setSuggestedSkills(prev => [...prev, newSkill]);
      setInputValue('');
    }
  };

  const handleRemoveSkill = (skillId: string | number) => {
    const skillToRemove = selectedSkills.find(skill => skill.id === skillId);
    
    if (skillToRemove) {
      setSelectedSkills(selectedSkills.filter(skill => skill.id !== skillId));
      setAvailableSkills(prev => [skillToRemove,...prev]);
    }
  };

  const filteredSkills = availableSkills.filter(
    skill => skill.name.toLowerCase().includes(inputValue.toLowerCase())
  ).slice(0, 10); 

  return (
    <div className="p-4 bg-black text-white">
      <div className="space-y-2">
        <h2 className="text-md">Your skills</h2>
        
        <div className="relative flex items-center gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleInputAddSkill()}
            placeholder="Enter skills here"
            className="w-full p-2 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500"
          />
          {inputValue.trim().length > 0 && (
            <button 
              className="absolute right-2 flex items-center focus:outline-none" 
              onClick={handleInputAddSkill}
              aria-label="Add skill"
            >
              <IoIosAddCircleOutline size={24}/>
            </button>
          )}
        </div>

        <div className="relative">
          {inputValue.trim() && filteredSkills.length > 0 && (
            <div className="mt-2 max-h-40 overflow-auto bg-gray-700 rounded-md p-2 absolute w-full z-10 no-scrollbar">
              {filteredSkills.map((skill) => (
                <button
                  key={skill.id}
                  onClick={() => handleAddSkill(skill)}
                  className="w-full text-left p-2 hover:bg-gray-600 focus:outline-none focus:bg-gray-600 rounded-md"
                >
                  {skill.name}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {selectedSkills.map(skill => (
            <div
              key={skill.id}
              className="flex text-base items-center gap-2 px-3 py-1 bg-transparent border border-gray-700 rounded-full"
            >
              <span>{skill.name}</span>
              <button
                onClick={() => handleRemoveSkill(skill.id)}
                className="focus:outline-none"
                aria-label={`Remove ${skill.name}`}
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-sm text-gray-400 mb-2">Suggested skills</h3>
          <div className="flex flex-wrap gap-2">
            {availableSkills.slice(0, 10).map(skill => (
              <button
                key={skill.id}
                onClick={() => handleAddSkill(skill)}
                className="flex items-center gap-2 px-3 py-1 bg-transparent border border-gray-700 rounded-full hover:border-gray-500 focus:outline-none"
              >
                <span>+</span>
                <span>{skill.name}</span>
              </button>
            ))}
          </div>
        </div>
        <div className='mt-2 min-h-[30px]'>
          {!canProceed && Error !=null && <InputError error={Error}/> }
        </div>
      </div>
    </div>
  );
};

export default SkillsInput;