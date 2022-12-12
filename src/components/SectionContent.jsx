import React from "react";
import Btn from "./Btn";

function SectionContent(props) {
  return (
    <div className="flex flex-col items-start justify-center gap-y-2 max-w-2xl md:basis-1/2">
      <h3 className={props.titleClass}>{props.title}</h3>
      <p className={props.contentClass}>{props.content}</p>
      <Btn
        class={props.btnClass}
        content={props.btnContent}
        action={props.btnAction}
      />
    </div>
  );
}

export default SectionContent;
