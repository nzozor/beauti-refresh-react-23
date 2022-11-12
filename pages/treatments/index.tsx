import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Treatment } from "../../types/treatment";

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
  const localhost = "http://localhost:1337/treatments";
  const prod = "http://cms.beautiskinclinic.com/treatments";
  // const response = await fetch(prod);
  const response = await fetch(localhost);

  // Parse the JSON
  const treatments = await response.json();

  // Finally we return the result
  // inside props as allPokemons
  return {
    props: { treatments },
  };
};

export default Treatments;
