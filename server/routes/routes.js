const express = require("express");
const router = express.Router();

//Default message
router.get("/", (req, res) => {
  res.send({ message: "test server" });
});

module.exports = router;