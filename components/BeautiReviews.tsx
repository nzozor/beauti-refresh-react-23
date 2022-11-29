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
      <h3 className="mt-[50px] mb-0 text-[32px] text-[#3e3d3c] font-[100]">5 Star Reviews</h3>
      <Swiper
        className="xl:max-w-[1500px] h-full reviewSwiper"
        pagination={pagination}
        spaceBetween={20}
        loop={true}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 3
          }
        }}
        centeredSlides={true}
        speed={1800}
        modules={[Pagination]}
      >
        {reviews.map((review: Review, index: number) => (
          <SwiperSlide key={index} className="slideHandle w-full min-h-[380px]">
            <div className="slideContainer h-[200px] p-[20px] w-[70%] lg:w-[400px] border-[#C7CBD6] border-2 text-center flex flex-col gap-[13px] justify-center place-items-center">
              <div className="quote text-[#3e3d3c] text-[13px]">&quot;{review.quote}&quot;</div>
              <div className="name text-[#b0b5c4]">{review.reviewerName}</div>
              <div className="">
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
