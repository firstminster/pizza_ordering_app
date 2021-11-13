import axios from 'axios'
import {
  RESTAURANT_LIST_REQUEST,
  RESTAURANT_LIST_SUCCESS,
  RESTAURANT_DETAILS_REQUEST,
  RESTAURANT_DETAILS_SUCCESS,
} from '../constants/restaurantConstants'

import {
  MENU_LIST_SUCCESS,
  MENU_FILTER_SUCCESS,
} from '../constants/menuConstant'

// List all restaurants to users
export const listRestaurants = () => async dispatch => {
  try {
    dispatch({
      type: RESTAURANT_LIST_REQUEST,
    })

    const { data } = await axios.get(
      `https://private-d032a-pizzaapp.apiary-mock.com/restaurants/`
    )

    dispatch({
      type: RESTAURANT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    console.log(error.message)
  }
}

// List a single restaurant to users
export const listRestaurantsDetails = id => async dispatch => {
  try {
    dispatch({
      type: RESTAURANT_DETAILS_REQUEST,
    })

    const { data } = await axios.get(
      `https://private-d032a-pizzaapp.apiary-mock.com/restaurants/${id}`
    )
    // console.log(data)
    dispatch({
      type: RESTAURANT_DETAILS_SUCCESS,
      payload: data,
    })

    // const { menuData } = await axios.get(
    //   `https://private-d032a-pizzaapp.apiary-mock.com/restaurants/${id}/menu?category=Pizza&orderBy=rank`
    // )

    // dispatch({
    //   type: MENU_LIST_SUCCESS,
    //   payload: menuData,
    // })
  } catch (error) {
    console.log(error.message)
  }
}
