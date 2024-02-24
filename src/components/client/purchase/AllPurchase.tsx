//next
import Image from 'next/image';

//image
import purchase from '@/assets/images/notOrder.png';

export const AllPurchase = () => {
  return (
    <div className="flex h-[300px] flex-auto flex-col items-center justify-center">
      <Image src={purchase} alt="" className="w-20 h-20 object-cover" />
      <p>No orders yet</p>
    </div>
  );
};
