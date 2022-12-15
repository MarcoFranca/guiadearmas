const mongoose = require('mongoose');

const punhalModel = new mongoose.Schema({
    title: String,
    description: String,
    rpgSistem:{
        d20:{damage: String, decisive: String},
        daemon:{damage: String, initiative: String},
        whitewolf:{damage: String},
        gurps:{damage: String, max: String},
        opera:{ga:String,damage: String},
    },
    weight:{weight:Number, uom:String },
    price: {coin:String, min:Number, max:Number},
    size:{ min:Number, max:Number, uom:String},
    damage:String,
    createAt:{type:Date, default: Date.now}
});

module.exports = punhalModel;