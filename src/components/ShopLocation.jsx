import React from "react";

function ShopLocation(props) {
  return (
    <div className="flex flex-col gap-0">
      <h4>{props.location}</h4>
      <h5>{props.description}</h5>
      <p>{props.address1}</p>
      <p>{props.address2}</p>
    </div>
  );
}

export default ShopLocation;
