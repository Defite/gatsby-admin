const config = require("../config");
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

exports.getPost = async function (req, res) {
  const { url } = req;
  const fileName = url.match(/(?<=\/blog\/post\/).*/)[0];

  if (!fileName) {
    return false;
  }

  const fileContents = await core.getFileName(`${config.contentPath}/${fileName}.md`);

  console.log('fileContents', fileContents);

  var response = [
    {
      message: `Got contents`
    }
  ];

  res.statusCode = 200;
  res.setHeader("content-Type", "Application/json");
  res.end(JSON.stringify(response));
}

exports.getPosts = function (req, res) {
  const posts = core.getPosts();

  var response = [
    {
      message: "Here are the list of posts ",
    },
    posts
  ];

  res.statusCode = 200;
  res.setHeader("content-Type", "Application/json");
  res.end(JSON.stringify(response));
};
