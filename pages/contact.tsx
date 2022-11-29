import { GetStaticProps, NextPage } from "next";
import { AboutUsCopy } from "../types/AboutUsCopy";
import Image from "next/image";
import MapBox from "../components/MapBox";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import "swiper/css/pagination";

const aboutUs: NextPage = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '"></span>';
        },
    };

    const imageList = [
        {
            imageSource: '/images/beauti-skin-clinic-oval-1.jpg',
            alt: 'Beauti Salon interior picture 1 | Beauti Skin Clinic Oval',
        },
        {
            imageSource: '/images/beauti-skin-clinic-oval-2.jpg',
            alt: 'Beauti Salon interior picture 2 | Beauti Skin Clinic Oval',
        },
        {
            imageSource: '/images/beauti-skin-clinic-oval-3.jpg',
            alt: 'Beauti Salon interior picture 3 | Beauti Skin Clinic Oval',
        },
        {
            imageSource: '/images/beauti-skin-clinic-oval-alumier.jpg',
            alt: 'Beauti Salon interior picture 4 | Beauti Skin Clinic Oval',
        },
        {
            imageSource: '/images/beauti-skin-clinic-oval-sothys.jpg',
            alt: 'Beauti Salon interior picture 5 | Beauti Skin Clinic Oval',
        },
        {
            imageSource: '/images/beauti-skin-clinic-oval-waxed.jpg',
            alt: 'Beauti Salon interior picture | Beauti Skin Clinic Oval',
        },
    ]

    return (
        <section className="w-full flex flex-col justify-center place-items-center border-[1px] border-b-[rgba(62,61,60,.7)]">
            <MapBox isContact={true}/>
            <article className="contact-points text-center mt-[6rem] mb-[4rem] grid grid-cols-1 lg:grid-cols-3 mx-auto gap-[2rem] lg:gap-[5rem] md:w-[880px]">
                <div>
                    <h2 className="mb-[25px] font-[100] text-[34px] text-[#3e3d3c]">Address</h2>
                    <div className="address-section text-[17px] leading-[29px] font-[100] text-[#3e3d3c]">
                        66A Brixton Road <br />
                        Oval | Brixton <br />
                        London, &nbsp;
                        <a
                            href="https://g.page/beautiskinclinic?share"
                            target="_blank"
                            rel="noreferrer"
                            className="address-google-map underline"
                        >
                            SW9 6BP
                        </a>
                    </div>
                </div>
                <div>
                    <h1 className="mb-[25px] font-[100] text-[34px] text-[#3e3d3c]">Contact Details</h1>
                    <div className="text-[17px] leading-[29px] font-[100] text-[#3e3d3c]">
                        020 7820 1177 <br />
                        info@beautiskinclinic.com
                    </div>
                </div>
                <div>
                    <h2 className="mb-[25px] font-[100] text-[34px] text-[#3e3d3c]">Hours</h2>
                    <div className="text-[17px] leading-[29px] font-[100] text-[#3e3d3c]">
                        Mon-Fri | 10am-8pm <br />
                    </div>
                    <div className="text-[17px] leading-[29px] font-[100] text-[#3e3d3c]">
                        Sat | 9am-5pm <br />
                    </div>
                </div>
            </article>
            <article className="pb-[4rem] px-[1rem] md:px-0">
                <Swiper
                    className="mySwiper contactSwiper max-w-[95vw] lg:max-w-[850px]"
                    pagination={pagination}
                    spaceBetween={0}
                    slidesPerView={1}
                    grabCursor={true}
                    modules={[Pagination]}
                    loop={true}
                    speed={600}
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

export default aboutUs;

/*
export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch("http://cms.beautiskinclinic.com/about-us-page");
    // Parse the JSON
    const aboutUsCopy: AboutUsCopy = await response.json();
    const copy = aboutUsCopy.Content;

    return {
        props: { copy },
    };
};
*/


