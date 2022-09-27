import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Treatment } from "../../types";

const Treatments: NextPage<{ treatments: Treatment[] }> = ({ treatments }) => {
  return (
    <div>
      {treatments
        .filter((treatment: Treatment) => treatment.content)
        .map((treatment: Treatment) => {
          return (
            <div key={treatment.id}>
              <Link href={`/treatments/${encodeURIComponent(treatment.slug)}`}>
                {treatment.name || treatment.title}
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch("http://cms.beautiskinclinic.com/treatments");

  // Parse the JSON
  const treatments = await response.json();

  // Finally we return the result
  // inside props as allPokemons
  return {
    props: { treatments },
  };
};

export default Treatments;
