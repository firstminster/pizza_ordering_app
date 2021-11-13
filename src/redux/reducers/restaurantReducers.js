import {
  RESTAURANT_LIST_REQUEST,
  RESTAURANT_LIST_SUCCESS,
  RESTAURANT_LIST_FAIL,
  RESTAURANT_DETAILS_REQUEST,
  RESTAURANT_DETAILS_SUCCESS,
  RESTAURANT_DETAILS_FAIL,
} from '../constants/restaurantConstants'

// List all products to users
export const restaurantListReducer = (state = { restaurants: [] }, action) => {
  switch (action.type) {
    case RESTAURANT_LIST_REQUEST:
      return { loading: true, restaurants: [] }
    case RESTAURANT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        restaurants: action.payload,
      }
    case RESTAURANT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

// List a single restaurant to users
export const restaurantDetailsReducer = (
  state = { restaurant: {} },
  action
) => {
  switch (action.type) {
    case RESTAURANT_DETAILS_REQUEST:
      return { loading: true, restaurant: {} }
    case RESTAURANT_DETAILS_SUCCESS:
      return { ...state, loading: false, restaurant: action.payload }
    case RESTAURANT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
