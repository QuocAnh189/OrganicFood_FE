'use client';

//next
import Link from 'next/link';
import Image from 'next/image';

//chakra
import {
  Button,
  Input,
  InputGroup,
  InputRightAddon,
  Divider,
  Center
} from '@chakra-ui/react';

//icons
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

//image
import logo from '@/assets/images/logo.png';
import applePay from '@/assets/images/applePay.png';
import visaPay from '@/assets/images/visa.png';
import discoverPay from '@/assets/images/discover.png';
import masterCart from '@/assets/images/masterCart.png';
import secureCart from '@/assets/images/secureCart.png';

export const Footer = () => {
  return (
    <>
      <div className="flex bg-gray200 items-center justify-between px-[150px] py-6">
        <div>
          <h1 className="text-black font-bold text-xl">
            Subcribe our Newsletter
          </h1>
          <p className="max-w-[460px]">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna.
          </p>
        </div>
        <div className="flex items-center gap-10">
          <InputGroup borderRadius={20} size="md" width="430px">
            <Input
              backgroundColor="white"
              type="text"
              placeholder="Your email address..."
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
                Subcrible
              </Button>
            </InputRightAddon>
          </InputGroup>
          <div className="flex items-center gap-4">
            <Link href="/">
              <FaFacebookF />
            </Link>
            <Link href="/">
              <FaTwitter />
            </Link>
            <Link href="/">
              <FaInstagram />
            </Link>
            <Link href="/">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex bg-black items-center justify-between px-[150px] py-10">
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-2">
            <Image src={logo} height={0} width={0} alt="" className="w-8 h-8" />
            <p className="text-white font-bold text-2xl">EcoEat</p>
          </div>
          <p className="text-gray500 text-sm max-w-80">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui, eget bibendum magna congue nec.
          </p>
          <div className="flex items-center gap-3">
            <button>
              <p className="text-white text-sm font-semibold">(219) 555-014</p>
              <div className="w-full bg-primary h-[2px]" />
            </button>
            <span className="text-gray500">or</span>
            <button>
              <p className="text-white  text-sm font-semibold">
                21521360@gm.uit.edu.vn
              </p>
              <div className="w-full bg-primary h-[2px]" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-20">
          <div className="flex flex-col items-start text-gray500 gap-1">
            <h1 className="text-white pb-2">My Account</h1>
            <p className="hover:underline hover:cursor-pointer">My Account</p>
            <p className="hover:underline hover:cursor-pointer">
              Order History
            </p>
            <p className="hover:underline hover:cursor-pointer">
              Shopping Cart
            </p>
            <p className="hover:underline hover:cursor-pointer">Wishlist</p>
          </div>
          <div className="flex flex-col items-start text-gray500 gap-1">
            <h1 className="text-white pb-2">Helps</h1>
            <p className="hover:underline hover:cursor-pointer">Contact</p>
            <p className="hover:underline hover:cursor-pointer">Faqs</p>
            <p className="hover:underline hover:cursor-pointer">
              Terms & Condition
            </p>
            <p className="hover:underline hover:cursor-pointer">
              Privacy Policy
            </p>
          </div>
          <div className="flex flex-col items-start text-gray500 gap-1">
            <h1 className="text-white pb-2">Proxy</h1>
            <p className="hover:underline hover:cursor-pointer">About</p>
            <p className="hover:underline hover:cursor-pointer">Shop</p>
            <p className="hover:underline hover:cursor-pointer">Product</p>
            <p className="hover:underline hover:cursor-pointer">Track Order</p>
          </div>
          <div className="flex flex-col items-start text-gray500 gap-1">
            <h1 className="text-white pb-2">Categories</h1>
            <p className="hover:underline hover:cursor-pointer">
              Fruit & Vegetables
            </p>
            <p className="hover:underline hover:cursor-pointer">Meat & Fish</p>
            <p className="hover:underline hover:cursor-pointer">
              Break & Bakery
            </p>
            <p className="hover:underline hover:cursor-pointer">
              Beauty & Health
            </p>
          </div>
        </div>
      </div>
      <Center className="w-full h-[1px] bg-black">
        <Divider w="80%" />
      </Center>
      <div className="flex bg-black items-center justify-between px-[150px] py-3 gap-3">
        <p className="text-gray500 text-sm">
          EcoEat eCommerce © 2024. All Rights Reserved
        </p>
        <div className="flex items-center gap-2">
          <Image
            src={applePay}
            height={0}
            width={0}
            className="w-14 h-8 object-contain"
            alt=""
          />
          <Image
            src={visaPay}
            height={0}
            width={0}
            className="w-14 h-8 object-contain"
            alt=""
          />
          <Image
            src={discoverPay}
            height={0}
            width={0}
            className="w-14 h-8 object-contain"
            alt=""
          />
          <Image
            src={masterCart}
            height={0}
            width={0}
            className="w-14 h-8 object-contain"
            alt=""
          />
          <Image
            src={secureCart}
            height={0}
            width={0}
            className="w-14 h-8 object-contain"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
