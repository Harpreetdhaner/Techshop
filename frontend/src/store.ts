import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productDetailsReducer, productReducer } from './reducers/productReducers'



const reducer = combineReducers({
    productList:productReducer,
    productDetails:productDetailsReducer
})
const intialState = {}
const middleware =[thunk]

const store = createStore(reducer,intialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store