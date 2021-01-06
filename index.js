const fs = require("fs");
const { render } = require("mustache");
const minimist = require("minimist");

const { contentPath = "./" } = minimist(process.argv);

console.log(`Work dir: ${contentPath}`);

const template = `
---
title: {{title}}
date: {{date}}
type: {{type}}
slug: {{slug}}
---

{{content}}
`;

// const contentFolder;

const sampleData = {
  title: "Admin-created markdown file",
  date: "2021-01-06T14:45:00.284Z",
  type: "text",
  slug: "admin-created-markdown-file",
  content: `
# Hello!

This is admin-created markdown file
`,
};

const output = render(template, sampleData);
fs.writeFileSync(`${contentPath}/${sampleData.slug}.md`, output);
