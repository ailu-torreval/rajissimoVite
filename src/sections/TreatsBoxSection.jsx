import React from "react";
import AboutUsImg from "../components/AboutUsImg";
function TreatsBoxSection(props) {
  return (
    <section className={props.sectionclass}>
      <h3 className={props.titleclass}>{props.title}</h3>
      <div className={props.boxclass}>
        <div className="max-w-[618px]">
          <p>{props.content1}</p>
          <p>{props.content2}</p>
          <p>{props.content3}</p>
        </div>
        <AboutUsImg img={props.img} />
      </div>
    </section>
  );
}

export default TreatsBoxSection;
