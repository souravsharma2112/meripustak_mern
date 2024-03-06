const express = require('express');
const authControllers = require('../controllers/auth-controller');
const router = express.Router()

router.route("/home").get(authControllers.Home);
router.route("/register").post(authControllers.Register);

module.exports = router;
