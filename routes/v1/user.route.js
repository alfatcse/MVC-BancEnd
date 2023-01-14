const express=require("express");
const limiter=require('../../middleware/limiter');
const router=express.Router();
const controller = require('../../Controllers/user.controller');
router.route('/all').get(limiter,controller.getAllUsers)
router.route('/random').get(controller.getRandomUser)
router.route('/save').post(controller.saveUserData)

module.exports=router;