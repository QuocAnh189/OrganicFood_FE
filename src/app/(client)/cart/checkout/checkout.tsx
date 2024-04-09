'use client';

//chakra
import { Divider, Radio, RadioGroup, Stack } from '@chakra-ui/react';

//next
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

//component
import { BreadCrumb } from '@/components/client/layout';
import { useState } from 'react';

//icons
import { CiLocationOn } from 'react-icons/ci';

const ItemOrder = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          height={60}
          width={60}
          src="https://res.cloudinary.com/dadvtny30/image/upload/v1708061747/organicfood/product/bto2petcvvdqawblw8cj.png"
          alt=""
          className="object-cover"
        />
        <p className="font-semibold">Green Capsicum x5</p>
      </div>
      <p className="text-sm font-bold">$70.00</p>
    </div>
  );
};

const Checkout = () => {
  const path = usePathname();
  const [payment, setPayment] = useState<string>('Delivery');

  return (
    <div className="w-full">
      <BreadCrumb path={path.slice(0, 5)} subpath="Check out" />
      <div className="py-8 flex px-[150px] gap-8">
        <div className="w-2/3 space-y-4">
          <div className="space-y-4">
            <div className="bg-white space-y-4 p-6 shadow-lg text-sm">
              <div className="flex items-center gap-2">
                <CiLocationOn color="#00B207" fontSize="semibold" size="24px" />
                <h2 className="text-xl text-primary font-semibold">
                  Delivery Address
                </h2>
              </div>
              <div className="flex items-center ga-4">
                <p className="font-semibold">Anh Quoc (+84) 702465814</p>
                <p className="">
                  Ktx Đhqg_tphcm, Khu B, Phường Linh Trung, Thành Phố Thủ Đức,
                  TP. Hồ Chí Minh{' '}
                  <span className="text-primary p-[2px] border border-solid border-primary">
                    Default
                  </span>{' '}
                </p>
                <button className="text-primary hover:underline">Change</button>
              </div>
            </div>
            <h2 className="text-xl font-semibold">Additional Info</h2>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Order Notes (Optional)</label>
              <input
                placeholder="Notes about your order, e.g. special notes for delivery"
                className="h-[120px] border border-solid border-gray300 outline-none rounded-md p-2 text-left align-middle"
              />
            </div>
          </div>
        </div>
        <div className="w-1/3 border-[2px] border-solid border-gray300 space-y-2 rounded-lg p-4">
          <h2 className="text-xl py-2 font-semibold">Order Summery</h2>
          <div className="space-y-2">
            <ItemOrder />
            <ItemOrder />
          </div>
          <div className="flex items-center justify-between py-2 text-sm">
            <p className="text-gary500">Subtotal:</p>
            <p className="text-black font-semibold">$84.00</p>
          </div>
          <Divider />
          <div className="flex items-center justify-between py-2 text-sm">
            <p className="text-gary500">Shipping:</p>
            <p className="text-black font-semibold">Free</p>
          </div>
          <Divider />
          <div className="flex items-center justify-between py-2">
            <p className="text-gary500">Total:</p>
            <p className="text-black font-semibold">$84.00</p>
          </div>

          <h2 className="text-xl py-2 font-semibold">Payment Method</h2>
          <RadioGroup
            defaultValue={payment}
            onChange={value => {
              setPayment(value);
            }}
            colorScheme="green"
            // value="Paypal"
          >
            <Stack direction="column">
              <Radio value="Delivery">Cash on Delivery</Radio>
              <Radio value="Paypal">Paypal</Radio>
              <Radio value="Amazon">Amazon Pay</Radio>
            </Stack>
          </RadioGroup>

          <Link
            href="/cart/checkout"
            className="flex justify-center text-white bg-primary rounded-3xl font-semibold py-3"
          >
            Place Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
