import axios from 'axios'
import {
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
} from '../constants/orderConstants'

// Create User Order
export const createOrder = cart => async dispatch => {
  try {
    // Set Headers with content-Type
    const config = {
      headers: {
        'Content-Typee': 'application/json',
      },
    }

    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/orders/`,
      cart,
      config
    )

    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    })

    console.log(cart)
    // console.log(data)
  } catch (error) {
    console.log(error.message)
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: error.message,
    })
  }
}

// Get User Order Details
export const getOrderDetails = id => async dispatch => {
  try {
    dispatch({
      type: ORDER_DETAILS_REQUEST,
    })

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/orders/${id}`
    )

    // console.log(data)

    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: error.message,
    })
  }
}
