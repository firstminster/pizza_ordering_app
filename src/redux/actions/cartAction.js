import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_RESET_ITEM,
} from '../constants/cartConstant'

// Add Item to cart
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

    // console.log(menu)
  } catch (error) {
    console.log(error.message)
  }

  // Set cart items to localStorage
  localStorage.setItem('cartItems', JSON.stringify(getState().cartList.cart))
}

// Remove item from cart
export const removeFromCart = id => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

  // Re-set the cart items in the localStorage
  localStorage.setItem('cartItems', JSON.stringify(getState().cartList.cart))
}

// Reset or Empty the cart
export const resetCart = () => (dispatch, getState) => {
  dispatch({
    type: CART_RESET_ITEM,
  })

  // Re-set the cart items in the localStorage
  localStorage.setItem('cartItems', JSON.stringify(getState().cartList.cart))
}
