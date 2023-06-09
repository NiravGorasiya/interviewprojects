const router = require("express").Router()
const { signupCtrl, signinCtrl } = require("../controller/userController")

router.post("/signup", signupCtrl)
router.post("/signin", signinCtrl)

module.exports = router