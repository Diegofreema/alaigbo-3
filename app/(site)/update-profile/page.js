import UpdateProfile from '@/components/form/UpdateProfile';
import { fetchInvestor, fetchUserMember } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';

const Update = async () => {
  const { id } = await currentUser();
  const isMember = await fetchUserMember(id);
  const isInvestor = await fetchInvestor(id);
  if (!isMember.isOnboarded && !isInvestor.isOnboarded) {
    return redirect('/accountType');
  }
  const userData = {
    imgUrl: isMember?.imgUrl,
    firstName: isMember?.firstName,
    lastName: isMember?.lastName,
    middleName: isMember?.middleName,
    state: isMember?.state,
    lga: isMember?.lga,
    town: isMember?.town,
    placeOfBirth: isMember?.placeOfBirth,
    village: isMember?.village,
    familyName: isMember?.familyName,
    gender: isMember?.gender,
    dob: isMember?.dob,
    email: isMember?.email,
    number: isMember?.number,
    interests: isMember?.interests,
    bio: isMember?.bio,
    group: isMember?.group,
  };

  return (
    <div className="min-h-screen py-[150px] w-[95%] md:w-[85%] mx-auto">
      <h1 className="text-5xl font-bold text-start">Update your account</h1>

      <div>
        <UpdateProfile userData={userData} />
      </div>
    </div>
  );
};

export default Update;
