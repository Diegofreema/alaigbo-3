'use client';
import { cn } from '@/lib/utils';
import { CalendarCheck, CalendarRange, ShieldCheck, User2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { twMerge } from 'tailwind-merge';
const links = [
  {
    href: '/admin/members',
    Icon: User2,
  },
  {
    href: '/admin/events',
    Icon: CalendarRange,
  },
];
const Sidebar = ({ mobile = false }) => {
  const pathname = usePathname();
  return (
    <div
      className={cn(
        !mobile &&
          'h-screen md:!flex items-center hidden z-30    flex-col justify-center space-y-8 w-20 bg-orange-500 fixed  inset-y-0 left-0',
        mobile &&
          'md:!hidden flex flex-row fixed z-50 bg-orange-500 w-[60%] mx-auto !-space-x-6 shadow-lg shadow-black rounded-md left-[17%] !overflow-hidden   !justify-start items-center  bottom-4'
      )}
    >
      {links.map(({ Icon, href }, i) => (
        <Link
          key={i}
          href={href}
          className={twMerge(
            ' flex items-center hover:!bg-white transition justify-center h-18 py-2 w-full cursor-pointer !z-10 ',
            pathname === href && ' bg-white '
          )}
        >
          <Icon className={twMerge(' text-black')} size={mobile ? 15 : 30} />
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
