const express=require("express");
const limiter=require('../../middleware/limiter');
const router=express.Router();
const controller = require('../../Controllers/user.controller');
router.route('/all').get(limiter,controller.getAllUsers)
router.route('/random').get(controller.getRandomUser)
router.route('/save').post(controller.saveUserData)
router.route('/update/:id').patch(controller.updateUserData)
router.route('/bulkUpdate').patch(controller.updateBulk)
router.route('/delete/:id').delete(controller.deleteUser)
router.route('/userdetails').get(controller.getUserDetail)
module.exports=router;