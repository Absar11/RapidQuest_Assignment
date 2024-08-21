// routes/customerRoutes.js
const express = require("express");
const { getAllCustomers } = require("../controllers/customerController");

const router = express.Router();

router.get("/", getAllCustomers);

// Add other customer-related routes

module.exports = router;
