import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_RESET_ITEM,
} from '../constants/cartConstant'

// Initial cart state
const initialState = {
  cart: [],
}

// Cart item reducer
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const menuItem = action.payload

      // Check if a menu already exist
      const existItem = state.cart.find(x => x.id === menuItem.id)

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

    case CART_RESET_ITEM:
      return {
        cart: [],
      }
    default:
      return state
  }
}
