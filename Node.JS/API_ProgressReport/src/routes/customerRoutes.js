const express = require("express");
const router = express.Router();
const customerController = require('../controllers/customerController');

router.post("/customers", customerController.createCustomer);
router.get("/customers/name/:name", customerController.getCustomerByName);
router.get("/customers/:id", customerController.getCustomerById);
router.put("/customers/:id", customerController.getCustomerByName);
router.delete("/customers/:id", customerController.deleteCustomer);

module.exports = router;