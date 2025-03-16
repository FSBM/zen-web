import CareerInput from "./CareerInput";

interface CareerGoals {
    id: number | string;
    name: string;
    
  }
interface Onboarding4Props {
    canProceed: boolean;
    setCanProceed: (value: boolean) => void;
    error: string | null;
    selectedCareer:CareerGoals[];
    setSelectedCareer: (value: CareerGoals[])=> void;
    AboutCareer:string;
    setAboutCareer:(value: string) => void
}

function Onboarding1({ canProceed, setCanProceed, error,selectedCareer,setSelectedCareer,AboutCareer,setAboutCareer }: Onboarding4Props) {
    return (
        <div className="flex">
            <div className="flex flex-col items-center justify-center lg:w-1/2 text-white text-md mb-5">
                <div className="self-start p-4 space-y-2">
                    <p className="text-[14px]">4/4</p>
                    <h2 className="text-3xl">What are your career goals?</h2>
                    <p>Let us know what you want to achieve on Crewo.</p>
                </div>
                <CareerInput canProceed={canProceed} 
                setCanProceed={setCanProceed} 
                Error={error} 
                selectedCareer={selectedCareer}
                        setSelectedCareer={setSelectedCareer} 
                        AboutCareer={AboutCareer} 
                        setAboutCareer={setAboutCareer}
                        />
                
            </div>
            <div></div>
        </div>
    );
}

export default Onboarding1;