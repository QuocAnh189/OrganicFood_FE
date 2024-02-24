//next
import Image from 'next/image';
import Link from 'next/link';

//icon
import { FaArrowRightLong } from 'react-icons/fa6';

export const Introduction = () => {
  return (
    <>
      <div className="flex items-center justify-between px-[150px] py-8 bg-white">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-black">
            100% Trusted <br />
            Organic Food Store
          </h1>
          <p className="text-justify text-gray500 text-[14px] max-w-[500px]">
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
            laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
            Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec
            a eros non massa vulputate ornare. Vivamus ornare commodo ante, at
            commodo felis congue vitae.
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
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
            mi. Nulla eu eros consequat tortor tincidunt feugiat.
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
                <p className="text-gray500 text-[14px]">Our happy customers.</p>
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
                <p className="text-black font-semibold">100% Secure Payment</p>
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
            ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim
            diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum
            nunc eget elementum.
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
    </>
  );
};
