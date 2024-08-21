// controllers/customerController.js
const { getCustomerCollection } = require("../models/customerModel");

async function getAllCustomers(req, res) {
  try {
    const customerCollection = await getCustomerCollection();
    const customers = await customerCollection.find().toArray();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch customers" });
  }
}

// Add the other customer-related logic here

module.exports = { getAllCustomers };
