var http = require("http");
var fs = require("fs");
var createServer = http.createServer;

var displayPage = fs.readFileSync("views/index.html")
var url = process.env.TARGET_URL

if (!process.env.TARGET_URL) {
  console.error("Need a TARGET_URL env var")
  process.exit(1)
}

var interval = setInterval(function() { http.get(url + "/ping") }, 60000)

createServer(function (req, res) {

  res.setHeader("content-type", "text/html; charset=UTF-8");

  if (req.url === "/ping") {
    console.log("Ping!")

    res.writeHead(200);
    res.end("ok");

  } else if (req.url === "/") {
    console.log("/")

    res.writeHead(200);
    res.end(displayPage);

  } else {

    res.writeHead(404);
    res.end("Not found");

  }


}).listen(process.env.PORT || 5000, function () { console.error("Server-up"); });
