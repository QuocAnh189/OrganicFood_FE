'use client';

//next
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

//components
import BreadCrumb from '@/components/client/layout/Breadcrumb';

//icons
import { FaArrowRightLong } from 'react-icons/fa6';
import { MdStarRate } from 'react-icons/md';
import { FcApproval } from 'react-icons/fc';

const About = () => {
  const path = usePathname();

  return (
    <div className="w-full">
      <BreadCrumb path={path} />
      <div className="w-full mt-8">
        <div className="flex items-center justify-between px-[150px] py-8 bg-white">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-black">
              100% Trusted <br />
              Organic Food Store
            </h1>
            <p className="text-justify text-gray500 text-[14px] max-w-[500px]">
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
              laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
              Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan.
              Donec a eros non massa vulputate ornare. Vivamus ornare commodo
              ante, at commodo felis congue vitae.
            </p>
          </div>
          <Image
            src="https://res.cloudinary.com/dadvtny30/image/upload/v1708050481/organicfood/about/kuvsill9gsdxhltbjllf.png"
            alt=""
            width={600}
            height={300}
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="flex items-center justify-between px-[150px] py-8 bg-gray300">
          <Image
            src="https://res.cloudinary.com/dadvtny30/image/upload/v1708050494/organicfood/about/v4mpsoe7yye4tpmwwjmz.png"
            alt=""
            width={600}
            height={300}
            style={{ objectFit: 'cover' }}
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-black">
              100% Trusted <br />
              Organic Food Store
            </h1>
            <p className="text-justify text-gray500 text-[14px] max-w-[500px]">
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
              Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a
              a mi. Nulla eu eros consequat tortor tincidunt feugiat.
            </p>
            <div className="grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-2">
              <div className="flex items-center gap-2">
                <Image
                  src="https://res.cloudinary.com/dadvtny30/image/upload/v1708050710/organicfood/about/z6dyvltppcfoojl672fn.png"
                  alt=""
                  width={50}
                  height={50}
                  style={{ objectFit: 'cover' }}
                />
                <div>
                  <p className="text-black font-semibold">100% Organic food</p>
                  <p className="text-gray500 text-[14px]">
                    100% healthy & fresh food.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="https://res.cloudinary.com/dadvtny30/image/upload/v1708050710/organicfood/about/vyft5zux83x3npe1azgc.png"
                  alt=""
                  width={50}
                  height={50}
                  style={{ objectFit: 'cover' }}
                />
                <div>
                  <p className="text-black font-semibold">Great Support 24/7</p>
                  <p className="text-gray500 text-[14px]">
                    Instant access to contact
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="https://res.cloudinary.com/dadvtny30/image/upload/v1708050710/organicfood/about/y8jhihkf8vu65w43sv5q.png"
                  alt=""
                  width={50}
                  height={50}
                  style={{ objectFit: 'cover' }}
                />
                <div>
                  <p className="text-black font-semibold">Customer Feedback</p>
                  <p className="text-gray500 text-[14px]">
                    Our happy customers.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="https://res.cloudinary.com/dadvtny30/image/upload/v1708050710/organicfood/about/frpfrhrvltcrntpfuo1v.png"
                  alt=""
                  width={50}
                  height={50}
                  style={{ objectFit: 'cover' }}
                />
                <div>
                  <p className="text-black font-semibold">
                    100% Secure Payment
                  </p>
                  <p className="text-gray500 text-[14px]">
                    We ensure you money is save
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="https://res.cloudinary.com/dadvtny30/image/upload/v1708050710/organicfood/about/buifudkezbdd55o3l7ko.png"
                  alt=""
                  width={50}
                  height={50}
                  style={{ objectFit: 'cover' }}
                />
                <div>
                  <p className="text-black font-semibold">Free Shipping</p>
                  <p className="text-gray500 text-[14px]">
                    Free shipping with discount.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="https://res.cloudinary.com/dadvtny30/image/upload/v1708050711/organicfood/about/cw3jfiwsj9kepndx1nd3.png"
                  alt=""
                  width={50}
                  height={50}
                  style={{ objectFit: 'cover' }}
                />
                <div>
                  <p className="text-black font-semibold">100% Organic food</p>
                  <p className="text-gray500 text-[14px]">
                    100% healthy & fresh food.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-[150px] py-8 bg-white">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-black">
              We Delivered, You
              <br />
              Enjoy Your Order.
            </h1>
            <p className="text-justify text-gray500 text-[14px] max-w-[500px]">
              Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
              ultrices consectetur velit dapibus eu. Mauris sollicitudin
              dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor
              bibendum nunc eget elementum.
            </p>
            <Link
              href=""
              className="w-[160px] bg-primary text-white flex items-center justify-center gap-2 px-4 py-2 rounded-3xl"
            >
              Shop Now
              <FaArrowRightLong />
            </Link>
          </div>
          <Image
            src="https://res.cloudinary.com/dadvtny30/image/upload/v1708050471/organicfood/about/vk3n3re1dogwxyij6scu.png"
            alt=""
            width={600}
            height={300}
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="flex flex-col items-center justify-between px-[150px] py-10 bg-gray300 gap-4">
          <h1 className="text-4xl text-black font-semibold">
            Our Awesome Team
          </h1>
          <p className="text-center text-gray500">
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus <br /> neque. Duis non diam eget est luctus
            tincidunt a a mi.
          </p>
          <div className="flex items-center gap-4">
            <div className="bg-white shadow-md rounded-md">
              <Image
                src="https://res.cloudinary.com/dadvtny30/image/upload/v1708050849/organicfood/user/c5byvtpjvs7cbyis33ow.png"
                alt=""
                width={200}
                height={200}
                style={{ objectFit: 'cover' }}
                className="rounded-t-md"
              />
              <div className="p-2">
                <p>Jenny Wilson</p>
                <p className="text-gray500 text-[12px]">Ceo & Found</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-md">
              <Image
                src="https://res.cloudinary.com/dadvtny30/image/upload/v1708050850/organicfood/user/qxsiaat1w3alfx9ztwem.png"
                alt=""
                width={200}
                height={200}
                style={{ objectFit: 'cover' }}
                className="rounded-t-md"
              />
              <div className="p-2">
                <p>Jane Cooper</p>
                <p className="text-gray500 text-[12px]">Worker</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-md">
              <Image
                src="https://res.cloudinary.com/dadvtny30/image/upload/v1708050849/organicfood/user/c5byvtpjvs7cbyis33ow.png"
                alt=""
                width={200}
                height={200}
                style={{ objectFit: 'cover' }}
                className="rounded-t-md"
              />
              <div className="p-2">
                <p>Cody Fisher</p>
                <p className="text-gray500 text-[12px]">Security Guard</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-md">
              <Image
                src="https://res.cloudinary.com/dadvtny30/image/upload/v1708050850/organicfood/user/dxeswbijjbolyqmedegm.png"
                alt=""
                width={200}
                height={200}
                style={{ objectFit: 'cover' }}
                className="rounded-t-md"
              />
              <div className="p-2">
                <p>Robert Fox</p>
                <p className="text-gray500 text-[12px]">
                  Senior Farmer Manager
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6 px-[150px] py-12 bg-gray200">
          <h1 className="font-semibold text-3xl">Client Testimonail</h1>
          <div className="grid grid-flow-col">
            <div className="flex max-w-[400px] flex-col justify-center p-4 bg-white shadow rounded-md gap-4">
              <FcApproval size={30} />
              <p className="text-justify">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                cursus velit sodales. Donec sed neque eget
              </p>
              <div className="flex items-center justify-between gap">
                <div className="flex items-center gap-2">
                  <Image
                    src="https://res.cloudinary.com/dadvtny30/image/upload/v1708050849/organicfood/user/c5byvtpjvs7cbyis33ow.png"
                    alt=""
                    width={40}
                    height={40}
                    style={{ objectFit: 'cover' }}
                    className="rounded-full"
                  />
                  <div className="">
                    <p>Robert Fox</p>
                    <p className="text-gray500 text-[10px]">Customer</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <MdStarRate color="orange" />
                  <MdStarRate color="orange" />
                  <MdStarRate color="orange" />
                  <MdStarRate color="orange" />
                  <MdStarRate color="orange" />
                </div>
              </div>
            </div>
            <div className="flex max-w-[400px] flex-col justify-center p-4 bg-white shadow rounded-md gap-4">
              <FcApproval size={30} />
              <p className="text-justify">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                cursus velit sodales. Donec sed neque eget
              </p>
              <div className="flex items-center justify-between gap">
                <div className="flex items-center gap-2">
                  <Image
                    src="https://res.cloudinary.com/dadvtny30/image/upload/v1708050849/organicfood/user/c5byvtpjvs7cbyis33ow.png"
                    alt=""
                    width={40}
                    height={40}
                    style={{ objectFit: 'cover' }}
                    className="rounded-full"
                  />
                  <div className="">
                    <p>Robert Fox</p>
                    <p className="text-gray500 text-[10px]">Customer</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <MdStarRate color="orange" />
                  <MdStarRate color="orange" />
                  <MdStarRate color="orange" />
                  <MdStarRate color="orange" />
                  <MdStarRate color="orange" />
                </div>
              </div>
            </div>
            <div className="flex max-w-[400px] flex-col justify-center p-4 bg-white shadow rounded-md gap-4">
              <FcApproval size={30} />
              <p className="text-justify">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                cursus velit sodales. Donec sed neque eget
              </p>
              <div className="flex items-center justify-between gap">
                <div className="flex items-center gap-2">
                  <Image
                    src="https://res.cloudinary.com/dadvtny30/image/upload/v1708050849/organicfood/user/c5byvtpjvs7cbyis33ow.png"
                    alt=""
                    width={40}
                    height={40}
                    style={{ objectFit: 'cover' }}
                    className="rounded-full"
                  />
                  <div className="">
                    <p>Robert Fox</p>
                    <p className="text-gray500 text-[10px]">Customer</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <MdStarRate color="orange" />
                  <MdStarRate color="orange" />
                  <MdStarRate color="orange" />
                  <MdStarRate color="orange" />
                  <MdStarRate color="orange" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between px-[150px] py-12 bg-white">
          <Image
            src="https://res.cloudinary.com/dadvtny30/image/upload/v1708057935/organicfood/about/uhdh67unv93webs1rzmz.png"
            alt=""
            width={60}
            height={60}
            style={{ objectFit: 'contain' }}
          />
          <Image
            src="https://res.cloudinary.com/dadvtny30/image/upload/v1708057934/organicfood/about/gc6km7ywx9alojs2d87i.png"
            alt=""
            width={60}
            height={60}
            style={{ objectFit: 'contain' }}
          />
          <Image
            src="https://res.cloudinary.com/dadvtny30/image/upload/v1708057933/organicfood/about/nchfykugkctvm2swhhbw.png"
            alt=""
            width={60}
            height={60}
            style={{ objectFit: 'contain' }}
          />
          <Image
            src="https://res.cloudinary.com/dadvtny30/image/upload/v1708057933/organicfood/about/mromcmlzzzfwkzr6hcpi.png"
            alt=""
            width={60}
            height={60}
            style={{ objectFit: 'contain' }}
          />
          <Image
            src="https://res.cloudinary.com/dadvtny30/image/upload/v1708057933/organicfood/about/uzjzi2rnmgfh02tqyzpf.png"
            alt=""
            width={60}
            height={60}
            style={{ objectFit: 'contain' }}
          />
          <Image
            src="https://res.cloudinary.com/dadvtny30/image/upload/v1708057933/organicfood/about/qhnb8mbw6atmlqivjdpx.png"
            alt=""
            width={60}
            height={60}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
