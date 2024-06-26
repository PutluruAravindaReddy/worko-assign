const mongoose = require('mongoose');


const listingSchema = new mongoose.Schema({
    image: {
        url:String,
      filename:String
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
    },
    age: {
        type: String,
    },
    city: {
        type: String,
    },
    zipcode:{
        type:Number,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

});


const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
