//next
import Image from 'next/image';

//icons
import { FaCheck } from 'react-icons/fa6';

//image
import iconLeaf from '@/assets/images/iconLeaf.png';
import iconDiscount from '@/assets/images/iconDiscount.png';

export const Information = () => {
  return (
    <div className="flex gap-12 px-[150px] ">
      <div className="w-3/5 space-y-4 text-gray500 text-justify">
        <div className="flex gap-6 py-4 ">
          <div className="space-y-3">
            <p className="text-black font-semibold text-sm">Weight:</p>
            <p className="text-black font-semibold text-sm">Color:</p>
            <p className="text-black font-semibold text-sm">Type:</p>
            <p className="text-black font-semibold text-sm">Category:</p>
            <p className="text-black font-semibold text-sm">Stock Status:</p>
            <p className="text-black font-semibold text-sm">Tags:</p>
          </div>

          <div className="space-y-3">
            <p className="text-gray500 text-sm">03</p>
            <p className="text-gray500 text-sm">Green</p>
            <p className="text-gray500 text-sm">Organic</p>
            <p className="text-gray500 text-sm">Vegetables</p>
            <p className="text-gray500 text-sm">Available (5,413)</p>
            <p className="text-gray500 text-sm">
              Vegetables, Healthy, Chinese , Cabbage, Green Cabbage
            </p>
          </div>
        </div>
      </div>

      <div className="w-2/5">
        <Image
          src="https://res.cloudinary.com/dadvtny30/image/upload/v1708061750/organicfood/product/ss9g3o3fhjmsw0uht3kv.png"
          alt=""
          width={100}
          height={100}
          className="w-full object-cover"
        />

        <div className="p-4 flex items-center w-full border border-solid border-gray300 rounded-xl gap-4">
          <div className="flex items-center gap-2">
            <Image
              src={iconDiscount}
              width={30}
              height={30}
              className="object-cover"
              alt=""
            />
            <div className="text-xs">
              <p className="text-black font-semibold">64% Discount</p>
              <p className="text-hray500">Save your 64% money with us</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Image
              src={iconLeaf}
              width={30}
              height={30}
              className="object-cover"
              alt=""
            />
            <div className="text-xs">
              <p className="text-black font-semibold">100% Organic</p>
              <p className="text-hray500">100% Organic Vegetables</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
