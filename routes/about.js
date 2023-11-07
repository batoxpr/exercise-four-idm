const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("hi, this is the about page")
});

module.exports = router;