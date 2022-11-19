import express from "express";
import asyncHandler from 'express-async-handler'
import Product from '../models/ProductModel'
import { getProductById,getProducts } from "../controllers/productController";



const router = express.Router()


router.route('/').get(getProducts)
router.route('/:id').get(getProductById)

export default router