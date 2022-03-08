const express = require("express");

const users = require("../database/users");

const usersObj = require("../database/users");

const router = express.Router();

router.get("", (req, res) => {
  try {
    if (!usersObj || !usersObj.length) {
      return res
        .status(404)
        .json({ message: "Users not found!", success: false });
    }
    return res
      .status(200)
      .json({ message: "Users retrieved", success: true, users: usersObj });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server error", success: false });
  }
});

router.get("/:id", (req, res) => {
  try {
    if (usersObj && usersObj.length) {
      for (var i = 0; i < usersObj.length; i++) {
        var obj = usersObj[i];
        if (!req.params.id.localeCompare(obj.id)) {
          return res.status(200).json({ success: true, user: obj });
        } else {
          return res.status(404).json({
            message: "No valid user found with provided user id",
            success: false,
          });
        }
      }
    } else {
      return res.status(204).json({
        message: "No users database found",
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
