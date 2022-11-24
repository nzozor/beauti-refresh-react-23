import React from "react";

import Image from "next/image";
import { BannerInfo } from "../types/banner";
import BookButton from "./BookButton";

export interface Props {
  bannerInfo: BannerInfo;
}
const HeaderNav: React.FC<Props> = ({ bannerInfo }) => {
  const imgSrc = "https://cms.beautiskinclinic.com";
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

      <div>
        <Image
          src={imgSrc + bannerInfo.image.formats.large.url}
          alt={
            (bannerInfo.image.alternativeText &&
              imgSrc + bannerInfo.image.alternativeText) ||
            bannerInfo.title2
          }
          width={300}
          height={100}
        />
      </div>
    </article>
  );
};

export default HeaderNav;
