import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productDetailsReducer, productReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducer'



const reducer = combineReducers({
    productList:productReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer
})
const cartItemsFromLocalStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')||'{}') : []


const intialState = {
    cart : {cartItems:cartItemsFromLocalStorage},
}
const middleware =[thunk]

const store = createStore(reducer,intialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store