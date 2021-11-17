import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_RESET,
} from '../constants/cartConstant'

// Initial the cart state
const initialState = {
  cart: [],
}

export const cartReducer = (state = initialState, action) => {
  // let cartItems = state.cartItems

  switch (action.type) {
    case CART_ADD_ITEM:
      const menuItem = action.payload

      // console.log(menuItem)

      // Check if a menu already exist
      const existItem = state.cart.find(x => x.id === menuItem.id)

      // console.log(existItem)

      if (existItem) {
        // Increase the Quantity
        return {
          ...state,
          cart: state.cart.map(x =>
            x.id === menuItem.id ? { ...x, qty: x.qty + 1 } : x
          ),
        }
      } else {
        return {
          ...state,
          cart: [...state.cart, menuItem],
        }
      }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter(x => x.id !== action.payload),
      }

    case CART_RESET:
      return {
        cart: [],
      }
    default:
      return state
  }
}
