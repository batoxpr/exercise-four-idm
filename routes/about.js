const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("This is the About page")
});

router.get("/me", (req, res) => {
    res.send("This is about me")
});

module.exports = router;