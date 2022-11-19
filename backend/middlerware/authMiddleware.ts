import * as jwt from "jsonwebtoken";
import User from "../models/UserModel";
import asyncHandler from "express-async-handler";


const protect = asyncHandler(async (req:any,res:any,next)=>{
    let token:any;

 if(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
    {
       try {
        token = req.headers.authorization.split(' ')[1]

        const decoded:any = jwt.verify(token,'joker')

        req.user = await User.findById(decoded.id).select('-password')
        next();

       } catch (error) {
        console.log(error);

        res.status(401)

        throw new Error('Not authorized token failed')
       }
        
    }
    if(!token){
        res.status(401)
        throw new Error('Not authorized No token found')
    }
})
export {protect}