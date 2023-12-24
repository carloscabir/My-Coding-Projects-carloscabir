import React from "react";

export const CardAuthor = ({ author, color }) => {
  return (
    <>
      <h3
        id="author"
        className="author"
        style={{ color: color, transition: "color 1.2s ease" }}
      >
        - {author ? author : false}
      </h3>
    </>
  );
};
