// app.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const customerRoutes = require("./routes/customerRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/customers", customerRoutes);

app.get("/", (req, res) => {
  res.send("SERVER IS RUNNING");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
