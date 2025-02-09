const express = require("express");
const ControllerUser = require("../controllers/user");

const router = express.Router();

router.get("/", ControllerUser.FindAll); 
router.get("/:id", ControllerUser.FindById);
router.post("/", ControllerUser.Create);
router.put("/:id", ControllerUser.Update);
router.delete("/:id", ControllerUser.Delete);

module.exports = router;
