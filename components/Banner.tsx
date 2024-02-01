import React from "react";
import Image from "next/image";
import { BannerInfo } from "../types/banner";
import BookButton from "./BookButton";
import BurgerMenu from "./BurgerMenu";
import Link from "next/link";

export interface Props {
  bannerInfo: BannerInfo;
}

const HeaderNav: React.FC<Props> = ({ bannerInfo }) => {
  const imgSrc = 'https://cms.tracksdigital.com' as string;

  const imgStyle = {
    height: "600px",
    zIndex: "0",
  };
  return (
    <article className="max-h-[448px] ">
      <div className="slider-title max-w-[370px] sm:max-w-[900px] text-[#fff] h-full pt-[75px] md:pt-[100px] text-center text-start pl-[5%] leading-tight">
        { bannerInfo.title1 ?<h3 className="text-start text-[19px] mb-[50px] font-[300] font-nunitoSans" >{bannerInfo.title1}</h3> : '' }
        { bannerInfo.title2 ? <h1 className="text-start font-[600] text-[31px] sm:text-[44px] font-nunitoSans">{bannerInfo.title2}</h1> : '' }
        { bannerInfo.title3 ? <h2 className="text-start font-[300] text-[32px] sm:text-[44px] font-nunitoSans">{bannerInfo.title3}</h2> : '' }
        { bannerInfo.title4 ? <h5 className="text-start text-[23px] font-[300] min-h-[37px] md:mt-6 font-nunitoSans">{bannerInfo.title4}</h5> : ''}
        <Link href="https://widget.treatwell.co.uk/place/beauti-skin-clinic/">
          <button className="uppercase py-[5px] px-[50px] bg-[#c7cbd6] leading-[36px] mb-[30px] mt-[30px] font-nunitoSans rounded  text-[13px]">Book Now</button>
        </Link>
        <p className="font-nunitoSans text-[#ffffffab]">{bannerInfo.asterisk}</p>
      </div>
      <div style={imgStyle} className="img-container">
        <Image
          quality={70}
          className="image-next"
          src={`${imgSrc}${bannerInfo.image.data.attributes.url}`}
          alt={
            (bannerInfo.image.data.attributes.alternativeText &&
              imgSrc + bannerInfo.image.data.attributes.alternativeText) ||
            bannerInfo.title2
          }
          // width={300}
          // height={100}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </div>
    </article>
  );
};

export default HeaderNav;
