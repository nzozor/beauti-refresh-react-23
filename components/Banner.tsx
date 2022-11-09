import React from "react";

import Image from "next/image";
import { BannerInfo } from "../types/banner";

export interface Props {
  bannerInfo: BannerInfo;
}
const HeaderNav: React.FC<Props> = ({ bannerInfo }) => {
  const treatWellLink =
    "https://widget.treatwell.co.uk/place/beauti-skin-clinic/";

  const imgSrc = "https://cms.beautiskinclinic.com";
  return (
    <article>
      <div className="slider-title">
        <h3>{bannerInfo.title1}</h3>
        <h1>{bannerInfo.title2}</h1>
        <h2>{bannerInfo.title3}</h2>
        <h5>{bannerInfo.title4}</h5>
      </div>
      <a
        href={treatWellLink}
        className="book-now"
        target="_blank"
        rel="noreferrer"
      >
        <h2>Book now</h2>
      </a>
      {bannerInfo.asterisk}

      <div>
        <Image
          src={imgSrc + bannerInfo.image.formats.large.url}
          alt={bannerInfo.image.alternativeText}
          width={300}
          height={100}
        />
      </div>
    </article>
  );
};

export default HeaderNav;
