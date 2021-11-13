import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstant'

// Initial the cart state
const initialState = {
  cart: [],
}

export const cartReducer = (state = initialState, action) => {
  // const item = action.payload

  // let cartItems = state.cartItems

  switch (action.type) {
    case CART_ADD_ITEM:
      const menuItem = action.payload
      console.log(menuItem)

      // Check if a menu already exist
      const existItem = state.cart.find(x => x.id === menuItem.id)

      console.log(existItem)

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
    default:
      return state
  }
}

// Check if a menu already exist
// const existItem = state.cartItems.find(x => x.id === item.id)

// if (existItem) {
//   return {
//     ...state,
//     cartItems: state.cartItems.map(x =>
//       x.id === existItem.id ? item : x
//     ),
//   }
// } else {
//   return {
//     ...state,
//     cartItems: [...state.cartItems, item],
//   }
// }

// cartItems.push(action.payload)
// return {
//   loading: false,
//   ...state,
//   cartItems: action.payload,
// }

// --------------

// Check if the restaurants id matches the incoming restaurant id
//  if (state.restaurantId !== item.restaurantId) {
//   // Check if a menu already exist
//   const existItem = state.cart.find(x => x.menuItemId === item.menuItemId)

//   console.log(existItem)

//   if (existItem) {
//     // Increase the Quantity
//     return {
//       ...state,
//       cart: state.cart.map(x =>
//         x.menuItemId === item.menuItemId ? { ...x, qty: x.qty + 1 } : x
//       ),
//     }
//   } else {
//     return {
//       ...state,
//       cart: [...state.cart, item],
//     }
//   }
// }
