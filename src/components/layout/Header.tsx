//next
import Link from 'next/link';

//icons
import { CiLocationOn } from 'react-icons/ci';

const Header = () => {
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
          <Link href="/signin" className="hover:cursor-pointer hover:underline">
            <p>SignIn</p>
          </Link>
          <span>/</span>
          <Link href="/signup" className="hover:cursor-pointer hover:underline">
            <p>SignUp</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
