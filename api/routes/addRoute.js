const express = require("express");

const users = require("../database/users");

const usersObj = require("../database/users");

const router = express.Router();

router.post("", (req, res) => {
  try {
    var userData = req.body;

    if (
      userData != null &&
      userData != undefined &&
      JSON.stringify(userData) != "{}"
    ) {
      if (userData.email != undefined && userData.firstName != undefined) {
        userData.id = Date.now().toString();
        usersObj.push(userData);
        return res.status(200).json({ message: "User added", success: true });
      } else {
        return res.status(400).json({
          success: false,
          message:
            "Please provide both Email and Username for saving into database",
        });
      }
    } else {
      return res.status(404).json({
        message: "Please some data in body to save to database",
        success: false,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server error", success: false });
  }
});

module.exports = router;
