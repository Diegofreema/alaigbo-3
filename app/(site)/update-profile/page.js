import AccountProfile from '@/components/form/AccountProfile';

const Onboard = async () => {
  return (
    <div className="min-h-screen py-[150px] w-[95%] md:w-[85%] mx-auto">
      <h1 className="text-5xl font-bold text-start">Update your account</h1>

      <div>
        <AccountProfile />
      </div>
    </div>
  );
};

export default Onboard;
