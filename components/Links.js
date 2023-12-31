'use client';
import { usePathname, useRouter } from 'next/navigation';
import NavLinks from './NavLinks';
import { SignOutButton, useUser } from '@clerk/nextjs';
import { LogOutIcon } from 'lucide-react';

const Links = ({ isAdmin }) => {
  const { user, isSignedIn } = useUser();

  const admin = user?.publicMetadata?.admin || false;
  const router = useRouter();
  const pathName = usePathname();

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
      link: 'https://summit.flashticketpro.com/',
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
    // {
    //   title: 'ADMIN DASHBOARD',
    //   link: '/admin',
    // },
  ];
  const adminData = {
    title: 'ADMIN DASHBOARD',
    link: '/admin/members',
  };
  const data = {
    title: 'DASHBOARD',
    link: `/member/${user?.id}`,
  };
  const updateData = {
    title: 'EDIT PROFILE',
    link: `/update-profile`,
  };

  const streamUrl = {
    title: 'STREAM',
    link: '/stream',
  };
  const toHome = async () => {
    router.push('/');
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
      {isSignedIn && (
        <div className="flex flex-col items-center">
          {admin && <NavLinks item={adminData} />}
          <NavLinks item={streamUrl} />
          <SignOutButton signOutCallback={toHome}>
            <div className="flex items-center justify-center hover:bg-orange-500 p-2 rounded-sm transition duration-300 space-x-2 cursor-pointer">
              <LogOutIcon
                color="white"
                className="hover:text-orange-500 transition duration-300"
              />
              <p className="text-white ">Log out</p>
            </div>
          </SignOutButton>
        </div>
      )}
    </div>
  );
};

export default Links;
