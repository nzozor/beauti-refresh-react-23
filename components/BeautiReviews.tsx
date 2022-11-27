import React from "react";
import { Review } from "../types/review";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import "swiper/css/pagination";

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
      <h3>5 Star Reviews</h3>
      <Swiper
        className="max-w-xl"
        pagination={pagination}
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Pagination]}
      >
        {reviews.map((review: Review, index: number) => (
          <SwiperSlide key={index}>
            <div className="quote">{review.quote}</div>
            <div className="name">{review.reviewerName}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BeautiReviews;
