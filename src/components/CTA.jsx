import React from "react";

function CTA(props) {
  return (
    <button
      onClick={props.action}
      className="relative font-header uppercase text-blue"
    >
      <span className="absolute text-4xl left-0 right-0 top-7">➔</span>
      <svg
        viewBox="0 0 100 100"
        width="100"
        height="100"
        className="animate-spin-slow"
      >
        <defs>
          <path
            id="circle"
            d="
          M 50, 50
          m -37, 0
          a 37,37 0 1,1 74,0
          a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text fontSize="9.4" color="#104057">
          <textPath xlinkHref="#circle">
            Order Online · Order Online · Order Online ·
          </textPath>
        </text>
      </svg>
    </button>
  );
}

export default CTA;
