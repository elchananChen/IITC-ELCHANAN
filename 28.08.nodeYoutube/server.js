const http = require("http");
const fs = require("fs");
const { log } = require("console");
const _ = require("lodash");
const server = http.createServer((req, res) => {
  // lodash
  //   const random = _.random(1, 400);
  //   console.log(random);

  //   const greetingOnes = _.once(() => {
  //     console.log("hello ones");
  //   });
  //   greetingOnes();
  //   greetingOnes();
  //   greetingOnes();
  //   greetingOnes();
  //   console.log("yey");
  //   console.log(req.url, req.method);
  //   set header content type

  res.setHeader("Content-Type", "text/html");
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }
  //messy way ⇓
  //   res.write("<p> yey </p> <p> yey wooooooo </p>");
  //   res.write("<p> yey wooooooo </p>");
  //   res.end();

  //better way ⇓
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //   res.write(data);
      res.end(data);
    }
  });
});
const port = 3000;
server.listen(port, "localhost", () => {
  console.log(`server is geting requests from  http://localhost:${port}`);
});
//כדי להפעיל בקשה צריך לכתוב localhost:3000
