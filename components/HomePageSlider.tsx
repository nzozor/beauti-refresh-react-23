import React from "react";

import { BannerInfo } from "../types/banner";
import Banner from "./Banner";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import "swiper/css/pagination";

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
        className="mySwiper"
        pagination={pagination}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Pagination]}
      >
        {banners.map((banner: BannerInfo) => (
          <SwiperSlide key={banner.id.toString()} className="w-screen">
            <Banner bannerInfo={banner} />
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
