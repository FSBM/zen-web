import Dropdown from './DropDown';
import DatePicker from './DatePicker';
import Input from './Input';

interface UserPrimary {
  name: string;
  gender: string;
  DOB: string;
}

interface PersonalDetailsProps {
  userPrimary: UserPrimary;
  setUserPrimary: (value: UserPrimary) => void;
  NextClicked: boolean;
}

export default function PersonalDetails({ userPrimary, setUserPrimary, NextClicked }: PersonalDetailsProps) {
  const genders = ["Male", "Female", "other"];

  return (
    <div className="w-full mb-1">
      <h1 className="text-3xl">Personal Details</h1>
      <p className="pb-3">Tell us about yourself</p>
      <div className="flex flex-col md:flex-row gap-3 md:items-center">
        <Input 
          value={userPrimary.name}
          onChange={(name) => setUserPrimary({ ...userPrimary, name })}
          label="Name"
          placeholder="e.g., John Doe"
          required={true}
          error={userPrimary.name === '' && NextClicked ? 'Name is required.' : ''}
        
        />
       
        <Dropdown
          options={genders}
          selectedValue={userPrimary.gender}
          onSelect={(gender) => setUserPrimary({ ...userPrimary, gender })}
          placeholder="Select a gender"
          label="Gender"
          error={''}
        />
        <DatePicker
          selectedDate={userPrimary.DOB}
          onDateChange={(DOB: any) => setUserPrimary({ ...userPrimary, DOB })}
          label="Date of Birth"
          required={true}
          error={''}
        />
      </div>
    </div>
  );
}