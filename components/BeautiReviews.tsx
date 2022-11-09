import Link from "next/link";
import React from "react";
import Image from "next/image";
import imageLoader from "../imageLoader";
import { BannerInfo } from "../types/banner";
import Banner from "./Banner";
import { Review } from "../types/review";

export interface Props {
  reviews: Review[];
}
const BeautiReviews: React.FC<Props> = ({ reviews }) => {
  return (
    <section>
      <h3>5 Star Reviews</h3>
      {reviews.map((review: Review, index: number) => (
        <div key={index}>
          <article>
            <div className="quote">{review.quote}</div>
            <div className="name">{review.reviewerName}</div>
          </article>
        </div>
      ))}
    </section>
  );
};

export default BeautiReviews;
