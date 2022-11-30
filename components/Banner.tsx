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
  const imgSrc = "https://cms.beautiskinclinic.com";
  const imgStyle = {
    height: "600px",
    zIndex: "0",
  };
  return (
    <article className="max-h-[535px]">
      <div className="slider-title max-w-[900px] text-[#fff] h-full pt-[75px] text-center sm:text-start px-[5%]">
        <h3 className="text-center sm:text-start text-[19px] mb-[50px] font-[100] font-nunitoSans">{bannerInfo.title1}</h3>
        <h1 className="text-center sm:text-start font-[600] text-[24px] sm:text-[44px] font-nunitoSans">{bannerInfo.title2}</h1>
        <h2 className="text-center sm:text-start font-[300] text-[24px] sm:text-[44px] font-nunitoSans">{bannerInfo.title3}</h2>
        <h5 className="text-center sm:text-start text-[27px] font-[300] min-h-[37px] font-nunitoSans">{bannerInfo.title4}</h5>
        <Link href="https://widget.treatwell.co.uk/place/beauti-skin-clinic/">
          <button className="uppercase py-[5px] px-[50px] bg-[#c7cbd6] leading-[36px] mb-[30px] font-nunitoSans">Book Now</button>
        </Link>
        <p className="font-nunitoSans">{bannerInfo.asterisk}</p>
      </div>
      <div style={imgStyle} className="img-container">
        <Image
          quality={100}
          className="image-next"
          src={imgSrc + bannerInfo.image.formats.large.url}
          alt={
            (bannerInfo.image.alternativeText &&
              imgSrc + bannerInfo.image.alternativeText) ||
            bannerInfo.title2
          }
          // width={300}
          // height={100}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </article>
  );
};

export default HeaderNav;
