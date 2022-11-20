<<<<<<< HEAD
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";
=======
import { CART_ADD_ITEM } from "../constants/cartConstants";
>>>>>>> e56af02742aedc62ec337d183db424b51afd0516

export const cartReducer = (state:any ={cartItems:[]},action: any)=>{
switch(action.type){
   case CART_ADD_ITEM:

    const item = action.payload

    const existItem:any = state.cartItems.find((x:any)=>x.product === item.product)

  
    if(existItem){
        return{
            ...state,
            cartItems:state.cartItems.map((x:any)=>x.product ===existItem.product ? item :x)
        }
    }else{
        return{
            ...state,
            cartItems:[...state.cartItems,item]
        }
    }
<<<<<<< HEAD
    case CART_REMOVE_ITEM:
        return{
            ...state,
            cartItems: state.cartItems.filter((x:any) => x.product !== action.payload)
        }

=======
>>>>>>> e56af02742aedc62ec337d183db424b51afd0516
    default :
    return state

}
}