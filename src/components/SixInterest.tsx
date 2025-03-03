import { IconType } from "react-icons";
import { FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import { BsGearFill, BsShieldLockFill } from "react-icons/bs";
import { AiOutlineRobot } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";

interface InterestCard {
    id:number;
    icon: IconType;
    name: string;
    description?: string;
}

interface Onboarding2Props {
    selectedInterest: InterestCard[];
    setSelectedInterest: (value: InterestCard[]) => void
}

export default function SixInterest({ selectedInterest, setSelectedInterest }: Onboarding2Props) {


    const interests: InterestCard[] = [
        {
            id: 1,
            icon: FaLaptopCode,
            name: "Web Development",
            description: "Building responsive, modern websites and web applications"
        },
        {
            id: 2,
            icon: FaMobileAlt,
            name: "Mobile Development",
            description: "Creating native and cross-platform mobile applications"
        },
        {
            id:3,
            icon: AiOutlineRobot,
            name: "AI & Machine Learning",
            description: "Implementing intelligent algorithms and data models"
        },
        {
            id:4,
            icon: BsGearFill,
            name: "DevOps",
            description: "Streamlining development operations and deployment"
        },
        {
            id:5,
            icon: BsShieldLockFill,
            name: "CyberSecurity",
            description: "Protecting systems and data from digital threats"
        },
        {
            id:6,
            icon: MdDesignServices,
            name: "UI/UX Design",
            description: "Creating intuitive and visually appealing user experiences"
        }
    ];

    const handleInterestClick = (id:number) => {
        const selected = interests.find((interest) => interest.id === id);
        if (selected) {
            if(selectedInterest.find((interest)=>interest.id===id)){
                setSelectedInterest(selectedInterest.filter((interest)=>interest.id!=id))
              
            }else{
                setSelectedInterest([...selectedInterest, selected])
              
            }
        }
    };

    return (
        <div className="bg-black ">
            <div className="max-w-6xl p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {interests.map((interest) => (
                        <div
                            key={interest.id}
                            onClick={() => handleInterestClick(interest.id)}
                            className={`border ${selectedInterest.find((i) => i.id === interest.id) ? "border-purple-400": "border-gray-700" } rounded-lg p-6 cursor-pointer  hover:border-gray-500
                            transition-all duration-200 ease-in-out
                            `}

                        >
                            <div className="flex items-center mb-4">
                                <div className={`w-12 h-12 flex items-center justify-center border ${selectedInterest.find((i) => i.id === interest.id) ? "border-purple-400": "border-gray-700" } rounded-lg
                                transition-all duration-200 ease-in-out
                                `}>
                                    <interest.icon className="text-white text-1xl" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-white text-[16px]">{interest.name}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}