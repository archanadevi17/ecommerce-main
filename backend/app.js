const express=require ('express');
const app=express();
const dotenv=require('dotenv');
const path=require('path');
const connectdatabase=require('./config/connectdatabase');
dotenv.config({path:path.join(__dirname,'config','configuration.env')})

const product=require('./Route/product');
const order=require('./Route/order');

connectdatabase();

app.use('/api/v1/',product);
app.use('/api/v1/',order);




app.listen(process.env.PORT,() => {
    console.log(`server listening Port ${process.env.PORT} in ${process.env.NODE_ENV}`)
});