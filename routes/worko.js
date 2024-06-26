const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync');
const Worko = require("../models/worko");
const { isLoggedIn, isOwner, validateWorko} = require("../middleware");
const multer = require("multer");
const { storage } = require("../cloudConfig");
const upload = multer({ storage });

const workoController = require("../controllers/worko");

router.route("/")
    .get(wrapAsync(workoController.index))
    .post(isLoggedIn, upload.single("worko[image]"), wrapAsync(workoController.createWorko));

router.get("/new", isLoggedIn, workoController.renderNewForm);

router.route("/:id")
    .get(wrapAsync(workoController.showWorko))
    .put(isLoggedIn, isOwner, upload.single("worko[image]"), validateWorko, wrapAsync(workoController.updateWorko))
    .delete(isLoggedIn, isOwner, wrapAsync(workoController.destroyWorko));

router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(workoController.renderEditForm));

module.exports = router;
