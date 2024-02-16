//icons
import { IoMdAdd } from 'react-icons/io';

const Payment = () => {
  return (
    <div className="flex flex-auto flex-col border border-solid border-gray300 rounded-md">
      <div className="w-full flex-col px-6 py-3">
        <div className="flex items-center justify-between gap-3">
          <p className="text-gray text-xl font-semibold">Credit/Debit Cart</p>
          <button className="flex items-center text-white gap-2 py-2 px-4 bg-primary rounded-sm hover:bg-subprimary">
            <IoMdAdd color="white" />
            <p>Add Cart</p>
          </button>
        </div>
        <div className="h-[1px] bg-gray300 px-12 my-6" />
        <div className="min-h-[200px] flex flex-col items-center justify-center">
          You haven't linked a tag yet
        </div>

        <div className="flex items-center justify-between gap-3">
          <p className="text-gray text-xl font-semibold">My bank account</p>
          <button className="flex items-center text-white gap-2 py-2 px-4 bg-primary rounded-sm hover:bg-subprimary">
            <IoMdAdd color="white" />
            <p>Add Bank Account</p>
          </button>
        </div>
        <div className="h-[1px] bg-gray300 px-12 my-6" />
        <div className="min-h-[200px] flex flex-col items-center justify-center">
          You don't have a bank account yet
        </div>
      </div>
    </div>
  );
};

export default Payment;
