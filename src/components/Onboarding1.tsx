import SkillInput from "./SkillInput";
import PersonalDetails from "./personalDetails";

interface Skill {
    id: number | string;
    name: string;
    
  }

interface UserPrimary{
    name:string;
    gender:string;
    DOB:string;
}
interface Onboarding1Props {
    canProceed: boolean;
    setCanProceed: (value: boolean) => void;
    error: string | null;
    selectedSkills:Skill[];
    setSelectedSkills: (value: Skill[])=> void;
    userPrimary:UserPrimary
    setUserPrimary: (value: UserPrimary)=>void;
    NextClicked:boolean
}

function Onboarding1({ canProceed, setCanProceed, error,selectedSkills,setSelectedSkills,userPrimary,setUserPrimary,NextClicked }: Onboarding1Props) {
    return (
        <div className="flex">
            <div className="flex flex-col items-center justify-center lg:w-1/2 text-white text-md mb-5">
                <div className="self-start p-4 space-y-2 w-full">
                    <p className="text-[14px]">1/4</p>
                    <div className="mb-2">
                    <PersonalDetails userPrimary={userPrimary} setUserPrimary={setUserPrimary}
                    NextClicked={NextClicked}/>
                    </div>
                </div>
                <div className="self-start">
                <div className="px-4">
                <h2 className="text-3xl ">What work are you here to do?</h2>
                <p className="text-gray-400"> Your skills help us recommend the best projects for you.</p>
                </div>
                <SkillInput canProceed={canProceed} setCanProceed={setCanProceed} Error={error} selectedSkills={selectedSkills}
                        setSelectedSkills={setSelectedSkills} />
                </div>
                
            </div>
            <div></div>
        </div>
    );
}

export default Onboarding1;