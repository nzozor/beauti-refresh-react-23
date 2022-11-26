import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { BannerInfo } from "../types/banner";
import BookButton from "./BookButton";
export interface Props {
  bannerInfo: BannerInfo;
}

const HeaderNav: React.FC<Props> = ({ bannerInfo }) => {
  const imgSrc = "https://cms.beautiskinclinic.com";
  const imgStyle = {
    height: "550px",
    zIndex: "0",
  };
  return (
    <article>
      <div className="slider-title">
        <h3>{bannerInfo.title1}</h3>
        <h2>{bannerInfo.title2}</h2>
        <h4>{bannerInfo.title3}</h4>
        <h5>{bannerInfo.title4}</h5>
      </div>
      <BookButton />

      {bannerInfo.asterisk}

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
