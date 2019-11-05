const Mongoose = require("mongoose");
const database = "RegisterDB", port = "27017", host = "localhost";
const uri = `mongodb://${host}:${port}/${database}`;

const connect = async ()=>{
    try{
        await Mongoose.connect(uri,{useNewUrlParse:true,
        useUnifiedTopology:true})
        Console.log("conectado");
    }catch(e){
        console.log(e);
    }
};

module.exports = { connect };