const express = require("express");

const users = require("../database/users");

const usersObj = require("../database/users");

const router = express.Router();

router.put("", (req, res) => {
  return res.status(400).json({
    success: false,
    message: "Please provide user id to update record",
  });
});

router.put("/:id", (req, res) => {
  try {
    var userData = req.body;
    if (usersObj && usersObj.length) {
      for (var i = 0; i < usersObj.length; i++) {
        var obj = usersObj[i];
        if (!req.params.id.localeCompare(obj.id)) {
          if (
            userData != null &&
            userData != undefined &&
            JSON.stringify(userData) != "{}"
          ) {
            if (
              userData.email != undefined &&
              userData.firstName != undefined
            ) {
              obj.email = userData.email;
              obj.firstName = userData.firstName;
              usersObj[i] = obj;
              return res
                .status(200)
                .json({ success: true, message: "User updated" });
            } else if (userData.email != undefined) {
              obj.email = userData.email;
              usersObj[i] = obj;
              return res
                .status(200)
                .json({ success: true, message: "User updated" });
            } else if (userData.firstName != undefined) {
              obj.firstName = userData.firstName;
              usersObj[i] = obj;
              return res
                .status(200)
                .json({ success: true, message: "User updated" });
            } else {
              return res.status(404).json({
                success: false,
                message:
                  "Please provide either email or firstname to update in body",
              });
            }
          } else {
            return res.status(404).json({
              success: false,
              message: "Please some data in body to save to database",
            });
          }
        } else {
          return res.status(404).json({
            success: false,
            message: "No valid user found with provided user id to update",
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
