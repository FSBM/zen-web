import EducationInputs from "./EducationInputs";


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

interface Onboarding3Props {

    educationRecords: EducationRecord[];
    setEducationRecords: (value: EducationRecord[]) => void;
}
export default function Onboarding3({ educationRecords, setEducationRecords }: Onboarding3Props) {

    const addEducationRecord = () => {
        setEducationRecords([
            ...educationRecords,
            {
                id: (educationRecords.length>0)?educationRecords[educationRecords.length - 1].id + 1:1,
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
        console.log(educationRecords)
    };

    const updateEducationRecord = (id: number, field: string, value: string) => {

        setEducationRecords(
            educationRecords.map((record) =>
                record.id === id ? { ...record, [field]: value } : record
            )
        );
    };

    return (
        <div className="px-4 py-6 max-w-4xl p-4 text-white">
            <div className="mb-6 space-y-2">
                <div className="text-[14px]">3/4</div>
                <h1 className="text-3xl font-bold mb-2">What's your educational background?</h1>
                <p className="text-gray-600">
                    Add multiple entries, including certifications and achievements.
                </p>
            </div>

            {educationRecords.map((record, index) => (

                <EducationInputs
                    key={record.id}
                    recordNumber={index + 1}
                    record={record}
                    onChange={(field, value) => updateEducationRecord(record.id, field, value)}
                    educationRecords={educationRecords}
                    setEducationRecords={setEducationRecords}
                />
            ))}

            <button
                onClick={addEducationRecord}
                className="flex items-center mt-4 px-4 py-3 border border-gray-300 rounded-md text-sm font-medium"
            >
                <span className="mr-2">+</span> Add Another Education record
            </button>
        </div>
    );





}