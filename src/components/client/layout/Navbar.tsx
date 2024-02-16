'use client';

//next
import Link from 'next/link';
import { usePathname } from 'next/navigation';

//icons
import { FaPhoneVolume } from 'react-icons/fa6';

//constant
import { routes } from '@/constants';

const Navbar = () => {
  const path = usePathname();

  return (
    <div className="flex bg-gray200 text-black items-center justify-between px-[150px] py-3">
      <div className="flex items-center gap-8 text-gray500">
        {routes.map((route, index) => (
          <Link
            key={index}
            href={route.path}
            className={`hover:underline ${
              route.path === path && 'text-primary font-bold'
            }`}
          >
            {route.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <FaPhoneVolume size="24px" />
        <p className="text-black">(219) 555-2214</p>
      </div>
    </div>
  );
};

export default Navbar;
