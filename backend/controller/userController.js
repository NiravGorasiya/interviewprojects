const User = require("../model/User")
const { userValidation } = require("../validator/registerV")
const { queryErrorRelatedResponse, createResponse, successResponce } = require("../utils/sendResponse")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const signupCtrl = async (req, res, next) => {
    try {
        const { username, email, mobile, password } = req.body;
        const { error } = userValidation(req.body);
        // Check for valition
        if (error) {
            return queryErrorRelatedResponse(req, res, 422, `${error.details[0].message.replace(/"/g, '')}.`)
        }
        const checkemail = await User.findOne({ email: email });
        if (checkemail) {
            return res.status(422).json({ isSuccess: false, status: 422, message: "Email already exists" });
        } else {
            const hashed = await bcrypt.hash(password, 8);
            const user = new User({
                username,
                email,
                mobile,
                password: hashed,
            });
            const data = await user.save();
            createResponse(req, res, data)
        }
    } catch (error) {
        return next(error)
    }
}

const signinCtrl = async (req, res, next) => {
    try {
        let login = await User.findOne({ email: req.body.email });
        if (!login) {
            if (!login) return queryErrorRelatedResponse(req, res, 422, "Invalid details!");
        } else {
            let isMatch = await bcrypt.compare(req.body.password, login.password);
            const token = jwt.sign(
                { login_id: login._id },
                process.env.TOKEN_SERECTKEY
            );
            if (isMatch) {
                successResponce(req, res, token)
            } else {
                return queryErrorRelatedResponse(req, res, 422, "Invalid details!");
            }
        }
    } catch (error) {
        return next(error)
    }
};

module.exports = { signupCtrl, signinCtrl }
