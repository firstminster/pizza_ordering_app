import {
  MENU_LIST_REQUEST,
  MENU_LIST_SUCCESS,
  MENU_LIST_FAIL,
  // MENU_FILTER_SUCCESS,
} from '../constants/menuConstant'

// List all restaurants menus to user
export const menuListReducer = (state = { menus: [] }, action) => {
  switch (action.type) {
    case MENU_LIST_REQUEST:
      return { loading: true, menus: [] }
    case MENU_LIST_SUCCESS:
      return { loading: false, menus: action.payload }
    case MENU_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

// Filter the menu list to user
// export const menuFilterReducer = (state = { filtered: [] }, action) => {
//   switch (action.payload) {
//     case MENU_FILTER_SUCCESS:
//       const menus = action.payload.data
//       return {
//         ...state,
//         filtered: menus.filter(x => x.category === action.payload.category),
//       }

//     default:
//       return state
//   }
// }
