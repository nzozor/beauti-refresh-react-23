import { GetStaticProps, NextPage } from "next";
import { AboutUsCopy } from "../types/AboutUsCopy";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import "swiper/css/pagination";

const aboutUs: NextPage<{ copy: string }> = ({ copy }: any) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '"></span>';
    },
  };
  return (
    <section>
      <div dangerouslySetInnerHTML={{ __html: copy }} />
      <Swiper
        className="mySwiper"
        pagination={pagination}
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <Image
            src="/images/cinzia-campigotto-1.jpg"
            alt="Cinzia Profile Picture 1 | Beauti Skin Clinic Oval"
            width={300}
            height={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/cinzia-campigotto-2.jpg"
            alt="Cinzia Profile Pictur 2 | Beauti Skin Clinic Oval"
            width={300}
            height={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/cinzia-campigotto-3.jpg"
            alt="Cinzia Profile Pictur 3 | Beauti Skin Clinic Oval"
            width={300}
            height={100}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://cms.beautiskinclinic.com/about-us-page");
  // Parse the JSON
  const aboutUsCopy: AboutUsCopy = await response.json();
  const copy = aboutUsCopy.Content;

  return {
    props: { copy },
  };
};
export default aboutUs;
