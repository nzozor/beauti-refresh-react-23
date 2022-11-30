import React from "react";
import { Review } from "../types/review";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import StarIcon from '@mui/icons-material/Star';

export interface Props {
  reviews: Review[];
}
const BeautiReviews: React.FC<Props> = ({ reviews }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '"></span>';
    },
  };

  return (
    <section>
      <h3 className="mt-[50px] mb-0 text-[32px] text-[#3e3d3c] font-[100] font-nunitoSans text-center">5 Star Reviews</h3>
      <Swiper
        className="xl:max-w-[1300px] h-full reviewSwiper"
        pagination={pagination}
        spaceBetween={0}
        loop={true}
        grabCursor={true}
        slidesPerView={'auto'}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          }
        }}
        centeredSlides={true}
        speed={1800}
        modules={[Pagination]}
      >
        {reviews.map((review: Review, index: number) => (
          <SwiperSlide key={index} className="slideHandle w-full min-h-[380px]">
            <div className="slideContainer h-[200px] p-[20px] w-[70%] lg:w-[85%] border-[#C7CBD6] border-[1px] text-center flex flex-col gap-[13px] justify-center place-items-center">
              <div className="quote text-[#3e3d3c] text-[13px] font-nunitoSans">&quot;{review.quote}&quot;</div>
              <div className="name text-[#b0b5c4] font-nunitoSans">{review.reviewerName}</div>
              <div className="flex justify-center gap-[0.6rem]">
                <StarIcon className="text-[25px] text-[#c7cbd6]" />
                <StarIcon className="text-[25px] text-[#c7cbd6]" />
                <StarIcon className="text-[25px] text-[#c7cbd6]" />
                <StarIcon className="text-[25px] text-[#c7cbd6]" />
                <StarIcon className="text-[25px] text-[#c7cbd6]" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BeautiReviews;
