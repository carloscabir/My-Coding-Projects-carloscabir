import React, { useState, useEffect } from "react";
import { Preview } from "./Preview";
import { Sandbox } from "./Sandbox";
import { marked } from "marked";

export const MarkdownPreviewer = () => {
  const [html, setHtml] = useState("");
  const [markdown, setMarkdown] = useState("");

  const handleMarkdown = (markdown) => setMarkdown(markdown);

  useEffect(() => {
    let html = marked.parse(markdown);
    setHtml(html);
  }, [markdown]);

  // console.log(markdown);
  return (
    <div className="app">
      <Sandbox handleMarkdown={handleMarkdown} />

      <Preview html={html} />
    </div>
  );
};
