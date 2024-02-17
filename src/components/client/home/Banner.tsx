//next
import Image from 'next/image';

//image
import image1 from '@/assets/images/bg1.png';
import image2 from '@/assets/images/bg2.png';
import image3 from '@/assets/images/bg3.png';

//icon
import { FaArrowRight } from 'react-icons/fa';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

interface BannerItemProps {
  image: any;
  left: boolean;
}

const BannerItem = (props: BannerItemProps) => {
  const { image, left } = props;

  return (
    <div className="w-full flex items-center justify-center px-6 gap-6">
      {left && <Image src={image} alt="" className="w-2/5 object-cover" />}
      <div className="flex flex-col items-start gap-4">
        <p className="text-primary text-md">WELCOME TO SHOPERY</p>
        <h1 className="text-black text-6xl font-bold">Fresh & Healthy</h1>
        <h1 className="text-black text-6xl font-bold">Organic Food</h1>
        <p className="text-xl font-semibold">
          Sale up to <span className="">30% OFF</span>
        </p>
        <p className="text-sm text-gray500">
          Free shipping on all your order we delivery, you enjoin
        </p>
        <button className="flex items-center gap-3 bg-primary rounded-3xl px-6 py-2">
          <p className="text-white font-medium">Show now</p>
          <FaArrowRight color="white" />
        </button>
      </div>
      {!left && <Image src={image} alt="" className="w-2/5 object-cover" />}
    </div>
  );
};

export const Banner = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Pagination, Navigation]}
      className="z-[1]"
    >
      <SwiperSlide className="w-full z-[1]">
        <BannerItem image={image1} left={true} />
      </SwiperSlide>
      <SwiperSlide className="w-full z-[1]">
        <BannerItem image={image2} left={false} />
      </SwiperSlide>
      <SwiperSlide className="w-full z-[1]">
        <BannerItem image={image3} left={true} />
      </SwiperSlide>
    </Swiper>
  );
};
