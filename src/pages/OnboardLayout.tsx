import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Onboarding1 from "../components/Onboarding1";
import Onboarding2 from "../components/Onboarding2";
import { IconType } from "react-icons";
import Onboarding3 from "../components/Onboarding3";
import Onboarding4 from "../components/Onboarding4";
import OnboardingFinal from "../components/OnboardingFinal";

interface Skill {
    id: number | string;
    name: string;
}
interface UserPrimary{
    name:string;
    gender: string;
    DOB:string;
}

interface InterestCard {
    id: number;
    icon: IconType;
    name: string;
    description?: string;
}

interface EducationRecord {
    id: number;
    institution: string;
    degree: string;
    field: string;
    degreeType: string;
    startDate: string;
    endDate: string;
    grade: string;
    relevantCourses: string;
}

interface Career {
    id: number | string;
    name: string;
}

function OnboardLayout() {
    const [UserPrimary, setUserPrimary] = useState<UserPrimary>({
        name: '',
        gender: '',
        DOB: '',
    })
    const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);
    const [selectedInterest, setSelectedInterest] = useState<InterestCard[]>([]);
    const [educationRecords, setEducationRecords] = useState<EducationRecord[]>([
        {
            id: 1,
            institution: '',
            degree: '',
            field: '',
            degreeType: '',
            startDate: '',
            endDate: '',
            grade: '',
            relevantCourses: '',
        },
    ]);
    const [isNextClicked, SetNextClicked] = useState(false);
    const [selectedCareer, setSelectedCareer] = useState<Career[]>([]);
    const [AboutCareer, setAboutCareer] = useState<string>('');

    const [stepCount, setStepCount] = useState(0);
    const [canProceed, setCanProceed] = useState(false);
    const [validationError, setValidationError] = useState<string | null>(null);

    const handleLeftClick = () => {
        setStepCount(stepCount - 1);
        setValidationError(null);
    };

    const handleRightClick = () => {
        if (stepCount === 0 && !canProceed) {
            setValidationError("Please select at least one skill to proceed");
            return;

        }
        else if(stepCount ===0 && UserPrimary.name===""){
            SetNextClicked(true);
            return
        }
        else if (stepCount === 1 && (selectedInterest === undefined || selectedInterest.length === 0)) {
            setValidationError("Please select at least one Interest to proceed");
            setCanProceed(false);
            return;
        }
        else if (stepCount === 2 
            &&
            educationRecords.length !== 0
            && (educationRecords.filter((record) => record.institution === '' || record.degree === '' || record.field === '' || record.degreeType === '' || record.startDate === '' || record.endDate === '').length > 0)) {
            console.log(educationRecords)
            console.log(educationRecords.filter((record) => record.institution === '' || record.degree === '' || record.field === '' || record.degreeType === '' || record.startDate === '' || record.endDate === ''))
            SetNextClicked(true);
            return;
        }
        else if ((stepCount === 3 && (selectedCareer === undefined || selectedCareer.length === 0 || AboutCareer.length < 4))) {
            setValidationError("Please select at least one Career and Your intention in crewo to proceed");
            setCanProceed(false);
            return;
        }
        setStepCount(stepCount + 1);
        setValidationError(null);
    };

    const handleEditSection = (section: string) => {
        switch (section) {
            case 'skills':
                setStepCount(0);
                break;
            case 'interests':
                setStepCount(1);
                break;
            case 'education':
                setStepCount(2);
                break;
            case 'career':
                setStepCount(3);
                break;
            default:
                break;
        }
    };

    const handleSubmit = () => {
        console.log("Submitting profile data:", {
            PrimaryUserDetails:UserPrimary,
            skills: selectedSkills,
            interests: selectedInterest,
            education: educationRecords,
            career: selectedCareer,
            careerGoals: AboutCareer
        });
        window.location.href = '/Dashboard';
        
    };

    useEffect(() => {
        if (selectedInterest != undefined && selectedInterest.length > 0) {
            setValidationError(null);
            setCanProceed(true);
        }
    }, [selectedInterest]);

    return (
        <div className="flex flex-col h-screen align-middle justify-between overflow-x-hidden">
            <Header />
            <div className="flex flex-col justify-between overflow-y-auto">
                {stepCount === 0 && (
                    <Onboarding1
                        userPrimary={UserPrimary}
                        setUserPrimary={setUserPrimary}
                        selectedSkills={selectedSkills}
                        setSelectedSkills={setSelectedSkills}
                        canProceed={canProceed}
                        setCanProceed={setCanProceed}
                        error={validationError}
                        NextClicked={isNextClicked}
                    />
                )}
                {stepCount === 1 && (
                    <Onboarding2
                        selectedInterest={selectedInterest || []}
                        setSelectedInterest={setSelectedInterest}
                        canProceed={canProceed}
                        Error={validationError}
                    />
                )}
                {stepCount === 2 && (
                    <div>
                        <Onboarding3
                            educationRecords={educationRecords}
                            setEducationRecords={setEducationRecords}
                            NextClicked={isNextClicked}
                        />
                    </div>
                )}
                {stepCount === 3 && (
                    <div>
                        <Onboarding4
                            selectedCareer={selectedCareer}
                            setSelectedCareer={setSelectedCareer}
                            canProceed={canProceed}
                            setCanProceed={setCanProceed}
                            error={validationError}
                            AboutCareer={AboutCareer}
                            setAboutCareer={setAboutCareer}
                        />
                    </div>
                )}
                {stepCount === 4 && (
                    <div>
                        <OnboardingFinal
                            userPrimary={UserPrimary}
                            selectedSkills={selectedSkills}
                            selectedInterest={selectedInterest || []}
                            educationRecords={educationRecords}
                            selectedCareer={selectedCareer}
                            AboutCareer={AboutCareer}
                            handleEditSection={handleEditSection}
                            handleSubmit={handleSubmit}
                        />
                    </div>
                )}
            </div>
            <Footer
                handleLeftClick={handleLeftClick}
                handleRightClick={stepCount === 4 ? handleSubmit : handleRightClick}
                leftDisabled={stepCount === 0}
                step={stepCount}
                isFinal = {stepCount === 4}
            />
        </div>
    );
}

export default OnboardLayout;