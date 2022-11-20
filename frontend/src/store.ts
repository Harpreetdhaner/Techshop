import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productDetailsReducer, productReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducer'
<<<<<<< HEAD
import { userLoginReducer } from './reducers/userReducer'
=======
>>>>>>> e56af02742aedc62ec337d183db424b51afd0516



const reducer = combineReducers({
    productList:productReducer,
    productDetails:productDetailsReducer,
<<<<<<< HEAD
    cart:cartReducer,
    userLogin : userLoginReducer 
})
const cartItemsFromLocalStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')||'{}') : []
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')||'{}') :null

=======
    cart:cartReducer
})
const cartItemsFromLocalStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')||'{}') : []
>>>>>>> e56af02742aedc62ec337d183db424b51afd0516


const intialState = {
    cart : {cartItems:cartItemsFromLocalStorage},
<<<<<<< HEAD
    userLogin:{userInfo:userInfoFromStorage}
=======
>>>>>>> e56af02742aedc62ec337d183db424b51afd0516
}
const middleware =[thunk]

const store = createStore(reducer,intialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store