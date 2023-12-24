import React from "react";

export const Preview = ({ html }) => {
  return (
    <div className="preview-container">
      <h2 className="title-2">Preview or Result:</h2>
      <div
        className="preview"
        id="preview"
        /* Not sure -i dont know other solution- (XSS) */
        dangerouslySetInnerHTML={
          html ? { __html: html.trim() } : { __html: "<h2>Empty</h2>" }
        }
      ></div>
    </div>
  );
};
