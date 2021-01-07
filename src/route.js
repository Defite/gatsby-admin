const http = require("http");
const url = require("url");

module.exports = http.createServer((req, res) => {
  var coreController = require("./controller.js");
  const reqUrl = url.parse(req.url, true);

  if (reqUrl.pathname === "/blog/posts") {
    coreController.getPosts(req, res);
  } else if (/(?<=\/blog\/post\/).*/.test(reqUrl.pathname)) {
    coreController.getPost(req, res);
  } else if (reqUrl.pathname === "/blog/create" && req.method === "POST") {
    coreController.createPost(req, res);
  }
});
