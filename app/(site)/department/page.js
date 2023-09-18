import SemiHeader from '@/UI/SemiHeader';
import DepartmentCard from '@/components/mantine/DepartmentCard';
const departments = [
  { department: 'Education', id: 'education' },
  { department: 'Agriculture', id: 'agriculture' },
  { department: 'ICT', id: 'ict' },
  { department: 'Manufacture', id: 'manufacture' },
  { department: 'Research', id: 'research' },
  { department: 'Creative Economy', id: 'creative' },
  { department: 'Entertainment', id: 'entertainment' },
  { department: 'Sports Development', id: 'sports' },
  { department: 'Transportation', id: 'transportation' },
  { department: 'Housing', id: 'housing' },
  { department: 'Urban Plan', id: 'urban' },
  { department: 'Media', id: 'media' },
  { department: 'Healthcare', id: 'healthcare' },
  { department: 'Mining', id: 'mining' },
  { department: 'Tourism', id: 'tourism' },
  { department: 'Politics', id: 'politics' },
  { department: 'Finance', id: 'finance' },
  { department: 'Legal', id: 'legal' },
  { department: 'Security', id: 'security' },
];
const Department = async () => {
  return (
    <div className="bg-[#1b1b1b] min-h-screen md:py-[100px] py-[80px]">
      <SemiHeader>Departments</SemiHeader>
      <div className="w-[98%] sm:w-[95%] md:w-[75%] lg:w-[60%] mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        {departments.map((department) => (
          <DepartmentCard key={department} item={department} />
        ))}
      </div>
    </div>
  );
};

export default Department;
