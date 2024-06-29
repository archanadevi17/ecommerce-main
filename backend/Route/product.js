const express=require('express');
const router=express.Router();
const{getproducts,getsingleproduct}=require('../controllers/productcontroller');
     
router.route('/products').get(getproducts);
router.route('/product/:id').get(getsingleproduct);

module.exports=router;











