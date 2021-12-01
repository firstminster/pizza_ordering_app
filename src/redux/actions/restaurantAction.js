import axios from 'axios'
import {
  RESTAURANT_LIST_REQUEST,
  RESTAURANT_LIST_SUCCESS,
  RESTAURANT_DETAILS_REQUEST,
  RESTAURANT_DETAILS_SUCCESS,
  RESTAURANT_DETAILS_FAIL,
  RESTAURANT_LIST_FAIL,
} from '../constants/restaurantConstants'

// List all restaurants to users (Action creator)
export const listRestaurants = () => async dispatch => {
  try {
    dispatch({
      type: RESTAURANT_LIST_REQUEST,
    })

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/restaurants/`
    )

    dispatch({
      type: RESTAURANT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: RESTAURANT_LIST_FAIL,
      payload: error.message,
    })
  }
}

// List a single restaurant to users (Action creator)
export const listRestaurantsDetails = id => async dispatch => {
  try {
    dispatch({
      type: RESTAURANT_DETAILS_REQUEST,
    })

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/restaurants/${id}`
    )

    dispatch({
      type: RESTAURANT_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: RESTAURANT_DETAILS_FAIL,
      payload: error.message,
    })
  }
}
