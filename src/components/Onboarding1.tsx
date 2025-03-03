import SkillInput from "./SkillInput";

interface Skill {
    id: number | string;
    name: string;
    
  }
interface Onboarding1Props {
    canProceed: boolean;
    setCanProceed: (value: boolean) => void;
    error: string | null;
    selectedSkills:Skill[];
    setSelectedSkills: (value: Skill[])=> void;
}

function Onboarding1({ canProceed, setCanProceed, error,selectedSkills,setSelectedSkills }: Onboarding1Props) {
    return (
        <div className="flex">
            <div className="flex flex-col items-center justify-center lg:w-1/2 text-white text-md mb-5">
                <div className="self-start p-4 space-y-2">
                    <p className="text-[14px]">1/4</p>
                    <h2 className="text-3xl">What work are you here to do?</h2>
                    <p>Your skills help us recommend the best projects for you.</p>
                </div>
                <SkillInput canProceed={canProceed} setCanProceed={setCanProceed} Error={error} selectedSkills={selectedSkills}
                        setSelectedSkills={setSelectedSkills} />
                
            </div>
            <div></div>
        </div>
    );
}

export default Onboarding1;