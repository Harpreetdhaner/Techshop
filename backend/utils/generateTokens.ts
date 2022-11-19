import jwt from 'jsonwebtoken'

const generateToken = (id:any)=>{
    return jwt.sign({ id },'joker',{
        expiresIn :'30d'
    })
}
export default generateToken