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

const middleware = [thunk]

// InitialState
// const initialState = {

// }

const store = createStore(
  reducer,
  // initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
