import React from 'react';
import { IconType } from 'react-icons';
import { FiEdit2 } from 'react-icons/fi';

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

interface OnboardingFinalProps {
  selectedSkills: Skill[];
  selectedInterest: InterestCard[];
  educationRecords: EducationRecord[];
  selectedCareer: Career[];
  AboutCareer: string;
  handleEditSection: (section: string) => void;
  handleSubmit: () => void;
  userPrimary:UserPrimary;
}

const OnboardingFinal: React.FC<OnboardingFinalProps> = ({
  selectedSkills,
  selectedInterest,
  educationRecords,
  selectedCareer,
  AboutCareer,
  handleEditSection,
  userPrimary
}) => {
  return (
    <div className="flex flex-col items-center p-6 max-w-4xl mx-auto w-full text-white">
      <div className="w-full mb-8">
        <h1 className="text-2xl font-semibold mb-2">Review your profile</h1>
        <p className="text-lg text-gray-400">
          Ensure everything looks good before proceeding to your dashboard.
        </p>
      </div>
      {/* Primary user detailss */}
      <div className="w-full  rounded-lg p-6 mb-6 border border-gray-500">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium">User Details</h2>
          <button 
            onClick={() => handleEditSection('interests')} 
            className="text-gray-400 hover:text-white"
          >
            <FiEdit2 size={20} />
          </button>
        </div>
        <div className="flex flex-wrap gap-4">
          {userPrimary  &&
          <div className='flex flex-col md:flex-row md:gap-5 self-start pr-10 w-[80%]'>
            <p>User Name: <b className='font-semibold'>{userPrimary.name}</b></p>
            {userPrimary.gender !=='' && (<p>Gender: <b className='font-semibold'>{userPrimary.gender}</b></p>)}
            <p>Date of Birth: <b className='font-semibold'>{userPrimary.DOB}</b></p>
          </div>
          }
        </div>
      </div>

      {/* Interests Section */}
      <div className="w-full  rounded-lg p-6 mb-6 border border-gray-500">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium">Interests</h2>
          <button 
            onClick={() => handleEditSection('interests')} 
            className="text-gray-400 hover:text-white"
          >
            <FiEdit2 size={20} />
          </button>
        </div>
        <div className="flex flex-wrap gap-4">
          {selectedInterest?.map((interest) => (
            <div key={interest.id} className="flex items-center gap-2 border border-white rounded-full px-4 py-2">
              {interest.icon && <interest.icon className="text-xl" />}
              <span>{interest.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="w-full  rounded-lg p-6 mb-6 border border-gray-500">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium">Skills</h2>
          <button 
            onClick={() => handleEditSection('skills')} 
            className="text-gray-400 hover:text-white"
          >
            <FiEdit2 size={20} />
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {selectedSkills.map((skill) => (
            <span 
              key={skill.id} 
              className="px-4 py-2 border border-white rounded-full text-sm"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="w-full  rounded-lg p-6 mb-6 border border-gray-500">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium">Education</h2>
          <button 
            onClick={() => handleEditSection('education')} 
            className="text-gray-400 hover:text-white"
          >
            <FiEdit2 size={20} />
          </button>
        </div>
        <div className="space-y-4">
          {(educationRecords.length>0)?educationRecords.map((edu) => (
            edu.institution && (
              <div key={edu.id} className="p-4  rounded-md border border-gray-500">
                <h3 className="text-lg font-medium">{edu.degree} {edu.field}</h3>
                <p className="text-gray-400">
                  {edu.institution} - {edu.startDate} to {edu.endDate}
                </p>
              </div>
            )
          )):
            <p className="text-white">No education records found.</p>
          }
        </div>
      </div>

      {/* Career Goals Section */}
      <div className="w-full  rounded-lg p-6 mb-8 border border-gray-500">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium">Career Goals</h2>
          <button 
            onClick={() => handleEditSection('career')} 
            className="text-gray-400 hover:text-white"
          >
            <FiEdit2 size={20} />
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {selectedCareer.map((career) => (
              <span 
                key={career.id} 
                className="px-4 py-2 border border-white rounded-full flex items-center gap-2 text-sm"
              >
                {career.name}
              </span>
            ))}
          </div>
          <p className="text-gray-300 px-3 "><p className='text-white inline'>Career Goals: </p>{AboutCareer}</p>
        </div>
      </div>

      {/* Submit Button */}

    </div>
  );
};

export default OnboardingFinal;