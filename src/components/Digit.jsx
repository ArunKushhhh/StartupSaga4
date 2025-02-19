import React from "react";
import "../styles/Digit.scss";

export default function Digit({ value }) {
  const repaintClass = `number-${value}`;
  let grid = [];

  for (let x = 1; x <= 5; x++) {
    for (let y = 1; y <= 9; y++) {
      grid.push(<div key={`${x}-${y}`} className={`x${x}-y${y}`}></div>);
    }
  }

  return (
    <div className="countdown">
      <div id="countdown-grid" className={repaintClass}>
        {grid}
      </div>
    </div>
  );
}