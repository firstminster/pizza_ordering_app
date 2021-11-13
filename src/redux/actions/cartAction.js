import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstant'
// import axios from 'axios'

// item: {
//   menuItemId: menu.id,
//   name: menu.name,
//   category: menu.category,
//   price: menu.price,
//   qty: 1,
// },

// Add Item to cart
export const addToCart = (restaurantId, menu) => async dispatch => {
  try {
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        id: menu.id,
        name: menu.name,
        category: menu.category,
        price: menu.price,
        qty: 1,
        restaurantId,
      },
    })

    console.log(menu)
  } catch (error) {
    console.log(error.message)
  }

  // Store cart items to localStorage
}

// Remove item from cart
export const removeFromCart = id => dispatch => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

  // Re-set the cart items in the localStorage
}

// {
//     menuItemId: menuData.id,
//     name: menuData.name,
//     price: menuData.price,
//     category: menuData.category,
//     restuarantId: restaurantData.id,
//   },

//   const { data } = await axios.get(
//     `https://private-d032a-pizzaapp.apiary-mock.com/restaurants/${restaurantId}`
//   )

//   const { data } = await axios.get(
//     `https://private-d032a-pizzaapp.apiary-mock.com/restaurants/${menuId}/menu?category=Pizza&orderBy=rank`
//   )
