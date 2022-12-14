import React from "react";
import SectionContent from "../components/SectionContent";
import SectionImg from "../components/SectionImg";
function Section(props) {
  return (
    <section className={props.class}>
      <SectionContent {...props} />
      <SectionImg img={props.img} />
    </section>
  );
}

export default Section;
