const fs = require("fs");
const { render } = require("mustache");
const config = require("../config");

const postTemplate = fs.readFileSync("./src/templates/post.md").toString();

exports.createMarkdown = function (data) {
  if (!data) {
    console.error("No data provided");
  }

  const output = render(postTemplate, data);
  fs.writeFileSync(`${config.contentPath}/${data.slug}.md`, output);
};
