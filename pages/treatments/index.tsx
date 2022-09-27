import type { GetStaticProps, NextPage } from "next";
import { Treatment } from "../../types";

const Treatments: NextPage<{ treatments: Treatment[] }> = ({ treatments }) => {
  return (
    <div>
      {treatments.map((treatment: Treatment) => {
        return (
          <div key={treatment.id}>{treatment.name || treatment.title} </div>
        );
      })}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch("https://cms.beautiskinclinic.com/treatments");

  // Parse the JSON
  const treatments = await response.json();

  // Finally we return the result
  // inside props as allPokemons
  return {
    props: { treatments },
  };
};

export default Treatments;
