import { PRODUCT_LIST_FAILED,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_REQUEST, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAILED } from "../constants/productConstants";


export const productReducer = (state:any={products:[]},action:{type:any;payload:any;})=>{
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading:true,products:[]}
        case PRODUCT_LIST_SUCCESS:
            return {loading:false,products:action.payload}
        case PRODUCT_LIST_FAILED:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}


export const productDetailsReducer = (state:any={product:{ reviews:[] }},action:{type:any;payload:any;})=>{
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loading:true,...state}
        case PRODUCT_DETAILS_SUCCESS:
            return {loading:false,product:action.payload}
        case PRODUCT_DETAILS_FAILED:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}