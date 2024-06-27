const express=require('express');
const router=express.Router();
const {createorder}=require('../controllers/ordercontroller');

router.route('/order').post(createorder);

module.exports=router;