const productModel = require('../models/ProductModel')
exports.addProduct = (req, res) => {
    console.log(req.body)
    var productObject = {
    productName:req.body.productName,
    productPrice:req.body.productPrice,
    productDescription:req.body.productDescription,
    productType:req.body.productType
    }
    var productSave = new productModel(productObject)
    productSave.save((error, productData) => {
        console.log(error)
        if (error) {
            res.json({message: "Internal error"})
        } else {
            res.json({message: "Product saved successfully"})
        }
    })
}
exports.getAllProducts = (req, res) => {
    productModel.find({}).exec((error, productData) => {
        //console.log(error)
        if (error) {
            res.json({message: "Internal error"})
        } else {
            res.json({message: "Products listed successfully", data: productData})
        }
    })
}
exports.deleteProduct = (req, res) => {
    productModel.remove({_id:req.body._id},(error, productData) => {
        console.log(error)
        if (error) {
            res.json({message: "Internal error"})
        } else {
            res.json({message: "Product deleted successfully"})
        }
    })
}
exports.getOneProduct = (req, res) => {
    productModel.findById({_id:req.body._id},(error, productData) => {
        console.log(error)
        if (error) {
            res.json({message: "Internal error"})
        } else {
            res.json({message: "One product received successfully", data: productData})
        }
    })
}
exports.updateProduct = (req, res) => {
    productModel.findOneAndUpdate({_id:req.body._id},{$set:req.body},(error, productData) => {
        if (error) {
            res.json({message: "Internal error"})
        } else {
            res.json({message: "Product updated successfully"})
        }
    })
}