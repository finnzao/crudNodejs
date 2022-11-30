const mongoose = require("mongoose");

async function startDB(){
    await mongoose.connect('mongodb+srv://finnzao:abc4321@cluster0.a2gbct4.mongodb.net/test');
}

module.exports=startDB;