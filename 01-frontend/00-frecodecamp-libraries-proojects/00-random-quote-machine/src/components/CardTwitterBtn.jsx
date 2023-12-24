import React from "react";

export const CardTwitterBtn = ({ src, color }) => {
  return (
    <>
      <a
        id="tweet-quote"
        href={src === null ? "#" : src}
        target="_blank"
        rel="noreferrer"
        className="tweet-quote"
        style={{
          backgroundColor: color,
          transition: "background-color 1.2s ease",
        }}
      >
        <i className="fa fa-twitter"></i>
      </a>
    </>
  );
};
