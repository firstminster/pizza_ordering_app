import axios from 'axios'

import {
  MENU_LIST_REQUEST,
  MENU_LIST_SUCCESS,
  MENU_LIST_FAIL,
} from '../constants/menuConstant'

// List single restaurants menus to user (Action creator)
export const listMenu = id => async dispatch => {
  try {
    dispatch({
      type: MENU_LIST_REQUEST,
    })

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/restaurants/${id}/menu?category=Pizza&orderBy=rank`
    )

    dispatch({
      type: MENU_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: MENU_LIST_FAIL,
      payload: error.message,
    })
  }
}
