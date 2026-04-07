const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const data = [
  { id: 1, name: "iPhone 13", category: "Electronics", price: 600 },
  { id: 2, name: "Samsung TV", category: "Electronics", price: 800 },
  { id: 3, name: "Nike Shoes", category: "Fashion", price: 120 },
  { id: 4, name: "T-Shirt", category: "Fashion", price: 25 },
  { id: 5, name: "Laptop", category: "Electronics", price: 1000 },
  { id: 6, name: "Chair", category: "Furniture", price: 150 },
  { id: 7, name: "Table", category: "Furniture", price: 200 },
  { id: 8, name: "Headphones", category: "Electronics", price: 100 },
  { id: 9, name: "Watch", category: "Fashion", price: 90 },
  { id: 10, name: "Sofa", category: "Furniture", price: 500 }
];

app.get("/search", (req, res) => {
  let { q, category, minPrice, maxPrice } = req.query;

  let results = data;

  if (q) {
    results = results.filter(item =>
      item.name.toLowerCase().includes(q.toLowerCase())
    );
  }

  if (category) {
    results = results.filter(item => item.category === category);
  }

  if (minPrice) {
    results = results.filter(item => item.price >= Number(minPrice));
  }

  if (maxPrice) {
    results = results.filter(item => item.price <= Number(maxPrice));
  }

  res.json(results);
});

app.listen(5000, () => console.log("Server running on port 5000"));