import express  from "express"
import * as dotenv from 'dotenv'
import connectDB from "./config/db";
import productRoutes from './routes/productRoutes'


dotenv.config();

connectDB()

const app = express()

app.get('/',(req,res) => {
    res.send('API is running.......')
})

app.use('/api/products', productRoutes)


const PORT = process.env.REACT_APP_PORT
const DEVELOPMENT = process.env.REACT_APP_NODE_ENV

app.listen(PORT,()=>console.log(`hello, port is running on port ${DEVELOPMENT}`));
