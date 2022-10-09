const express = require("express");
const router = express.Router();
const ThoughtController = require("../controllers/ThoughtController");

// import check auth middleware
const checkAuth = require("../helpers/auth").checkAuth;

router.get("/add", checkAuth, ThoughtController.createThought);
router.post("/add", checkAuth, ThoughtController.createThoughtSave);
//router.post("/remove", checkAuth, ToughtController.removeTought);
//router.get("/edit/:id", checkAuth, ToughtController.updateTought);
//router.post("/edit", checkAuth, ToughtController.updateToughtPost);
router.get("/dashboard", checkAuth, ThoughtController.dashboard);
router.get("/", ThoughtController.showThoughts);

module.exports = router;