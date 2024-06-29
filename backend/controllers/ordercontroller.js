const ordermodel=require('../model/ordermodel');

exports.createorder=async(req,res,next)=> {
    //console.log(amount,'AMOUNT')
    const cartItems=req.body;
    const amount=number(cartItems.reduce((acc.item)= (acc+item.product.price*item.qty),0)).toFixed(2);
    const status='pending;'
    
    const order=await ordermodel.create({cartItems,amount,status})

res.json(
        {
            success:true,
            order
        }
    )
    
}




