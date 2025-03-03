import React from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";
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

interface EducationInputsProps {
  recordNumber: number;
  record: EducationRecord;
  onChange: (field: string, value: string) => void;
  educationRecords:EducationRecord[];
  setEducationRecords:(value: EducationRecord[])=> void;
  NextClicked: boolean
}

const EducationInputs: React.FC<EducationInputsProps> = ({
  recordNumber,
  record,
  onChange,
  educationRecords,
  NextClicked,
  setEducationRecords
}) => {
  const degreeTypes = [
    `Associate's Degree`,
    `Bachelor's Degree`,
    `Master's Degree`,
    'Doctoral Degree',
    'Professional Degree',
    'Certificate',
    'Diploma',
    'Other',
  ];

  const DeleteEducationalRecord = (recordId:number) => {
    console.log(educationRecords)
    setEducationRecords(educationRecords.filter((record)=>record.id != recordId))
    
  }

  return (
    <div className="border border-gray-200 rounded-lg p-6 mb-6 text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium">Education Record {recordNumber}</h2>
        <IoCloseCircleOutline size={28} color='white' 
        onClick={()=>{
            DeleteEducationalRecord(record.id)
        }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 text-sm font-medium ">
            Institution Name
          </label>
          <input
            type="text"
            placeholder="e.g., Harvard University"
            value={record.institution}
            onChange={(e) => onChange('institution', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          {record.institution === '' &&  NextClicked && (
            <p className="text-red-500">Institution name is required.</p>
          )}
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
            Degree/Course Name
          </label>
          <input
            type="text"
            placeholder="e.g., Bachelor's in Computer Science"
            value={record.degree}
            onChange={(e) => onChange('degree', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          {
            record.degree === '' && NextClicked && (
              <p className="text-red-500">Degree name is required.</p>
            )
          }
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
            Field of Study
          </label>
          <input
            type="text"
            placeholder="e.g., Software Engineering"
            value={record.field}
            onChange={(e) => onChange('field', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          {
            record.field === '' && NextClicked && (
              <p className="text-red-500">Field of study is required.</p>
            )
          }
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
            Degree Type
          </label>
          <div className="relative">
            <select
              value={record.degreeType}
              onChange={(e) => onChange('degreeType', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md appearance-none pr-10"
            >
              <option value="" disabled>
                Select degree type
              </option>
              {degreeTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          {
            record.degreeType === '' && NextClicked && (
              <p className="text-red-500">Degree type is required.</p>
            )
          }
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
            Start Date
          </label>
          <div className="relative">
            <input
              type="date"
              value={record.startDate}
              onChange={(e) => onChange('startDate', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="dd/mm/yyyy"
            />
          </div>
          {
            record.startDate === '' && NextClicked && (
              <p className="text-red-500">Start date is required.</p>
            )
          }
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
            End Date
          </label>
          <div className="relative">
            <input
              type="date"
              value={record.endDate}
              onChange={(e) => onChange('endDate', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="dd/mm/yyyy"
            />
          </div>
          {
            record.endDate === '' && NextClicked && (
              <p className="text-red-500">End date is required.</p>
            )
          }
        </div>

        <div className="md:col-span-2">
          <label className="block mb-2 text-sm font-medium">
            Grade/Percentage (Optional)
          </label>
          <input
            type="text"
            placeholder="e.g., 3.8 GPA or 85%"
            value={record.grade}
            onChange={(e) => onChange('grade', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          {
            record.grade === '' && NextClicked && (
              <p className="text-red-500">Grade is required.</p>
            )
          }
        </div>

        <div className="md:col-span-2">
          <label className="block mb-2 text-sm font-medium">
            Relevant Courses or Projects
          </label>
          <textarea
            placeholder="List any coursework, certifications, or projects relevant to your education"
            value={record.relevantCourses}
            onChange={(e) => onChange('relevantCourses', e.target.value)}
            className="w-full p-3 pb-0 border border-gray-300 rounded-md h-32"
          />
          {
          record.relevantCourses === '' && NextClicked && (
            <p className="text-red-500">Relevant courses is required.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationInputs;