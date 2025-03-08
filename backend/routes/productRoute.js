const express = require('express')
const router = express.Router()
const productController = require('../api/controller')
router.post('/addProduct', productController.addProduct)
router.get('/getAllProduct', productController.getAllProducts)
router.post('/deleteProduct', productController.deleteProduct)
router.post('/getOneProduct', productController.getOneProduct)
router.post('/updateProduct', productController.updateProduct)
module.exports = router