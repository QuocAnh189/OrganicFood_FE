'use client';

//chakra
import { Divider, useDisclosure } from '@chakra-ui/react';

//icons
import { IoMdAdd } from 'react-icons/io';

//components
import { Address } from '@/components/client/user';
import ModalAddress from '@/components/client/user/ModalAddress';

const AddressPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="flex flex-auto flex-col border-[2px] border-solid border-gray300 rounded-md">
      <div className="w-full flex-col px-6 py-3">
        <div className="flex items-center justify-between gap-3">
          <p className="text-gray text-xl font-semibold">My Address</p>
          <button
            onClick={onOpen}
            className="flex items-center text-white gap-2 py-2 px-4 bg-primary rounded-sm hover:bg-subprimary"
          >
            <IoMdAdd color="white" />
            <p>Add Address</p>
          </button>
        </div>
        <div className="h-[1px] bg-gray300 px-12 my-6" />
        <div className="flex flex-col gap-2">
          <h1 className="text-xl">Address</h1>
          <Address />
          <Divider />
          <Address />
        </div>
      </div>
      <ModalAddress isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default AddressPage;
