import { useState } from 'react';
import { X } from 'lucide-react';
import { IoIosAddCircleOutline } from "react-icons/io";

interface Skill {
  id: number | string;
  name: string;
}




const SkillsInput = () => {
  const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);
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

  const handleAddSkill = (skill: Skill) => {
    if (!selectedSkills.find(s => s.id === skill.id)) {
      setSelectedSkills([...selectedSkills, skill]);
      setSuggestedSkills(suggestedSkills.filter(s => s.id !== skill.id));
    }
  };
  const handleinputAddSill = () => { 
    console.log(inputValue);
    let data = suggestedSkills.find(skill => skill.name.toLowerCase() === inputValue.toLowerCase())
    if(data && (selectedSkills.find(skill => skill.id === data.id || skill.name === inputValue))){
      console.log(data);
      console.log(selectedSkills);
      console.log('Skill already added');
      console.log(suggestedSkills.find(skill => skill.id === data.id));
      return null
    }
    if(data){
      setSelectedSkills([...selectedSkills, { id:data.id , name: data.name }]);
        setInputValue('');
      } else {
        setSelectedSkills([...selectedSkills, { id: suggestedSkills.length + 1, name: inputValue }]);
        setSuggestedSkills([...suggestedSkills, { id: suggestedSkills.length + 1, name: inputValue }]);
        setInputValue('');
      }
    };


  const handleRemoveSkill = (skillId: string | number) => {
    setSelectedSkills(selectedSkills.filter(skill => skill.id !== skillId));
    setSuggestedSkills([selectedSkills.find(skill => skill.id === skillId)!,...suggestedSkills ]);
  };

  const filteredSkills = suggestedSkills.filter(
    (skill) =>
      skill.name.toLowerCase().includes(inputValue.toLowerCase()) &&
      !selectedSkills.some((selected) => selected.id === skill.id)
  );

  return (
    <div className="p-4 bg-black text-white">
      <div className="space-y-2">
        <h2 className="text-md">Your skills</h2>
        
        <div className="relative flex items-center gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleinputAddSill()}
          placeholder="Enter skills here"
          className="w-full p-2 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500"
        />
        {inputValue.length > 0 && (
          <button className="absolute right-2 flex items-center focus:outline-none" onClick={handleinputAddSill}>
            <span><IoIosAddCircleOutline size={24}/></span>
          </button>
        )}
      </div>
      <div className='flex relative items-center h-[0px]'>
      {inputValue && filteredSkills.length > 0 && (
          <div className="mt-2 max-h-40 overflow-auto bg-gray-700 rounded-md p-2 absolute w-full z-10 top-0 no-scrollbar">
            {filteredSkills.map((skill) => (
              <button
                key={skill.id}
                onClick={() => {
                  handleAddSkill(skill);
                  setInputValue('');}
                }
                className="w-full text-left p-2 hover:bg-gray-600 focus:outline-none focus:bg-gray-600 rounded-md"
              >
                {skill.name}
              </button>
            ))}
          </div>
        )}
      </div>


        <div className="flex flex-wrap gap-2">
          {selectedSkills.map(skill => (
            <div
              key={skill.id}
              className="flex text-base items-center gap-2 px-3 py-1 bg-transparent border border-gray-700 rounded-full"
            >
              <span>{skill.name}</span>
              <button
                onClick={() => handleRemoveSkill(skill.id)}
                className="focus:outline-none"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-sm text-gray-400 mb-2">Suggested skills</h3>
          <div className="flex flex-wrap gap-2">
            {suggestedSkills.slice(0,10).map(skill => (
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
      </div>
    </div>
  );
};

export default SkillsInput;