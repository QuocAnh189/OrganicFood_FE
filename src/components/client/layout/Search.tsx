'use client';

//chakra
import {
  Button,
  Center,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon
} from '@chakra-ui/react';

//next
import Image from 'next/image';
import Link from 'next/link';

//icons
import { CiHeart } from 'react-icons/ci';
import { Search2Icon } from '@chakra-ui/icons';
import { IoCartOutline } from 'react-icons/io5';

//image
import logo from '@/assets/images/logo.png';

const Search = () => {
  return (
    <div className="flex bg-white text-black items-center justify-between px-[150px] py-3">
      <Link href="/" className="flex items-center gap-2">
        <Image src={logo} alt="" className="w-8 h-8" />
        <h1 className="text-xl font-bold">EcoEat</h1>
      </Link>
      <div>
        <InputGroup borderRadius={5} size="md" width="600px">
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.600" />}
          />
          <Input
            type="text"
            placeholder="What do you want to find today?..."
            border="1px solid #949494"
          />
          <InputRightAddon p={0} border="none">
            <Button
              size="md"
              borderLeftRadius={0}
              borderRightRadius={3.3}
              border="1px solid #949494"
              backgroundColor={'#00B207'}
              color="#FFFFFF"
              _hover={{ backgroundColor: '#74E291' }}
            >
              Search
            </Button>
          </InputRightAddon>
        </InputGroup>
      </div>
      <div className="flex items-center gap-2">
        <CiHeart size="32px" />
        <span className="w-[1px] bg-black" />
        <button className="flex items-center gap-2">
          <div className="relative">
            <IoCartOutline size="32px" />
            <Center className="bg-primary w-4 h-4 rounded-full absolute top-0 right-0">
              <p className="text-sm text-white">2</p>
            </Center>
          </div>
          <Link href="/cart">
            <div className="flex flex-col items-start">
              <p className="text-sm">Shopping Cart</p>
              <p className="text-sm font-bold">$57.00</p>
            </div>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Search;
