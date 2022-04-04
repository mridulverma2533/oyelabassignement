const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
     name: {
          type: String
     },
     mobile: {
          type: String,
        //   required: true,
     },
     email:{
         type:String,
         unique:true
     }
     
    },

    { timestamps: true, versionKey: false });

let registerschema = new mongoose.model("register", registerSchema);
module.exports = registerschema;