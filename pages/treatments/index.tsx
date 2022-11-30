import React from "react";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Treatment } from "../../types/treatment";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BookButton from "../../components/BookButton";

const Treatments: NextPage<{
  treatments: Treatment[];
  sections: any[];
  prices: any[];
}> = ({ treatments, sections, prices }) => {
  const [expanded, setExpanded] = React.useState<string[]>([]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      event.preventDefault();
      event.stopPropagation();
      const rootSections = sections.filter(
        (section) => !section.parentSection || section.parentSection.length == 0
      );

      if (rootSections.find((section) => section.id === panel)) {
        setExpanded([]);
      }

      if (
        rootSections.find((section) => section.id === panel) &&
        !expanded.includes(panel)
      ) {
        setExpanded([panel]);
      } else {
        setExpanded(
          isExpanded
            ? [...expanded, panel]
            : expanded.filter((id) => id != panel)
        );
      }
    };

  const displayPrices = (parentId: string, slugRef: string = "", showcasePage: boolean = false) => {
    return prices
      .filter(
        (price: any) =>
          price.section?.id === parentId || price.treatment?.id === parentId
      )
      .map((price: any) => (
        <div key={price.id} className="treatmentsTable my-[1rem] mx-[1rem]">
          {
            slugRef && (
              <div className="bg-[#c7cbd699] flex justify-between place-items-center p-[20px]">
                <h2 className="text-[17px] text-start font-robotoSans">{price.priceTitle}</h2>
                {showcasePage && (
                  <Link href={`/treatments/${slugRef}`}><button className="w-[146px] h-[41px] border-[1px] border-[#3E3D3C] bg-transparent text-[#3e3d3c]">Read more</button></Link>
                )}
                {!showcasePage && <BookButton />}
              </div>
            )
          }
          <table className="w-full text-start">
            <thead className="mb-[1rem]">
            <div className="h-[10px] bg-transparent"></div>
              <tr className="m-2">
                {!price.hideColumnTitles &&
                  price.colTitles.map((colTitle: any) => (
                    <th key={colTitle.id} className="p-2 pl-[20px] text-start capitalize bg-[#c7cbd62e] min-w-[120px] font-nunitoSans">
                      {!colTitle.hide && colTitle.title}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody className="w-full">
              {price.Rows.map((row: any) => (
                <tr key={row.id}>
                  {row.singleRow.map((col: any) => (
                    <td key={col.id} className="p-2 w-[fit-content] pl-[20px] min-w-[120px] font-nunitoSans">{col.value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ));
  };
  const displayTreatment = (sectionId: string) => {
    return treatments
      .filter((treatment: any) => treatment.section?.id === sectionId)
      .map((treatment) => (
        <div key={treatment.id} className="">
          <div>{displayPrices(treatment.id, treatment.slug, treatment.showcasePage)}</div>
        </div>
      ));
  };
  const displaySectionChildren = (sectionToDisplay: any) => {
    return sections
      .filter(
        (section: any) => section.parentSection?.id === sectionToDisplay?.id
      )
      .map((section: any, index: number) => (
        <Accordion
          key={section.id}
          expanded={expanded.includes(section.id)}
          onChange={handleChange(section.id)}
          className="bg-transparent"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <h2 className="p-2 font-[100] text-[22px] text-center leading-[30px] pl-[1rem] font-robotoSans">
              {section.sectionName}
            </h2>
          </AccordionSummary>
          <AccordionDetails className="p-0 m-0">
            {displaySectionChildren(section)} {displayTreatment(section.id)}
            {displayPrices(section.id)}
          </AccordionDetails>
        </Accordion>
      ));
  };

  return (
    <div className="bg-transparent py-[70px] px-[10px] md:px-[30px] treatments">
      <h1 className="text-[32px] mb-[50px] text-[#3e3d3c] font-[100] text-center font-robotoSans">Treatments</h1>
      <div className="mx-auto md:max-w-[853px] treatmentBackground">
        {sections
          .filter(
            (section) =>
              !section.parentSection || section.parentSection.length == 0
          )
          .map((section) => (
            <Accordion
              key={section.id}
              expanded={expanded.includes(section.id)}
              onChange={handleChange(section.id)}
              className="treatmentBackground cursor-pointer"
            >
              <div className="flex justify-between place-items-center">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className='expandMoreIcon'/>}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  className="p-4 hover:text-[#656565] relative flex text-start w-[50vw] place-items-center treatmentBackground cursor-pointer grow-[0]"
                >
                  <h2 className="font-[100] text-[22px] text-start leading-[30px] treatmentBackground headerTitle">
                    {section.sectionName}
                  </h2>
                </AccordionSummary>
                <div className="w-0 md:w-[24%]">
                  <BookButton />
                </div>
              </div>
              <AccordionDetails className={section.sectionName === 'Waxing' ? 'p-0 m-0 grid md:grid-cols-2' : 'p-0 m-0'}>
                {displaySectionChildren(section)} {displayTreatment(section.id)}
                {displayPrices(section.id)}
              </AccordionDetails>
            </Accordion>
          ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const host = process.env.CMS_BASE_URL as string;
  const response = await fetch(`${host}treatments`).catch((error) => {
    console.warn("There was an error!", error);
    return [];
  });

  const sectionResponse = await fetch(`${host}sections`).catch((error) => {
    console.warn("There was an error!", error);
    return [];
  });

  const pricesResponse = await fetch(`${host}prices`).catch((error) => {
    console.warn("There was an error!", error);
    return [];
  });
  // Parse the JSON
  let treatments = await (response as Response)?.json();
  treatments = Array.isArray(treatments) ? treatments : [];
  let sections = await (sectionResponse as Response)?.json();
  sections = Array.isArray(sections) ? sections : [];

  let prices = await (pricesResponse as Response)?.json();
  prices = Array.isArray(prices) ? prices : [];

  // Finally we return the result
  // inside props as allPokemons
  return {
    props: { treatments, sections, prices },
  };
};

export default Treatments;
