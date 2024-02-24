//chakra
import { Checkbox } from '@chakra-ui/react';

const Notification = () => {
  return (
    <div className="flex flex-auto flex-col border border-solid border-gray300 rounded-md">
      <div className="w-full flex-col px-6 py-3">
        <div className="flex items-center justify-between gap-3">
          <p className="text-gray text-[16px] font-semibold">
            Notification Settings
          </p>
        </div>
        <div className="h-[1px] bg-gray300 px-12 my-6" />
        <div className="flex flex-col flex-auto gap-5">
          <div className="flex items-center justify-between">
            <p className="text-black text-[16px]">Email Notification</p>
            <div className="flex items-center gap-2">
              <Checkbox colorScheme="green" />
              <p className="text-[18px]">Enable</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-black text-[16px]">Order Updates</p>
              <p className="text-gray500">
                Notify when there are updates on my orders, including
                payment-related updates.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox colorScheme="green" />
              <p className="text-[18px]">Enable</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="">
              <p className="text-black text-[16px]">Listing Updates</p>
              <p className="text-gray500">
                Notify when my listing as a seller becomes sold out, deleted or
                suspended.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox colorScheme="green" />
              <p className="text-[18px]">Enable</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="">
              <p className="text-black text-[16px]">Promotions</p>
              <p className="text-gray500">
                Send me news on exclusive offers and deals
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox colorScheme="green" />
              <p className="text-[18px]">Enable</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="">
              <p className="text-black text-[16px]">Personalised Content</p>
              <p className="text-gray500">
                Send me personalised updates. (e.g. your birthday gift).
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox colorScheme="green" />
              <p className="text-[18px]">Enable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
