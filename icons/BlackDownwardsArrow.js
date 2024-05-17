import React from "react";

function BlackDownwardsArrow() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <mask
          id="mask0_701_34614"
          style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect
            y="24"
            width="24"
            height="24"
            transform="rotate(-90 0 24)"
            fill="#666576"
          />
        </mask>
        <g mask="url(#mask0_701_34614)">
          <path
            d="M18 10L12 16L6 10L7.4 8.6L12 13.2L16.6 8.6L18 10Z"
            fill="#666576"
          />
        </g>
      </svg>
    </div>
  );
}

export default BlackDownwardsArrow;
