'use client';
import { useState } from 'react';

//chakra
import {
  Divider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from '@chakra-ui/react';

//next
import Link from 'next/link';
import Image from 'next/image';

//swiper
import '@/components/client/product/product.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';

//icons
import { MdStarRate } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { GrSubtract } from 'react-icons/gr';
import { IoAdd } from 'react-icons/io5';
import { CiHeart } from 'react-icons/ci';
import { SlHandbag } from 'react-icons/sl';
import { CardProduct } from '@/components/client/product';

//components
import {
  Description,
  Information,
  Feedback
} from '@/components/client/product';

const images = [
  'https://res.cloudinary.com/dadvtny30/image/upload/v1708061750/organicfood/product/ss9g3o3fhjmsw0uht3kv.png',
  'https://res.cloudinary.com/dadvtny30/image/upload/v1708061749/organicfood/product/lwnzrrmzl1jvyb8vsugx.png',
  'https://res.cloudinary.com/dadvtny30/image/upload/v1708061748/organicfood/product/u4xbblvpqd11nhv3i2hh.png',
  'https://res.cloudinary.com/dadvtny30/image/upload/v1708061748/organicfood/product/oggejafigmqcmv8xatwq.png'
];

const ProductDetail = () => {
  const [activeThumb, setActiveThumb] = useState<any>();

  return (
    <div className="w-full">
      <div className="px-[150px] flex bg-white pt-4 gap-4">
        <div className="w-2/5">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{ swiper: activeThumb }}
            className="product-images-slider"
          >
            {images.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item} alt="product images" />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setActiveThumb}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            modules={[Navigation, Thumbs]}
            className="product-images-slider-thumbs"
          >
            {images.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="product-images-slider-thumbs-wrapper">
                  <img src={item} alt="product images" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-3/5 flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <p className="text-black font-semibold text-2xl">Chinese Cabbage</p>
            <div className="p-2 rounded-lg text-primary">In Stock</div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <MdStarRate color="orange" />
              <MdStarRate color="orange" />
              <MdStarRate color="orange" />
              <MdStarRate color="orange" />
              <MdStarRate color="orange" />
            </div>
            <p className="text-gray500 text-sm">4 Review</p>
            <p className="">
              SKU: <span className="text-gray500">2,51,594</span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <p className="text-xl text-gray500">$48.00</p>
              <p className="text-xl text-primary font-semibold">$17.28</p>
            </div>
            <div className="py-1 px-2 text-error bg-error/10 rounded-2xl">
              64% Off
            </div>
          </div>

          <Divider />

          <div className="w-full py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <p className="font-semibold">Brand</p>
                <Image
                  src="https://res.cloudinary.com/dadvtny30/image/upload/v1708061750/organicfood/product/ss9g3o3fhjmsw0uht3kv.png"
                  alt=""
                  width={50}
                  height={50}
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-2">
                <p className="font-semibold">Share item: </p>
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
            <p className="text-gray500 text-justify">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
              consequat nec, ultrices et ipsum. Nulla varius magna a consequat
              pulvinar.{' '}
            </p>
          </div>

          <Divider />

          <div className="py-2 flex items-center justify-between">
            <div className="flex p-2  items-center gap-2 border border-solid border-gray300 rounded-3xl">
              <button className="flex items-center justify-center p-2 rounded-full bg-gray300 hover:bg-gray200">
                <GrSubtract />
              </button>
              <p>0</p>
              <button className="flex items-center justify-center p-2 rounded-full bg-gray300 hover:bg-gray200">
                <IoAdd />
              </button>
            </div>
            <button className="px-16 py-2 bg-primary flex items-center gap-2 rounded-3xl hover:bg-subprimary">
              <p className="text-white">Add to Cart</p>
              <SlHandbag color="white" />
            </button>
            <div className="p-2 bg-primary/10 flex items-center justify-center rounded-full">
              <CiHeart size="24px" color="#00B207" />
            </div>
          </div>

          <Divider />

          <div className="space-y-2">
            <div className="flex items-center gap-1">
              <p className="text-black font-semibold">Category: </p>
              <p className="text-gray500">Vegetables </p>
            </div>

            <div className="flex items-center gap-1">
              <p className="text-black font-semibold">Tag: </p>
              <p className="text-gray500">
                Vegetables Healthy Chinese Cabbage Green Cabbage
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8">
        <Tabs colorScheme="green" width="full">
          <TabList
            w="full"
            display="flex"
            justifyContent="center"
            textAlign="center"
            fontWeight={600}
          >
            <Tab>Descriptions</Tab>
            <Tab>Additional Information</Tab>
            <Tab>Customer Feedback</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Description />
            </TabPanel>
            <TabPanel>
              <Information />
            </TabPanel>
            <TabPanel>
              <Feedback />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <div className="flex flex-col items-center px-[150px] py-8 gap-6">
        <h1 className="text-black font-bold text-3xl">Related Products</h1>
        <div className="grid grid-flow-col auto-cols-fr gap-4">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
