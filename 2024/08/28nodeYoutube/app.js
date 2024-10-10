const express = require("express");
const app = express();
const port = 3000;

// app.get('/', (req, res) =>{
//     res.send('<p>home page</p>');
// });

// app.get('about', (req, res)=>{
//     res.send('<p>about page</p>')
// })

app.get("/", (req, res) => {
  res.sendFile("./views/index.html");
});

app.get("/about-ford", (req, res) => {
  res.sendFile("./views/about.html");
});
server.listen(port, "localhost", () => {
  console.log(`server is geting requests from  http://localhost:${port}`);
});
