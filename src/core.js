const fs = require("fs");
const path = require("path");
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

exports.getFileName = function (filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) throw err;

    console.log('File data', data);
  })
}

exports.getPosts = function () {
  return fs.readdirSync(`${config.contentPath}`).filter(function(item) {
    return path.extname(item) === '.md';
  })
};
