import React from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";
import Dropdown from './DropDown';
import DatePicker from './DatePicker';
import Input from './Input';

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
  educationRecords: EducationRecord[];
  setEducationRecords: (value: EducationRecord[]) => void;
  NextClicked: boolean;
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

  const DeleteEducationalRecord = (recordId: number) => {
    setEducationRecords(educationRecords.filter((record) => record.id != recordId));
  }

  function toRoman(num: number) {
    const romanMap = [
      { value: 1000, numeral: "M" },
      { value: 900, numeral: "CM" },
      { value: 500, numeral: "D" },
      { value: 400, numeral: "CD" },
      { value: 100, numeral: "C" },
      { value: 90, numeral: "XC" },
      { value: 50, numeral: "L" },
      { value: 40, numeral: "XL" },
      { value: 10, numeral: "X" },
      { value: 9, numeral: "IX" },
      { value: 5, numeral: "V" },
      { value: 4, numeral: "IV" },
      { value: 1, numeral: "I" }
    ];

    let result = "";
    for (const { value, numeral } of romanMap) {
      while (num >= value) {
        result += numeral;
        num -= value;
      }
    }
    return result;
  }

  return (
    <div className="boxWithBorder rounded-lg p-6 mb-6 text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium">Education Record {toRoman(recordNumber)}</h2>
        <IoCloseCircleOutline 
          size={28} 
          color='white' 
          className='cursor-pointer hover:scale-105 transition-all ease-in-out duration-500'
          onClick={() => DeleteEducationalRecord(record.id)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          value={record.institution}
          onChange={(value) => onChange('institution', value)}
          label="Institution Name"
          placeholder="e.g., Harvard University"
          required={true}
          error={record.institution === '' && NextClicked ? 'Institution name is required.' : ''}
          className="w-full"
        />

        <Input
          value={record.degree}
          onChange={(value) => onChange('degree', value)}
          label="Degree/Course Name"
          placeholder="e.g., Bachelor's in Computer Science"
          required={true}
          error={record.degree === '' && NextClicked ? 'Degree name is required.' : ''}
          className="w-full"
        />

        <Input
          value={record.field}
          onChange={(value) => onChange('field', value)}
          label="Field of Study"
          placeholder="e.g., Software Engineering"
          required={true}
          error={record.field === '' && NextClicked ? 'Field of study is required.' : ''}
          className="w-full"
        />

        <Dropdown
          options={degreeTypes}
          selectedValue={record.degreeType}
          onSelect={(value) => onChange('degreeType', value)}
          placeholder="Select degree type"
          label="Degree Type"
          required={true}
          error={record.degreeType === '' && NextClicked ? 'Degree type is required.' : ''}
        />

        <DatePicker
          selectedDate={record.startDate}
          onDateChange={(value) => onChange('startDate', value)}
          label="Start Date"
          required={true}
          error={record.startDate === '' && NextClicked ? 'Start date is required.' : ''}
        />

        <DatePicker
          selectedDate={record.endDate}
          onDateChange={(value) => onChange('endDate', value)}
          label="End Date"
          required={true}
          error={record.endDate === '' && NextClicked ? 'End date is required.' : ''}
        />

        <div className="md:col-span-2">
          <Input
            value={record.grade}
            onChange={(value) => onChange('grade', value)}
            label="Grade/Percentage (Optional)"
            placeholder="e.g., 3.8 GPA or 85%"
            required={true}
            error={record.grade === '' && NextClicked ? 'Grade is required.' : ''}
            className="w-full"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-2 text-sm font-medium">
            Relevant Courses or Projects
          </label>
          <textarea
            placeholder="List any coursework, certifications, or projects relevant to your education"
            value={record.relevantCourses}
            onChange={(e) => onChange('relevantCourses', e.target.value)}
            className="w-full p-3 pb-0 border border-gray-500 rounded-md h-32"
          />
          {record.relevantCourses === '' && NextClicked && (
            <p className="text-red-500">Relevant courses is required.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationInputs;