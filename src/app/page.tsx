'use client';

//next
import Image from 'next/image';
import Link from 'next/link';

//component
import {
  Banner,
  FeatureProduct,
  FeatureService
} from '@/components/client/home';
import { FooterAbout } from '@/components/client/about';
import { CardCategory, Feedback } from '@/components/common';
import { CardBlog } from '@/components/client/blog/CardBlog';
import { CardProduct, CardProductSmall } from '@/components/client/product';

//icons
import { FaArrowRightLong, FaCheck } from 'react-icons/fa6';

//image
import twoman from '@/assets/images/twoman.png';

const Home = () => {
  return (
    <div className="relative w-full min-h-screen pt-4">
      <div className="flex z-[1] items-center justify-center w-full h-[510px] bg-my-image bg-cover">
        <Banner />
      </div>

      <div className="w-full flex flex-col bg-white gap-14 pb-12">
        <FeatureService />
        <FeatureProduct />
      </div>

      <div className="w-full flex flex-col items-center bg-gray300 gap-14 py-12">
        <div className="w-full flex flex-col gap-6 justify-center px-[150px] ">
          <div className="w-full flex items-center justify-between">
            <p className="text-black font-semibold text-3xl">Top Categories</p>
            <div className="flex items-center gap-2">
              <p className="text-primary">View all</p>
              <FaArrowRightLong color="#00B207" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <CardCategory />
            <CardCategory />
            <CardCategory />
            <CardCategory />
            <CardCategory />
          </div>
        </div>
        <div className="w-full flex items-center justify-center gap-8 px-[150px]">
          <Image
            src={twoman}
            alt=""
            height={600}
            width={600}
            style={{ objectFit: 'cover' }}
          />
          <div className="flex-1 flex flex-col justify-center gap-6">
            <h1 className="text-black font-bold text-4xl">
              100% Trusted <br />
              Organic Food Store
            </h1>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="p-[5px] bg-primary rounded-full">
                    <FaCheck color="white" />
                  </div>
                  <p className="text-black font-medium">
                    Healthy & natural food for lovers of healthy food.
                  </p>
                </div>
                <div className="pl-8">
                  <p className="text-gray500">
                    Ut quis tempus erat. Phasellus euismod bibendum magna non
                    tristique. Pellentesque semper vestibulum elit sed
                    condimentum. Nunc pretium fermentum interdum.{' '}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="p-[5px] bg-primary rounded-full">
                    <FaCheck color="white" />
                  </div>
                  <p className="text-black font-medium">
                    Every day fresh and quality products for you.
                  </p>
                </div>
                <div className="pl-8">
                  <p className="text-gray500">
                    Maecenas vehicula a justo quis laoreet. Sed in placerat
                    nibh, a posuere ex. Morbi sem neque, aliquam sed orci et,
                    rhoncus lobortis felis. Sed vestibulum nisl sit amet sapien.
                  </p>
                </div>
              </div>
            </div>
            <Link
              href=""
              className="w-[160px] bg-primary text-white flex items-center justify-center gap-2 px-4 py-2 rounded-3xl font-medium"
            >
              Shop Now
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 bg-my-subbghome w-full h-[300px] bg-cover px-[200px]">
        <div className="flex flex-col items-center justify-center gap-2 w-[240px] h-[160px] rounded-md bg-green100">
          <p className="text-primary text-3xl font-medium">37+</p>
          <p className="text-white">Year of Hard Word</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 w-[240px] h-[160px] rounded-md bg-green100">
          <p className="text-primary text-3xl font-medium">37+</p>
          <p className="text-white">Year of Hard Word</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 w-[240px] h-[160px] rounded-md bg-green100">
          <p className="text-primary text-3xl font-medium">28</p>
          <p className="text-white">Qualified Team Member</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 w-[240px] h-[160px] rounded-md bg-green100">
          <p className="text-primary text-3xl font-medium">750k +</p>
          <p className="text-white">Monthly Orders</p>
        </div>
      </div>

      <div className="flex flex-col gap-6 justify-center bg-white px-[150px] py-12">
        <div className="w-full flex items-center justify-between">
          <div className="relative flex items-center">
            <Image
              src="https://res.cloudinary.com/dadvtny30/image/upload/v1708181447/organicfood/voucher/k8m92cqwmwpuu7vykjn4.png"
              alt=""
              width={600}
              height={200}
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute z-10 flex flex-col gap-4 pl-8">
              <div>
                <p className="text-white">100% ORGANIC</p>
                <p className="text-white text-3xl">Fruit & Vegetable</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-gray500">Starting at: </p>
                <div className="px-2 py-1 bg-orange rounded-md text-white">
                  $11.99
                </div>
              </div>
              <Link
                href=""
                className="w-[160px] bg-primary text-white flex items-center justify-center gap-2 px-4 py-2 rounded-3xl font-medium"
              >
                Shop Now
                <FaArrowRightLong />
              </Link>
            </div>
          </div>
          <div className="relative flex items-center">
            <Image
              src="https://res.cloudinary.com/dadvtny30/image/upload/v1708181446/organicfood/voucher/wl296lpijssgdmtvsr9c.png"
              alt=""
              width={600}
              height={200}
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute z-10 flex flex-col gap-4 pl-8">
              <div>
                <p className="text-white">SALE OFF THE WEEK</p>
                <p className="text-white text-3xl">Sales of the Year</p>
              </div>
              <div className="flex gap-3">
                <div className=" flex flex-col items-center text-white">
                  <p className="text-xl">00</p>
                  <p className="text-gray300 text-[12px]">DAYS</p>
                </div>

                <div className="text-white">:</div>

                <div className=" flex flex-col items-center text-white">
                  <p className="text-xl">02</p>
                  <p className="text-gray300 text-[12px]">HOURS</p>
                </div>

                <div className="text-white">:</div>

                <div className=" flex flex-col items-center text-white">
                  <p className="text-xl">18</p>
                  <p className="text-gray300 text-[12px]">MINS</p>
                </div>

                <div className="text-white">:</div>

                <div className=" flex flex-col items-center text-white">
                  <p className="text-xl">46</p>
                  <p className="text-gray300 text-[12px]">SECS</p>
                </div>
              </div>
              <Link
                href=""
                className="w-[160px] bg-primary text-white flex items-center justify-center gap-2 px-4 py-2 rounded-3xl font-medium"
              >
                Shop Now
                <FaArrowRightLong />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="text-black font-semibold text-3xl">Featured Product</p>
          <div className="flex items-center gap-2">
            <p className="text-primary">View all</p>
            <FaArrowRightLong color="#00B207" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
        <div className="flex justify-between">
          <div className="flex-1 flex justify-between">
            <div className="h-full flex flex-col gap-2 justify-between">
              <h1 className="text-black text-xl font-semibold">Hot Deals</h1>
              <div className="flex flex-col gap-4">
                <CardProductSmall />
                <CardProductSmall />
                <CardProductSmall />
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-between">
            <div className="h-full flex flex-col gap-2 justify-between">
              <h1 className="text-black text-xl font-semibold">Best Seller</h1>
              <div className="flex flex-col gap-4">
                <CardProductSmall />
                <CardProductSmall />
                <CardProductSmall />
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-between">
            <div className="h-full flex flex-col gap-2 justify-between">
              <h1 className="text-black text-xl font-semibold">Top Rated</h1>
              <div className="flex flex-col gap-4">
                <CardProductSmall />
                <CardProductSmall />
                <CardProductSmall />
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://res.cloudinary.com/dadvtny30/image/upload/v1708181444/organicfood/voucher/sfblxq3imrpk48vt9o3p.png"
              alt=""
              width={300}
              height={200}
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute left-[25%] top-6 flex flex-col items-center gap-4">
              <p className="text-[12px]">HOT SALE</p>
              <p className="text-2xl">
                Save 37% on <br />
                Every Order{' '}
              </p>
              <Link
                href=""
                className="w-[160px] bg-white text-primary flex items-center justify-center gap-2 px-4 py-2 rounded-3xl font-medium"
              >
                Shop Now
                <FaArrowRightLong />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center px-[150px] gap-8 pt-12 pb-40">
        <div className="flex flex-col items-center">
          <p className="text-primary">Blog</p>
          <h1 className="text-black font-bold text-2xl">Latest News</h1>
        </div>
        <div className="flex items-center justify-center gap-4">
          <CardBlog />
          <CardBlog />
          <CardBlog />
        </div>
      </div>

      <Feedback />
      <FooterAbout />
    </div>
  );
};

export default Home;
