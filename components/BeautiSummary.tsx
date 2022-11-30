import Link from "next/link";
import React from "react";

const HomePageSlider: React.FC = () => {
  return (
    <section className="mt-[60px] w-full flex justify-center pb-[30px]">
      <div className="max-w-[850px] text-center">
        <p className="text-[20px] leading-[32px] font-[300] text-[#3e3d3c] px-[10px] pb-[30px] font-nunitoSans">
          A boutique skin clinic located in SW9 Oval London, lead by experienced
          Aesthetician Cinzia Campigotto, who has extensive knowledge in skin
          health and wellbeing. Beauti is specialised in providing advanced skin
          solutions to skin conditions such as ageing, acne, rosacea and
          pigmentation. We believe in delivering the most effective results while
          creating a warm, clean and friendly atmosphere for all our customers.
        </p>

        <Link href="/treatments">
          <button className="px-[30px] py-[5px] bg-[#c7cbd6] border-r-[2px] cursor-pointer text-[#fff] leading-[36px] uppercase font-nunitoSans text-[13px]">View Treatments</button>
        </Link>

      </div>
    </section>
  );
};

export default HomePageSlider;
