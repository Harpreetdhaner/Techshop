import express  from "express"
import * as dotenv from 'dotenv'
import connectDB from "./config/db";
const products = require("./data/products") 


dotenv.config();

connectDB()

const app = express()

app.get('/',(req,res) => {
    res.send('API is running.......')
})

app.get('/api/products',(req,res) => {
    res.json(products)
})

app.get('/api/products/:id',(req,res) => {
    const product = products.find((p: { _id: string })=>p._id===req.params.id)
    res.json(product)
})

const PORT = process.env.REACT_APP_PORT
const DEVELOPMENT = process.env.REACT_APP_NODE_ENV

app.listen(PORT,()=>console.log(`hello, port is running on port ${DEVELOPMENT}`));
