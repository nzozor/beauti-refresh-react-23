import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Treatment } from "../../types/treatment";
import Image from "next/image";
import imageLoader from "../../imageLoader";
import Link from "next/link";
import BookButton from "../../components/BookButton";
import ReactMarkdown from 'react-markdown'
import React from "react";
const host = process.env.CMS_BASE_URL as string;

const TreatmentPage: NextPage<{ treatment: Treatment }> = ({ treatment }) => {
  console.log(treatment.content)
  return (
    <div className="bg-[#c7cbd626] treatment-showcase pb-10">
      <div className="max-w-[1170px] mx-auto pt-[1rem]">
        <Link href='/treatments' className="cursor-pointer ">
          <div className="flex place-items-center gap-[1.5rem] text-[#3e3d3c] pt-[2rem] pb-[2rem]  cursor-pointer w-[fit-content]">
            <span
                className="ml-4 sm:ml-2 md:ml-0 mat-expansion-indicator left ng-tns-c39-2 ng-trigger ng-trigger-indicatorRotate ng-star-inserted"
            ></span>
            <h4 className="text-[17px] font-robotoSans font-[100] text-[#3e3d3c] ">Back To Treatments</h4>
          </div>
        </Link>
        <div className="flex justify-between mr-6 ml-6">
          <h1 className="ml-4 md:ml-0 mb-[25px] font-[100] text-[2rem] text-[#3e3d3c] font-robotoSans">{treatment.title}</h1>
          <BookButton  />
        </div>
        <img
          src="/images/treatments-default.jpeg"
          alt=""
          className="w-full"
        />
        <ReactMarkdown className="markdown">{treatment.content}</ReactMarkdown>
      </div>
      <div className="book-treatment-fixed">
        <BookButton/>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${host}treatments`);
  let treatments: Treatment[] = await response.json();
  treatments = Array.isArray(treatments) ? treatments : [];

  const paths = treatments
    .filter((treatment) => treatment.content)
    .map((product) => {
      return {
        params: {
          id: product.slug.toString(),
        },
      };
    });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const id = context.params?.id;
  const response = await fetch(`${host}treatments?slug=${id}`);
  let treatment: Treatment[] = await response.json();
  treatment = Array.isArray(treatment) ? treatment : [];

  return {
    props: {
      treatment: treatment[0],
    },
  };
};
export default TreatmentPage;
