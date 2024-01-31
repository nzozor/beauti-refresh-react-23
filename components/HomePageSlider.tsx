import React from "react";

import { BannerInfo } from "../types/banner";
import Banner from "./Banner";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Pagination, EffectFade } from "swiper";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';

export interface Props {
  banners: BannerInfo[];
}
const HomePageSlider: React.FC<Props> = ({ banners }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '"></span>';
    },
  };
  return (
    <div className="w-screen">
      <Swiper
        className="mySwiper bannerSwiper"
        pagination={pagination}
        spaceBetween={0}
        slidesPerView={1}
        effect='fade'
        speed={1500}
        modules={[Pagination, EffectFade]}
      >
        {banners.map((banner: any) => (
          <SwiperSlide key={banner.id.toString()} className="w-full">
            <Banner bannerInfo={banner.attributes} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* {banners.map((banner: BannerInfo) => (
        <Banner bannerInfo={banner} key={banner.id.toString()} />
      ))} */}
    </div>
  );
};

export default HomePageSlider;
