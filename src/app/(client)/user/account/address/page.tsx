//icons
import { IoMdAdd } from 'react-icons/io';

const Address = () => {
  return (
    <div className="flex flex-auto flex-col border border-solid border-gray300 rounded-md">
      <div className="w-full flex-col px-6 py-3">
        <div className="flex items-center justify-between gap-3">
          <p className="text-gray text-xl font-semibold">My Address</p>
          <button className="flex items-center text-white gap-2 py-2 px-4 bg-primary rounded-sm hover:bg-subprimary">
            <IoMdAdd color="white" />
            <p>Add Address</p>
          </button>
        </div>
        <div className="h-[1px] bg-gray300 px-12 my-6" />
        <div className="flex flex-col flex-auto items-center">
          You haven't address yet
        </div>
      </div>
    </div>
  );
};

export default Address;
