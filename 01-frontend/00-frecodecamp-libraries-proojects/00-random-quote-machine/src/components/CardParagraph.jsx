import React from "react";

export const CardParagraph = ({ paragraph, color }) => {
  return (
    <>
      <h2
        id="text"
        className="text"
        style={{ color: color, transition: "color 1.2s ease" }}
      >
        {paragraph ? `"${paragraph}"` : '"'}
      </h2>
    </>
  );
};
