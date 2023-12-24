import { marked } from "marked";
import React, { useEffect, useState } from "react";

const initialMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
 `;

const Preview = ({ html }) => {
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

const Sandbox = ({ setMarkdown, markdown }) => {
  return (
    <div className="editor-container">
      <h2>Sandbox</h2>
      <p>Write you want! -Markdown-</p>
      <textarea
        name="markdown"
        cols="100"
        rows="15"
        defaultValue={markdown}
        onKeyDown={(e) => setMarkdown(e.target.value)}
        typeof="text"
        id="editor"
        className="editor"
      ></textarea>
    </div>
  );
};

export const Markd = () => {
  const [html, setHtml] = useState("");
  const [markdown, setMarkdown] = useState(initialMarkdown);

  useEffect(() => {
    let html = marked.parse(markdown);
    setHtml(html);
  }, [markdown]);

  return (
    <div className="app">
      {/* <h2>Markdown 2</h2> */}
      <Sandbox setMarkdown={setMarkdown} markdown={markdown} />
      <Preview html={html} />
    </div>
  );
};
