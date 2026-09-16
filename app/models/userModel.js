const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const geoSchema = new Schema({
    lat: { type: String, required: true },
    lng: { type: String, required: true }
});

const addressSchema = new Schema({
    street: { type: String, required: true },
    suite: { type: String, required: true },
    city: { type: String, required: true },
    zipcode: { type: String, required: true },
    geo: geoSchema
});

const companySchema = new Schema({
    name: { type: String, required: true },
    catchPhrase: { type: String, required: true },
    bs: { type: String, required: true }
});

const userSchema = new Schema({
    _id: { type: mongoose.Types.ObjectId },
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    address: addressSchema,
    phone: { type: String, required: true },
    website: { type: String, required: true },
    company: companySchema
});

module.exports = mongoose.model('user', userSchema);