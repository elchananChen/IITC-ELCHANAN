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

app.get("/api/products/:id", (req, res) => {
  const products = [
    { id: 1, name: "batata", price: 10 },
    { id: 2, name: "onion", price: 5 },
  ];

  for (let i = 0; i < products.length; i++) {
    let productID = products.find((id) => id === products[i][id]);
    if (productID) {
      return res.status(404).send("not exist");
    } else return res.json(productID);
  }
});

app.get("/api/products/:id", (req, res) => res.json);
