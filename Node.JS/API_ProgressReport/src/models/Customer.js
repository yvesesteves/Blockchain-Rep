let mongoose = require("mongoose");

let CustomerSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    gender: {type: String, required: true},
    brithDate: {type: String, required: true},
    age: {type: Number, required: true},
    city: {type: mongoose.Schema.Types.ObjectId, ref: 'City', required: true}
});

const Customer = mongoose.model("Customer", CustomerSchema); // 

module.exports = Customer;