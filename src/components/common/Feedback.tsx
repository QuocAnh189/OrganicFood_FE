//next
import Image from 'next/image';

//icons
import { MdStarRate } from 'react-icons/md';
import { FcApproval } from 'react-icons/fc';

export const Feedback = () => {
  return (
    <div className="flex max-w-[400px] flex-col justify-center p-4 bg-white shadow rounded-md gap-4">
      <FcApproval size={30} />
      <p className="text-justify">
        Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
        Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.
        Donec sed neque eget
      </p>
      <div className="flex items-center justify-between gap">
        <div className="flex items-center gap-2">
          <Image
            src="https://res.cloudinary.com/dadvtny30/image/upload/v1708050849/organicfood/user/c5byvtpjvs7cbyis33ow.png"
            alt=""
            width={40}
            height={40}
            style={{ objectFit: 'cover' }}
            className="rounded-full"
          />
          <div className="">
            <p>Robert Fox</p>
            <p className="text-gray500 text-[10px]">Customer</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <MdStarRate color="orange" />
          <MdStarRate color="orange" />
          <MdStarRate color="orange" />
          <MdStarRate color="orange" />
          <MdStarRate color="orange" />
        </div>
      </div>
    </div>
  );
};
