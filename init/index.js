const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb+srv://Admin:admin123@cluster0.nssgpnr.mongodb.net/wanderlust?retryWrites=true&w=majority&appName=Cluster0";

main()
    .then(()=>{
        console.log("connected to DB");
    })
    .catch((err)=>{
        console.log(err);
    });

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({}); // delete all listings from the database
    await Listing.insertMany(initData.data);
    console.log("data was initilizd");
};

initDB();


