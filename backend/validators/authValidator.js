const { check } = require("express-validator");

exports.userSignupValidator = [
  check("name").not().isEmpty().withMessage("Name is required"),
  check("email").isEmail().withMessage("Must be a valid email address"),
  check("password")
      .not().isEmpty().withMessage("Password is required")
      .isLength({ min: 7 , max: 30 })
      .withMessage("Password must be at least 7 characters"),
  check("address")
      .not().isEmpty().withMessage("Address is required"),
  check("contact")
      .not().isEmpty().withMessage("Contact info is required")

];

exports.userSigninValidator = [
  check("email").isEmail().withMessage("Must be a valid email address"),
  check("password")
      .isLength({ min: 7, max: 30 })
      .withMessage("Password must be at least 7 char"),
];
