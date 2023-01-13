const express=require("express");
const router=express.Router();
const controller = require('../../Controllers/user.controller');
router.route('/home').get(controller.getAllUsers)
module.exports=router;