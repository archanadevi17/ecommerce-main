const mongoose=require('mongoose');
const connectdatabase=() =>{
    mongoose.connect(process.env.DB_URL).then((con)=>{
        console.log('Mongo DB is Connected to host:'+con.connection.host)
    })
}; 
module.exports=connectdatabase;