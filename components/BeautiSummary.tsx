import Link from "next/link";
import React from "react";

const HomePageSlider: React.FC = () => {
  return (
    <section>
      <h1>A boutique skin clinic located in SW9 Oval London,</h1>
      <p>
        A boutique skin clinic located in SW9 Oval London, lead by experienced
        Aesthetician Cinzia Campigotto, who has extensive knowledge in skin
        health and wellbeing. Beauti is specialised in providing advanced skin
        solutions to skin conditions such as ageing, acne, rosacea and
        pigmentation. We believe in delivering the most effective results while
        creating a warm, clean and friendly atmosphere for all our customers.
      </p>
      <Link href="/treatments">View Treatments </Link>
    </section>
  );
};

export default HomePageSlider;
