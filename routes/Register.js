var express = require('express');
var router = express.Router();
const registerController = require("./../controllers/RegisterController");

router.get("/", registerController.getRegister);
router.get("/:id", registerController.getOneRegister);
router.post("/", registerController.insert);

module.exports = router;
