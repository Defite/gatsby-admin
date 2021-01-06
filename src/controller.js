const url = require("url");
const core = require("./core");

/**
 * Function to get data from form and 
 * create Markdown file from that data
 * @param {*} req 
 * @param {*} res 
 */
exports.createPost = function (req, res) {
  body = "";

  req.on("data", function (chunk) {
    body += chunk;
  });

  req.on("end", function () {
    postBody = JSON.parse(body);
    var response = [
      {
        text: "Post added successfully",
      },
      postBody,
    ];

    // Create markdown file with data
    core.createMarkdown(postBody);

    res.statusCode = 201;
    res.setHeader("content-Type", "Application/json");
    res.end(JSON.stringify(response));
  });
};
