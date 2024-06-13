const express = require("express");
const router = express.Router();
const cityController = require('../controllers/cityController');

router.post("/cities", cityController.createCity);      // talvez usar return
router.get("/cities/:name", cityController.getCityByName);
router.get("/cities/state/:state", cityController.getCityByState);

module.exports = router;