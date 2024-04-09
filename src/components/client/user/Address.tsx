//chakra
import { Divider, useDisclosure } from '@chakra-ui/react';
import ModalAddress from './ModalAddress';

export const Address = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="w-full flex items-center justify-between">
        <div className="text-sm">
          <div className="w-full flex items-center gap-2">
            <p className="">Anh Quoc</p>
            <Divider orientation="vertical" />
            <p className="text-gray500">(+84) 702465814</p>
          </div>
          <p className="text-gray500">Ktx Đhqg_tphcm, Khu B</p>
          <p className="text-gray500">
            Phường Linh Trung, Thành Phố Thủ Đức, TP. Hồ Chí Minh
          </p>
          <span className="text-primary p-[2px] border border-solid border-primary">
            Default
          </span>
        </div>
        <div className="flex flex-col items-center text-sm gap-2">
          <div className="flex items-center gap-2">
            <button className="text-blue" onClick={onOpen}>
              Edit
            </button>
            <button className="text-blue">Delete</button>
          </div>
          <span className="text-primary p-[2px] border border-solid border-primary">
            Set as default
          </span>
        </div>
      </div>
      <ModalAddress isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Address;
