//next
import Image from 'next/image';
import Link from 'next/link';

//icons
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaRegUser, FaRegCommentAlt } from 'react-icons/fa';
import { BiFoodMenu } from 'react-icons/bi';

export const CardBlog = () => {
  return (
    <div className="flex flex-col items-center rounded-md shadow-md cursor-pointer">
      <Image
        src="https://res.cloudinary.com/dadvtny30/image/upload/v1708164998/organicfood/blog/dagngeybjorgnvug3prr.png"
        alt=""
        width={360}
        height={150}
        style={{ objectFit: 'cover' }}
        className="w-full rounded-t-md"
      />
      <div className="w-full p-2 bg-white shadow-md rounded-b-md">
        <div className="flex items-center gap-2 py-2">
          <div className="flex items-center gap-1">
            <BiFoodMenu color="#808080" />
            <p className="text-gray500">Food</p>
          </div>
          <div className="flex items-center gap-1">
            <FaRegUser color="#808080" />
            <p className="text-gray500">By Admin</p>
          </div>
          <div className="flex items-center gap-1">
            <FaRegCommentAlt color="#808080" />
            <p className="text-gray500">Comments</p>
          </div>
        </div>
        <p className="text-black">
          Curabitur porttitor orci eget neque accumsan venenatis. Nunc
          fermentum.
        </p>
        <Link
          href="/blog/1"
          className="flex text-primary items-center gap-2 py-2 hover:underline"
        >
          <p className="font-semibold"> Read More</p>
          <FaArrowRightLong />
        </Link>
      </div>
    </div>
  );
};
