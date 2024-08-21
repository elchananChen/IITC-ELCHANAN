const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
app.get("/", (req, res) => {
  res.send("Welcome broooooo to my basic Express server broooo!!!");
});

app.get("/about", (req, res) =>
  res.send("e.g. this server created by brooooooo")
);

app.get("/contact", (req, res) =>
  res.json({ email: "jfdksla@broooo", name: "brooooooooooo" })
);
