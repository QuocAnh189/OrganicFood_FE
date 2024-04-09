//chakra
import { Modal, useDisclosure } from '@chakra-ui/react';

//next
import Image from 'next/image';

//icons
import { MdStarRate } from 'react-icons/md';
import { SlHandbag } from 'react-icons/sl';

//component
import { ModalProduct } from './ModalProduct';

export const CardProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div
        className="border border-gray300 rounded-md hover:cursor-pointer hover:bg-gray300 z-10"
        onClick={onOpen}
      >
        <Image
          src="https://res.cloudinary.com/dadvtny30/image/upload/v1708061748/organicfood/product/cqodgw5bfg90smswkate.png"
          alt=""
          width={0}
          height={0}
          style={{ objectFit: 'cover' }}
          sizes="100vw"
          className="w-full z-[1]"
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
      <ModalProduct isOpen={isOpen} onClose={onClose} />
    </>
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
