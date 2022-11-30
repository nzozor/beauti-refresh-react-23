import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Treatment } from "../../types/treatment";
import Image from "next/image";
import imageLoader from "../../imageLoader";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Link from "next/link";
import BookButton from "../../components/BookButton";

const host = process.env.CMS_BASE_URL as string;

const TreatmentPage: NextPage<{ treatment: Treatment }> = ({ treatment }) => {
  console.log(treatment.content)
  return (
    <div className="bg-[#c7cbd626]">
      <div className="max-w-[1170px] mx-auto pt-[2rem]">
        <Link href='/treatments' className="cursor-pointer">
          <div className="flex place-items-center gap-[1.5rem] text-[#3e3d3c] py-[4rem] cursor-pointer w-[fit-content]">
            <ArrowBackIosNewIcon className="text-[1.5rem]" />
            <h4>Back To Treatments</h4>
          </div>
        </Link>
        <div className="flex justify-between">
          <h1 className="font-[100] text-[2rem] mb-[30px]">{treatment.title}</h1>
          <BookButton />
        </div>
        <img
          src="/images/treatments-default.jpeg"
          alt=""
          className="w-full"
        />
        <p>{treatment.content}</p>
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
