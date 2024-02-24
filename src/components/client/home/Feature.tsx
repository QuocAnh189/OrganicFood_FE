//next
import Image from 'next/image';

//image
import iconSupport from '@/assets/images/iconSupport.png';
import iconMoney from '@/assets/images/iconMoney.png';
import iconSecure from '@/assets/images/iconSecure.png';

export const FeatureService = () => {
  return (
    <div className="flex justify-center bg-white px-[150px]">
      <div className="flex flex-col items-center justify-center gap-2 px-8 py-4 border-b-2 border-gray300">
        <Image
          src={iconSupport}
          width={80}
          height={120}
          style={{ objectFit: 'cover' }}
          alt=""
        />
        <p className="text-black font-semibold">Free Shipping</p>
        <p className="text-gray500 text-[12px]"> Free shipping with discount</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 px-8 py-4 border-b-2 border-gray300">
        <Image
          src={iconSupport}
          width={80}
          height={120}
          style={{ objectFit: 'cover' }}
          alt=""
        />
        <p className="text-black font-semibold">Great Support 24/7</p>
        <p className="text-gray500 text-[12px]">Instant access to contact</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 px-8 py-4 border-b-2 border-gray300">
        <Image
          src={iconMoney}
          width={80}
          height={120}
          style={{ objectFit: 'cover' }}
          alt=""
        />
        <p className="text-black font-semibold">100% Secure Payment</p>
        <p className="text-gray500 text-[12px]">We ensure your money is save</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 px-8 py-4 border-b-2 border-gray300">
        <Image
          src={iconSecure}
          width={80}
          height={120}
          style={{ objectFit: 'cover' }}
          alt=""
        />
        <p className="text-black font-semibold">Money-Back Guarantee</p>
        <p className="text-gray500 text-[12px]">30 days money-back</p>
      </div>
    </div>
  );
};
