'use client';

import { Avatar } from '@chakra-ui/react';

//next
import Link from 'next/link';
import { usePathname } from 'next/navigation';

//icons
import { EditIcon } from '@chakra-ui/icons';
import { FaRegUser } from 'react-icons/fa';
import { BiPurchaseTag } from 'react-icons/bi';

const route = [{}];

export const Sidebar = () => {
  const path = usePathname();

  return (
    <div className="border-[2px] border-solid border-gray300 rounded-md">
      <div className="flex items-center gap-3 pl-6 pr-20 py-6">
        <Avatar size="md" />
        <div>
          <p className="text-black font-semibold">anhquoc1809</p>
          <button className="flex items-center gap-2">
            <EditIcon />
            <p className="text-gray500">Edit Profile</p>
          </button>
        </div>
      </div>
      <p className="flex items-center gap-2 pl-4 font-semibold">
        <FaRegUser />
        My Account
      </p>
      <ul className="flex flex-col pl-10 gap-2 mt-3">
        <Link
          href="/user/account/profile"
          className={`hover:underline ${
            path === '/user/account/profile' && 'text-primary font-semibold'
          }`}
        >
          Profile
        </Link>
        <Link
          href="/user/account/payment"
          className={`hover:underline ${
            path === '/user/account/payment' && 'text-primary font-semibold'
          }`}
        >
          Bank
        </Link>
        <Link
          href="/user/account/address"
          className={`hover:underline ${
            path === '/user/account/address' && 'text-primary font-semibold'
          }`}
        >
          Address
        </Link>
        <Link
          href="/user/setting/notification"
          className={`hover:underline ${
            path === '/user/setting/notification' &&
            'text-primary font-semibold'
          }`}
        >
          Notification
        </Link>
      </ul>
      <Link
        href="/user/purchase"
        className="flex items-center gap-2 pl-4  mt-3"
      >
        <BiPurchaseTag />
        Purchase
      </Link>
    </div>
  );
};
