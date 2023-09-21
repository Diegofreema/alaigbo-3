'use client';

import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import SideBar from './SideBar';
import { SignedIn, SignedOut, useUser } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import Image from 'next/image';
const Header = () => {
  const { user } = useUser();
  const imgUrl = user?.imageUrl;
  const pathName = usePathname();

  return (
    <header className="   bg-black  fixed top-0 left-0 right-0 z-30 ">
      <nav
        className={cn(
          ' py-6   items-center justify-between w-[90%] md:w-[85%] mx-auto ',
          pathName.includes('sign-up') || pathName.includes('sign-in')
            ? 'hidden'
            : 'flex '
        )}
      >
        <div className="left text-base md:text-3xl">
          <Link className="text-white flex items-center space-x-2" href={'/'}>
            <Avatar className="mr-3">
              <AvatarImage src="/logo.jpg" />
              <AvatarFallback>AYF</AvatarFallback>
            </Avatar>
            <p className="hidden sm:!flex">Alaigbo Youth Forum</p>
          </Link>
        </div>

        <div className=" space-x-2 flex   items-center">
          <div className="hidden lg:!flex space-x-4 items-center">
            <Link className="text-white " href={'/'}>
              Join The Alaigbo Community
            </Link>
            <Link href={'/'} className="bg-[#00AA00] p-2 rounded-sm text-white">
              INVEST IN ALAIGBO
            </Link>
          </div>
          <SideBar />
          <SignedIn>
            <div className="h-8 w-8 rounded-full overflow-hidden flex items-center justify-center">
              <Avatar className="">
                <AvatarImage src={imgUrl} className="object-cover" />
                <AvatarFallback>Img</AvatarFallback>
              </Avatar>
            </div>
          </SignedIn>
          <SignedOut>
            <Link href={'/sign-in'}>
              <Button variant="link">Login</Button>
            </Link>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
};

export default Header;
