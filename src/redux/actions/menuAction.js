import axios from 'axios'

import { MENU_LIST_REQUEST, MENU_LIST_SUCCESS } from '../constants/menuConstant'

// List single restaurants menus to user
export const listMenu = id => async dispatch => {
  try {
    dispatch({
      type: MENU_LIST_REQUEST,
    })

    const { data } = await axios.get(
      `https://private-d032a-pizzaapp.apiary-mock.com/restaurants/${id}/menu?category=Pizza&orderBy=rank`
    )

    // console.log(data)
    dispatch({
      type: MENU_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    console.log(error.message)
  }
}
