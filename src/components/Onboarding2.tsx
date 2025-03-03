import { IconType } from "react-icons";
import SixInterest from "./SixInterest";


interface InterestCard {
    id:number;
    icon: IconType;
    name: string;
    description?: string;
    
}
interface Onboarding2Props{
    selectedInterest: InterestCard[];
    setSelectedInterest: (value: InterestCard[])=>void;
    canProceed : boolean
    Error: string  | null
}

function Onboarding2({selectedInterest,setSelectedInterest,Error}:Onboarding2Props) {
    return (
        <div className="flex">
            <div className="flex flex-col justify-center lg:w-2/3 text-white text-md mb-5">
                <div className="self-start p-4 space-y-2">
                    <p className="text-[14px]">2/4</p>
                    <h2 className="text-3xl">Tell us what excites you </h2>
                    <p>This helps us match you with projects and teams that align with your passion.</p>
                </div>
                <SixInterest selectedInterest={selectedInterest} setSelectedInterest={setSelectedInterest}/>
                {Error !== null && <p className="text-red-500 p-4">{Error}</p>}
                
            </div>
            <div></div>
        </div>
    );
}

export default Onboarding2;