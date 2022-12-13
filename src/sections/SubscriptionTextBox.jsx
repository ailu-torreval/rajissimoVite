import React from "react";

function SubscriptionTextBox(props) {
  return (
    <section className={props.class}>
      <h3>{props.title}</h3>
      <p className="max-w-[1135px]">{props.description}</p>
      <p className={props.captionclass}>{props.caption}</p>
    </section>
  );
}

export default SubscriptionTextBox;
