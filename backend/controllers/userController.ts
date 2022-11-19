import asyncHandler from 'express-async-handler'
import { rmSync } from 'fs'
import { userInfo } from 'os'
import User from '../models/UserModel'
import generateToken from '../utils/generateTokens'


const authUser = asyncHandler( async(req,res)=>{
  const {email,password} = req.body

  const user = await User.findOne({email})
  if(user && password){
    res.json({
        _id:user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin,
        token:generateToken(user._id)
    })
  }else{
    res.status(401)
    throw new Error('Invalid Password or email')
  }
})

const registerUser = asyncHandler( async(req,res)=>{
  const {name,email,password} = req.body

  const userExists = await User.findOne({email})
  if(userExists){
    res.status(400)
    throw new Error('User already Exists')
  }

  const user = await User.create({
    name,
    email,
    password
  })

  if(user){
    res.status(201).json({
      _id:user._id,
      name:user.name,
      email:user.email,
      isAdmin:user.isAdmin,
      token:generateToken(user._id)
    })
  }else{
    res.status(400)
    throw new Error("Invalid User Data")
  }

})


const getUserProfile = asyncHandler( async(req:any,res:any)=>{
  const user = await User.findById(req.user._id)
  if(user){
    res.json({
      _id:user._id,
      name:user.name,
      email:user.email,
      isAdmin:user.isAdmin,
    })
  }else{
    res.status(404)
    throw new Error('user not found')
  }
})
export { authUser,registerUser,getUserProfile}