const User = require("../models/user");
const shortId = require("shortid");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

// user signup
exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (user) {
      return res.status(400).json({
        error: "Email is already taken",
      });
    }

    const { name, email, address, contact, password } = req.body;

    let newUser = new User({ name, email, address, contact, password});
    newUser.save((err, success) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      res.json({
        message: "signup successfully! please login.",
      });
    });
  });
};

// user signin
exports.signin = (req, res) => {
  const { email, password } = req.body;

  //check if user exist
  User.findOne({ email }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User with that email does not exist. Please signup",
      });
    }

    // authenticate
    if (!user.authenticate(password)) {
      return res.status(400).json({
        error: "Email and password do not match.",
      });
    }

    // generate a token and send to client
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, { expiresIn: "1d" });
    const { _id, username, name, email, address, contact, role } = user;
    return res.json({
      token,
      user,
    });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "Signout successfully",
  });
};

exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
});

exports.authMiddleware = (req, res, next) => {
  const authUserId = req.user._id;
  User.findById({ _id: authUserId }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found",
      });
    }
    req.profile = user;
    next();
  });
};

exports.adminMiddleware = (req, res, next) => {
  const adminUserId = req.user._id;
  User.findById({ _id: adminUserId }).exec((err, user) => {
    if (err || !user) {
      return status(400).json({
        error: "Admin User not found",
      });
    }
    if (user.isAdmin !== true) {
      return res.status(400).json({
        error: "Admin resource Access denied",
      });
    }
    next();
  });
};
