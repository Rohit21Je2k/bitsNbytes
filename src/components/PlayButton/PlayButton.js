import React from "react";

import "./PlayButton.css";
export default function PlayButton(props) {
  const { className, color } = props;
  return (
    <button className={`b-0 bg-none play-button ${className || ""}`}>
      <div className="pos-rel">
        {/* ring */}
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="play-button__ring rotate-ring"
        >
          <circle
            cx="25"
            cy="25"
            r="24.5"
            stroke="#535F80"
            strokeDasharray="5 5"
            style={{ stroke: `var(--${color || "primary"})` }}
          />
        </svg>
        {/* play */}
        <svg
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="play-button__play"
        >
          <path
            d="M12.2664 6.11032C12.991 6.48216 12.991 7.51784 12.2664 7.88968L1.95658 13.1807C1.29112 13.5222 0.499999 13.039 0.499999 12.291L0.5 1.709C0.5 0.961017 1.29112 0.4778 1.95658 0.819316L12.2664 6.11032Z"
            fill="none"
            style={{ fill: `var(--${color || "primary"})` }}
          />
        </svg>
      </div>
    </button>
  );
}
