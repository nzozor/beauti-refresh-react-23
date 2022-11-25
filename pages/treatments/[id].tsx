import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Treatment } from "../../types/treatment";
import Image from "next/image";
import imageLoader from "../../imageLoader";

const host = process.env.CMS_BASE_URL as string;

const TreatmentPage: NextPage<{ treatment: Treatment }> = ({ treatment }) => {
  return (
    <div>
      <h1>{treatment.title}</h1>
      <Image
        src={host + treatment.images[0]?.formats.large.url}
        alt={treatment.images[0].alternativeText}
        width="200px"
        height="200px"
        loader={imageLoader}
        unoptimized
      />
      <p> {treatment.content}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${host}treatments`);
  const treatments: Treatment[] = await response.json();

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
  const treatment: Treatment[] = await response.json();

  return {
    props: {
      treatment: treatment[0],
    },
  };
};
export default TreatmentPage;
