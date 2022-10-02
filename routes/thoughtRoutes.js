const express = require("express");
const router = express.Router();
const ThoughtController = require("../controllers/ThoughtController");

// import check auth middleware
//const checkAuth = require("../helpers/auth").checkAuth;

//router.get("/add", checkAuth, ToughtController.createTought);
//router.post("/add", checkAuth, ToughtController.createToughtSave);
//router.post("/remove", checkAuth, ToughtController.removeTought);
//router.get("/edit/:id", checkAuth, ToughtController.updateTought);
//router.post("/edit", checkAuth, ToughtController.updateToughtPost);
//router.get("/dashboard", checkAuth, ToughtController.dashboard);
router.get("/", ThoughtController.showThoughts);

module.exports = router;