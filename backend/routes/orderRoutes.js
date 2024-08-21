// routes/orderRoutes.js
const express = require("express");
const { getAllOrders } = require("../controllers/orderController");

const router = express.Router();

router.get("/", getAllOrders);

// Add other order-related routes

module.exports = router;
