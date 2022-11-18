import React from "react";

import { BannerInfo } from "../types/banner";
import Banner from "./Banner";

export interface Props {
  banners: BannerInfo[];
}
const HomePageSlider: React.FC<Props> = ({ banners }) => {
  return (
    <div>
      {banners.map((banner: BannerInfo) => (
        <Banner bannerInfo={banner} key={banner.id.toString()} />
      ))}
    </div>
  );
};

export default HomePageSlider;
