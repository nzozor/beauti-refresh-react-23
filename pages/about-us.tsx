import { GetStaticProps, NextPage } from "next";
import { AboutUsCopy } from "../types/AboutUsCopy";
import Image from "next/image";

const aboutUs: NextPage<{ copy: string }> = ({ copy }: any) => {
  return (
    <section>
      <div dangerouslySetInnerHTML={{ __html: copy }} />
      <Image
        src="/images/cinzia-campigotto-1.jpg"
        alt="Cinzia Profile Picture 1 | Beauti Skin Clinic Oval"
        width={300}
        height={100}
      />
      <Image
        src="/images/cinzia-campigotto-2.jpg"
        alt="Cinzia Profile Pictur 2 | Beauti Skin Clinic Oval"
        width={300}
        height={100}
      />
      <Image
        src="/images/cinzia-campigotto-3.jpg"
        alt="Cinzia Profile Pictur 3 | Beauti Skin Clinic Oval"
        width={300}
        height={100}
      />
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://cms.beautiskinclinic.com/about-us-page");
  // Parse the JSON
  const aboutUsCopy: AboutUsCopy = await response.json();
  console.log(aboutUsCopy);
  const copy = aboutUsCopy.Content;

  return {
    props: { copy },
  };
};
export default aboutUs;
