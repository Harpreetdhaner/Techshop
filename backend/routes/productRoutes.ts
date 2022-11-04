import express, { Express } from "express";
import Product from '../models/ProductModel'
import AsyncHandler from 'express-async-handler'


//@desc fetch all products
//@route GET  /api/products
//@access public
const router = express.Router()
router.get('/',AsyncHandler(async(req,res) => {
    const products = await Product.find({})
    res.json(products)

})
)
//@desc fetch single products
//@route GET  /api/products/:id
//@access public

router.get('/:id',AsyncHandler(async(req,res) => {
    const product = await Product.findById(req.params.id)
    if(product){
        res.json(product)
    }else{
        res.status(404).json({message:'Product not found'})
    }

    res.json(product)
})
)
export default router