const Productmodel=require('../model/productmodel');
//http://localhost:8000/api/v1/products
exports.getproducts=async(req,res,next)=> {

    const products=await Productmodel.find({});

    res.json(
        {  
            success:true,
            products
        }
    )
    
}
//http://localhost:8000/api/v1/product/667cfeaf0e43c5920e667b3c
exports.getsingleproduct=async(req,res,next)=>{
    /*console.log(req.params.id,'ID')
    const product=await Productmodel.findById(req.params.id);
    res.json({
        success:true,
        product
    })

}*/
   
   try{
        const product=await Productmodel.findById(req.params.id);
        res.json({
            success:true,
            product
        })
    
    }catch(error){
      res.json({
            success:false,
            message:'unable to get element by that id',
        })
    
    }

}


