'use client';

//image
import image1 from '@/assets/images/bg1.png';
import image2 from '@/assets/images/bg2.png';
import image3 from '@/assets/images/bg3.png';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

//component
import BannerHome from '@/components/client/home/BannerHome';

const Home = () => {
  return (
    <div className="relative w-full min-h-screen pt-4">
      <div className="flex items-center justify-center w-full h-[540px] bg-my-image bg-cover">
        <Swiper
          navigation={true}
          modules={[Pagination, Navigation]}
          className="z-[1]"
        >
          <SwiperSlide className="w-full z-[1]">
            <BannerHome image={image1} left={true} />
          </SwiperSlide>
          <SwiperSlide className="w-full z-[1]">
            <BannerHome image={image2} left={false} />
          </SwiperSlide>
          <SwiperSlide className="w-full z-[1]">
            <BannerHome image={image3} left={true} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
