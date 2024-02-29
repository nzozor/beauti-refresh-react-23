import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox-next";
import {PaletteTree} from "./palette";
import Treatments from "../pages/treatments";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/Treatments">
        <Treatments treatments={[]} sections={[]} prices={[]}/>
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
