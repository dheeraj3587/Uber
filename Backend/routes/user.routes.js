const express = require('express');
 const router = express.Router();
 const { body } = require('express-validator');
 const userController = require('../controllers/user.controller');
 const authMiddleware = require('../middlewares/auth.middleware');
router.post("/register",[
    body('email').isEmail().withMessage('Invalid email'), // Correct usage
    body('fullname.firstname').isLength({min:3}).withMessage("First name must be at least 3 character long"),
    body('password').isLength({min:6}).withMessage("Password must be at least 6 character long")
],userController.registerUser);

router.post("/login",[
    body('email').isEmail().withMessage('Invalid email'), // Correct usage
    body('password').isLength({min:6}).withMessage("Password must be at least 6 character long")
],userController.loginUser);
module.exports = router;


router.get('/profile',authMiddleware.authUser,userController.getUserProfile);

router.get('/logout',authMiddleware.authUser,userController.logoutUser);