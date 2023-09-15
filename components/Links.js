'use client';
import { usePathname, useRouter } from 'next/navigation';
import NavLinks from './NavLinks';
import { useUser } from '@clerk/nextjs';

const Links = () => {
  const { user, isSignedIn } = useUser();
  const router = useRouter();
  const pathName = usePathname();
  if (!user?.id) {
    router.push('/sign-up');
  }

  const navLinks = [
    {
      title: 'ABSTRACT',
      link: '/abstract',
    },

    {
      title: 'EVENTS',
      link: '/event',
    },
    {
      title: 'SUMMIT BOOKING',
      link: '/booking',
    },
    {
      title: 'MEMBER REGISTRATION',
      link: '/member',
    },
    {
      title: 'INVESTOR REGISTRATION',
      link: '/investor',
    },
    {
      title: 'PROJECT',
      link: '/',
    },
    {
      title: 'DEPARTMENTS',
      link: '/department',
    },
  ];
  const data = {
    title: 'DASHBOARD',
    link: `/member/${user?.id}`,
  };
  const updateData = {
    title: 'UPDATE PROFILE',
    link: `/update-profile`,
  };
  return (
    <div className="menu-lg bg-[#373435] space-y-2 flex items-center flex-col justify-center h-screen absolute w-full top-0 -right-14 -translate-x-[50px] bottom-0">
      {navLinks.map((item, i) => (
        <NavLinks key={i} item={item} />
      ))}

      {isSignedIn && <NavLinks item={data} />}
      <div className="md:hidden">
        {pathName === `/member/${user?.id}` && <NavLinks item={updateData} />}
      </div>
    </div>
  );
};

export default Links;
