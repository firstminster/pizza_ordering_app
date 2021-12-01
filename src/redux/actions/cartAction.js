import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_RESET_ITEM,
} from '../constants/cartConstant'

// Add Item to cart (Action creator)
export const addToCart = (restaurantId, menu) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        id: menu.id,
        name: menu.name,
        category: menu.category,
        price: menu.price,
        qty: 1,
        restaurantId,
      },
    })
  } catch (error) {
    console.log(error.message)
  }

  // Set cart items to localStorage
  localStorage.setItem('cartItems', JSON.stringify(getState().cartList.cart))
}

// Remove item from cart (Action creator)
export const removeFromCart = id => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

  // Re-set the cart items in the localStorage
  localStorage.setItem('cartItems', JSON.stringify(getState().cartList.cart))
}

// Reset or Empty the cart (Action creator)
export const resetCart = () => (dispatch, getState) => {
  dispatch({
    type: CART_RESET_ITEM,
  })

  // Re-set the cart items in the localStorage
  localStorage.setItem('cartItems', JSON.stringify(getState().cartList.cart))
}
