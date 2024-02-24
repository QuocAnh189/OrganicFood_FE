//next
import Image from 'next/image';

//icons
import { MdStarRate } from 'react-icons/md';
import { SlHandbag } from 'react-icons/sl';

export const CardProduct = () => {
  return (
    <div className="border border-gray300 rounded-md">
      <Image
        src="https://res.cloudinary.com/dadvtny30/image/upload/v1708061748/organicfood/product/cqodgw5bfg90smswkate.png"
        alt=""
        width={200}
        height={200}
        style={{ objectFit: 'cover' }}
        sizes="100vw"
        className="w-full object-cover"
      />
      <div className="p-4 flex items-center justify-between">
        <div>
          <p className="text-gray500 font-medium">Green Apple</p>
          <p className="text-black">$14.99</p>
          <div className="flex items-center gap-1">
            <MdStarRate color="orange" />
            <MdStarRate color="orange" />
            <MdStarRate color="orange" />
            <MdStarRate color="orange" />
            <MdStarRate color="orange" />
          </div>
        </div>
        <div className="bg-gray300 p-3 rounded-full">
          <SlHandbag />
        </div>
      </div>
    </div>
  );
};

export const CardProductSmall = () => {
  return (
    <div className="flex items-center gap-4 bg-white py-4 pl-4 pr-12 border border-gray300 rounded-md">
      <Image
        src="https://res.cloudinary.com/dadvtny30/image/upload/v1708061748/organicfood/product/cqodgw5bfg90smswkate.png"
        alt=""
        width={80}
        height={80}
        style={{ objectFit: 'cover' }}
      />
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray500 font-medium">Green Apple</p>
          <p className="text-black">$14.99</p>
          <div className="flex items-center gap-1">
            <MdStarRate color="orange" />
            <MdStarRate color="orange" />
            <MdStarRate color="orange" />
            <MdStarRate color="orange" />
            <MdStarRate color="orange" />
          </div>
        </div>
      </div>
    </div>
  );
};
