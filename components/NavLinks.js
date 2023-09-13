import Link from 'next/link';
import { SheetClose } from './ui/sheet';
const NavLinks = ({ item }) => {
  const { link, title } = item;

  return (
    <SheetClose className="text-white w-fit py-2 px-4 mb-4" asChild>
      <Link href={link}>{title}</Link>
    </SheetClose>
  );
};

export default NavLinks;
