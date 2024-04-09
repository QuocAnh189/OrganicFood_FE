'use client';

//chakra
import {
  Button,
  Input,
  InputGroup,
  InputRightAddon,
  Divider
} from '@chakra-ui/react';

//next
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

//component
import { BreadCrumb } from '@/components/client/layout';

//icon
import { GrSubtract } from 'react-icons/gr';
import { IoAdd } from 'react-icons/io5';

const Item = () => {
  return (
    <div className="px-4">
      <div className="flex items-center py-2 relative text-sm">
        <div className="flex flex-1 items-center gap-3">
          <Image
            height={80}
            width={80}
            src="https://res.cloudinary.com/dadvtny30/image/upload/v1708061747/organicfood/product/bto2petcvvdqawblw8cj.png"
            alt=""
            className="object-cover"
          />
          <p className="font-semibold">Green Capsicum</p>
        </div>
        <p className="w-[200px] font-semibold text-center">$14.00</p>
        <div className="w-[100px] flex p-1  items-center justify-center gap-2 border border-solid border-gray300 rounded-3xl">
          <button className="flex items-center justify-center p-2 rounded-full bg-gray300">
            <GrSubtract />
          </button>
          <p>0</p>
          <button className="flex items-center justify-center p-2 rounded-full bg-gray300">
            <IoAdd />
          </button>
        </div>
        <p className="w-[200px] font-semibold text-center">$70.00</p>
      </div>
      <Divider />
    </div>
  );
};

const Cart = () => {
  const path = usePathname();
  return (
    <div className="w-full">
      <BreadCrumb path={path} />
      <div className="py-8 flex flex-col items-center px-[150px] gap-8">
        <h1 className="text-black text-2xl font-semibold">My Shopping Cart</h1>
        <div className="w-full flex gap-4">
          <div className="w-2/3 space-y-4">
            <div className="border-[2px] border-solid border-gray300 rounded-lg">
              <div className="flex items-center px-4 py-2 text-sm">
                <p className="flex-1 text-gray500">PRODUCT</p>
                <p className="w-[200px] text-gray500 text-center">PRICE</p>
                <p className="w-[100px] text-gray500 text-center">QUANTITY</p>
                <p className="w-[200px] text-gray500 text-center">SUBTOTAL</p>
              </div>
              <Divider size="xl" />
              <Item />
              <Item />
            </div>
            <div className="flex items-center gap-4 border-[2px] border-solid border-gray300 rounded-lg p-2">
              <p className="text-xl font-semibold">Coupon Code</p>
              <InputGroup borderRadius={20} size="md" width="600px">
                <Input
                  backgroundColor="white"
                  type="text"
                  placeholder="Enter code."
                  borderRadius={20}
                  padding={4}
                />
                <InputRightAddon
                  zIndex={1}
                  position="absolute"
                  right={-8}
                  backgroundColor="transparent"
                  border="none"
                >
                  <Button
                    size="md"
                    borderRadius={20}
                    backgroundColor={'#00B207'}
                    color="#FFFFFF"
                    _hover={{ backgroundColor: '#74E291' }}
                  >
                    Apply Coupon
                  </Button>
                </InputRightAddon>
              </InputGroup>
            </div>
          </div>
          <div className="w-1/3 h-[300px] border-[2px] border-solid border-gray300 space-y-2 rounded-lg p-4">
            <h2 className="text-2xl py-2">Cart Total</h2>
            <div className="flex items-center justify-between py-2 text-sm">
              <p className="text-gary500">Subtotal:</p>
              <p className="text-black">$84.00</p>
            </div>
            <Divider />
            <div className="flex items-center justify-between py-2 text-sm">
              <p className="text-gary500">Shipping:</p>
              <p className="text-black">Free</p>
            </div>
            <Divider />
            <div className="flex items-center justify-between py-2">
              <p className="text-gary500">Total:</p>
              <p className="text-black font-medium">$84.00</p>
            </div>

            <Link
              href="/cart/checkout"
              className="flex justify-center text-white bg-primary rounded-3xl font-semibold py-3 hover:bg-subprimary"
            >
              Proceed to checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
