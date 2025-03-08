const mongoose = require('mongoose')
const Schema = mongoose.Schema
var productSchema = Schema({
    productName:{type: String},
    productPrice:{type: String},
    productDescription:{type: String},
    productType:{type: String}
})
var productModel = mongoose.model('productModel', productSchema)
module.exports = productModel