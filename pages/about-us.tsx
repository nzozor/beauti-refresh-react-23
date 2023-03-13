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
  const paginationWide = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '';
    },
  };
  const imageList = [
    {
      imageSource: '/images/cinzia-campigotto-1.jpg',
      alt: 'Cinzia Profile Picture 1 | Beauti Skin Clinic Oval',
    },
    {
      imageSource: '/images/cinzia-campigotto-2.jpg',
      alt: 'Cinzia Profile Picture 2 | Beauti Skin Clinic Oval',
    },
    {
      imageSource: '/images/cinzia-campigotto-3.jpg',
      alt: 'Cinzia Profile Picture 3 | Beauti Skin Clinic Oval',
    },

  ]

  return (
    <section className="aboutus text-[#3e3d3c] text-start">
      <div dangerouslySetInnerHTML={{ __html: copy }} className='p-[2rem] mx-auto max-w-[920px]' />
      <article className="pb-[4rem] px-[2rem] md:px-0">
        <Swiper
            className="mySwiper contactSwiper "
            spaceBetween={0}
            slidesPerView={1}
            grabCursor={true}
            modules={[Pagination]}
            pagination={pagination}

            speed={600}
            breakpoints={{

              576: {
                pagination: paginationWide,
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}

        >
          {
            imageList.map((item, index) => {
              return (
                  <SwiperSlide key={index} className="flex justify-center">
                    <img
                        alt={item.alt}
                        className="js-lazy-image"
                        src={item.imageSource}
                    />
                  </SwiperSlide>
              )
            })
          }
        </Swiper>
      </article>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://cms.beautiskinclinic.com/about-us-page");

  let copy: any = '';
  if(response.ok) {
    const aboutUsCopy: AboutUsCopy = await response.json();
    copy = aboutUsCopy.Content;
  }

  return {
    props: { copy },
  };
};
export default aboutUs;
