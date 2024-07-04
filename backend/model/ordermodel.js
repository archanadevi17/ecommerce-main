const mongoose=require('mongoose');
const orderSchema=new mongoose.Schema({
    cartItems:Array,
    amount:String,
    status:String,
    createdAt:Date,
})
const ordermodel=mongoose.model('order',orderSchema);
module.exports=ordermodel;


/*
[
  {
    "products":{
  "_id": {
    "$oid": "667fe23e156e455a51dc6025"
  },
  "name": "PTron Newly Launched Tangent Sports, 60Hrs Playtime",
  "price": 15.46,
  "description": "Gigantic 60 + Hours of music playtime on a single charge; BT5.2 Wireless headphones with ENC (Environmental Noise Cancellation) Technology to enhance your voice quality over the voice calls",
  "ratings": 5,
  "images": [
    {
      "image": "/images/products/4.jpg"
    }
  ],
  "category": "Headphones",
  "seller": "Amazon",
  "stock": 4
},
    "qty":2
  },
  {
   "products":{
  "_id": {
    "$oid": "667fe23e156e455a51dc6021"
  },
  "name": "WRISTIO HD, Bluetooth Calling Smart Watch",
  "price": 150.32,
  "description": "Minix watches are exclusively designed to fulfill the advanced tech needs of today’s generation.",
  "ratings": 3.5,
  "images": [
    {
      "image": "/images/products/2.jpg"
    }
  ],
  "category": "Accessories",
  "seller": "Flipkart",
  "stock": 9
},
    "qty":3
  }
  ]
  */
 