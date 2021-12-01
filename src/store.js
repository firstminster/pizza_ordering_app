import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  restaurantDetailsReducer,
  restaurantListReducer,
} from './redux/reducers/restaurantReducers'
import {
  //   menuFilterReducer,
  menuListReducer,
} from './redux/reducers/menuReducers'
import { cartReducer } from './redux/reducers/cartReducer'
import {
  orderCreateReducer,
  orderDetailsReducer,
} from './redux/reducers/orderReducers'

const reducer = combineReducers({
  restaurantList: restaurantListReducer,
  restaurantDetails: restaurantDetailsReducer,
  menuList: menuListReducer,
  cartList: cartReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
})

// Get cart-items from localStorage
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

// Store InitialState
// Add the retrieved values to the initialState
const initialState = {
  cartList: {
    cart: cartItemsFromStorage,
  },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
