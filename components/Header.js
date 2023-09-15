'use client';

import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import SideBar from './SideBar';
import {
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import Image from 'next/image';
import { LogOutIcon } from 'lucide-react';
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
            Alaigbo Youth Forum
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
            <div className="relative h-8 w-8 rounded-full overflow-hidden">
              <Image
                fill
                src={imgUrl}
                alt="profile-img"
                className="object-cover"
              />
            </div>
            <SignOutButton>
              <div className="flex items-center space-x-2 cursor-pointer">
                <LogOutIcon color="white" />
                <p className="text-white hidden md:flex">Log out</p>
              </div>
            </SignOutButton>
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
