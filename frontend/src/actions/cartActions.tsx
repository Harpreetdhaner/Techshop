
export const removeFromCart = (id:any) => (dispatch:any, getState:any) => {
dispatch({
    type: CART_REMOVE_ITEM,
    payload:id
})
localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}