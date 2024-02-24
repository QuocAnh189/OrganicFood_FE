'use client';

//chakra
import { Avatar } from '@chakra-ui/react';

//next
import Link from 'next/link';

//icons
import { CiLocationOn } from 'react-icons/ci';

//redux
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { useSignOutMutation } from '@/redux/services/authApi';
import { signOut } from '@/redux/slices/authSlice';

export const Header = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(state => state.auth.authData);

  const [LogOut] = useSignOutMutation();

  const handleLogout = async () => {
    await LogOut(auth?.user._id!)
      .unwrap()
      .then(() => {
        dispatch(signOut());
      })
      .catch(e => console.log(e));
  };

  return (
    <div className="flex bg-black text-white items-center justify-between px-[150px] py-[6px]">
      <div className="flex items-center gap-2">
        <CiLocationOn />
        <p className="text-sm font-normal">
          Bcons Green View , 113 Dong Hoa , Di An
        </p>
      </div>
      <div className="flex gap-3 text-sm">
        <div className="flex gap-2">
          <select defaultValue="Eng" className="bg-black">
            <option value="Eng">Eng</option>
            <option value="Vie">Vie</option>
          </select>

          <select defaultValue="USD" className="bg-black">
            <option value="USD">USD</option>
            <option value="VND">VND</option>
          </select>
        </div>
        <span className="w-[1px] bg-white" />
        <div className="flex gap-2 text-sm items-center">
          {auth ? (
            <>
              <Link
                href="/signin"
                className="flex items-center gap-2 hover:cursor-pointer hover:underline"
              >
                <Avatar size="xs" src={auth.user.avatar} />
                <p>{auth.user.name}</p>
              </Link>
              <span>/</span>
              <button
                onClick={handleLogout}
                className="hover:cursor-pointer hover:underline"
              >
                <p>Logout</p>
              </button>
            </>
          ) : (
            <>
              <Link
                href="/signin"
                className="hover:cursor-pointer hover:underline"
              >
                <p>SignIn</p>
              </Link>
              <span>/</span>
              <Link
                href="/signup"
                className="hover:cursor-pointer hover:underline"
              >
                <p>SignUp</p>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
