import React from "react";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Treatment } from "../../types/treatment";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

  const displayPrices = (parentId: string) => {
    return prices
      .filter(
        (price: any) =>
          price.section?.id === parentId || price.treatment?.id === parentId
      )
      .map((price: any) => (
        <div key={price.id}>
          <h2>Prices Title: {price.priceTitle}</h2>
          <table>
            <thead>
              <tr>
                {!price.hideColumnTitles &&
                  price.colTitles.map((colTitle: any) => (
                    <th key={colTitle.id}>
                      {!colTitle.hide && colTitle.title}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {price.Rows.map((row: any) => (
                <tr key={row.id}>
                  {row.singleRow.map((col: any) => (
                    <td key={col.id}>{col.value}</td>
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
        <div key={treatment.id}>
          <div>Treatment:{treatment.title}</div>
          <div>{displayPrices(treatment.id)}</div>
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
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {section.sectionName}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {displaySectionChildren(section)} {displayTreatment(section.id)}
            {displayPrices(section.id)}
          </AccordionDetails>
        </Accordion>
      ));
  };

  return (
    <div>
      <h1>Treatments</h1>
      <div>
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
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  {section.sectionName}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
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
  const localhost = "http://localhost:1337/treatments";
  const prod = "http://cms.beautiskinclinic.com/treatments";
  const response = await fetch(localhost).catch((error) => {
    console.error("There was an error!", error);
  });

  const sectionsUrls = "http://localhost:1337/sections";
  const sectionResponse = await fetch(sectionsUrls).catch((error) => {
    console.error("There was an error!", error);
  });

  const pricesUrl = "http://localhost:1337/prices";
  const pricesResponse = await fetch(pricesUrl).catch((error) => {
    console.error("There was an error!", error);
  });
  // Parse the JSON
  const treatments = (await response?.json()) || [];
  const sections = (await sectionResponse?.json()) || [];
  const prices = (await pricesResponse?.json()) || [];
  // Finally we return the result
  // inside props as allPokemons
  return {
    props: { treatments, sections, prices },
  };
};

export default Treatments;
