import axios from "axios"
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../constants/userConstant"

export const login = (email: any,password: any) => async(dispatch: any) => {
    try {
        dispatch({
            type:USER_LOGIN_REQUEST
        })

        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }

        const {data} = await axios.post('/api/users/login',{email,password,config})

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })

        localStorage.setItem('userInfo',JSON.stringify(data))
    } catch (error:any) {
        dispatch({
            type:USER_LOGIN_FAIL,
            payload: error.message && error.response.data.message ? error.response.data.message : error.message,
        })

    }
}