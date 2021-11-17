import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_RESET,
} from '../constants/cartConstant'

// Add Item to cart
export const addToCart = (restaurantId, menu) => async dispatch => {
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

  // Store cart items to localStorage
}

// Remove item from cart
export const removeFromCart = id => dispatch => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

  // Re-set the cart items in the localStorage
}

// Reset or Empty the cart
export const resetCart = () => dispatch => {
  dispatch({
    type: CART_RESET,
  })
}
