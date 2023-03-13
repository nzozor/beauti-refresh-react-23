import React from "react";
import type {GetStaticProps, NextPage} from "next";
import Link from "next/link";
import {Treatment} from "../../types/treatment";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BookButton from "../../components/BookButton";

const Treatments: NextPage<{
  treatments: Treatment[];
  sections: any[];
  prices: any[];
}> = ({treatments, sections, prices}) => {
  const [expanded, setExpanded] = React.useState<string[]>([]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      event.preventDefault();
      event.stopPropagation();
      const rootSections = sections.filter(
        (section) => !section.parentSection || section.parentSection.length == 0
      );

      setExpanded(
        isExpanded
          ? [...expanded, panel]
          : expanded.filter((id) => id != panel)
      );
    };

  const displayPrices = (parentId: string, slugRef: string = "", showcasePage: boolean = false) => {
    return prices
      .filter(
        (price: any) =>
          price.section?.id === parentId || price.treatment?.id === parentId
      )
      .map((price: any) => (
        <div key={price.id} className="treatmentsTable my-[1rem]">
          {
            slugRef && (
              <div
                className="bg-[#c7cbd699] flex flex-col items-start justify-center md:flex-row md:justify-between md:items-center justify-between place-items-center p-[20px]">
                <h2 className="text-[17px] text-start font-robotoSans">{price.priceTitle}</h2>
                {showcasePage && (
                  <div>
                    <Link href={`/treatments/${slugRef}`} className="">
                      <button
                        className="hidden md:block w-[146px] h-[41px] border-[1px] border-[#3E3D3C] bg-transparent text-[#3e3d3c]">Read
                        more
                      </button>
                    </Link>
                    <Link href={`/treatments/${slugRef}`}>
                      <span className="block md:hidden underline">Read more</span>
                    </Link>
                  </div>
                )}
                {!showcasePage && <BookButton/>}
              </div>
            )
          }
          <div className="price-overflow">
            <table className="w-full text-start">
              <thead className="mb-[1rem]">
              <div className="h-[10px] bg-transparent"></div>
              <tr className="my-2">
                {!price.hideColumnTitles &&
                  price.colTitles.map((colTitle: any) => (
                    <th key={colTitle.id}
                        className="p-2 pl-[20px] text-start capitalize bg-[#c7cbd62e] min-w-[120px] font-nunitoSans">
                      {!colTitle.hide && colTitle.title}
                    </th>
                  ))}
              </tr>
              </thead>
              <tbody className="w-full">
              {price.Rows.map((row: any) => (
                <tr key={row.id}>
                  {row.singleRow.map((col: any) => (
                    <td key={col.id}
                        className="p-2 w-[fit-content] pl-[20px] min-w-[120px] font-nunitoSans">{col.value}</td>
                  ))}
                </tr>
              ))}
              </tbody>
            </table>
          </div>
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
          className="treatmentBackground cursor-pointer"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className='expandMoreIcon'/>}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className="py-2 px-0 over:text-[#656565] relative flex text-start place-items-center treatmentBackground cursor-pointer grow-[0]"
          >
            <h2
              className="font-[100] text-[22px] text-[#0009] font-robotoSans text-start leading-[30px] treatmentBackground headerTitle">
              {section.sectionName}
            </h2>
            <span
              className="mat-expansion-indicator ng-tns-c39-2 ng-trigger ng-trigger-indicatorRotate ng-star-inserted"
            ></span>
          </AccordionSummary>
          <AccordionDetails className="p-0 m-0">
            {displaySectionChildren(section)} {displayTreatment(section.id)}
            {displayPrices(section.id)}
          </AccordionDetails>
        </Accordion>
      ));
  };

  return (
    <div className="bg-transparent py-[70px] md:px-[30px] treatments">
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
              <div className="flex justify-between place-items-center acc-main ">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className='expandMoreIcon'/>}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  className="py-2 px-0 over:text-[#656565] relative flex text-start place-items-center treatmentBackground cursor-pointer grow-[0]"
                >
                  <h2
                    className="pl-2 md:pl-0 font-[100] text-[22px] text-[#0009] font-robotoSans text-start leading-[30px] treatmentBackground headerTitle">
                    {section.sectionName}
                  </h2>
                  <span
                    className="mat-expansion-indicator ng-tns-c39-2 ng-trigger ng-trigger-indicatorRotate ng-star-inserted"
                  >
                  </span>
                </AccordionSummary>
                <div className="w-[146px] hidden sm:flex justify-end">
                  <BookButton/>
                </div>
              </div>
              <AccordionDetails
                className={section.sectionName === 'Waxing' ? 'p-0 m-0 grid md:grid-cols-2' : 'p-0 m-0'}>
                {displaySectionChildren(section)} {displayTreatment(section.id)}
                {displayPrices(section.id)}
              </AccordionDetails>
            </Accordion>
          ))}
      </div>
      <div className="book-treatment-fixed">
        <BookButton/>
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
    props: {treatments, sections, prices},
  };
};

export default Treatments;
