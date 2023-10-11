'use client';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import Links from './Links';
import { useUser } from '@clerk/nextjs';
import { fetchUserMember } from '@/lib/actions/user.actions';
import { useEffect, useState } from 'react';

const SideBar = () => {
  const { user } = useUser();
  const [isAdmin, setIsAdmin] = useState(false);
  // const getUser = async () => {
  //   const { isAdmin } = await fetchUserMember(user.id);
  //   setIsAdmin(isAdmin);
  //   console.log(isAdmin);
  // };
  // useEffect(() => {
  //   getUser();
  // }, []);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <Menu color="orange" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetClose asChild>
          <Links isAdmin={isAdmin} />
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default SideBar;
