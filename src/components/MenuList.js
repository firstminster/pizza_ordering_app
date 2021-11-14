import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions/cartAction'

const MenuList = ({ menu, restaurantId }) => {
  // calls/invokes an action
  const dispatch = useDispatch()

  // Add To Cart function
  const addToCartHandler = menu => {
    dispatch(addToCart(restaurantId, menu))
  }

  return (
    <div className='card h-100 text-center p-4'>
      <div className='card-body'>
        <h5 className='card-title mb-0'>{menu.name}</h5>
        <p className=''>{[menu.topping].join(', ')}</p>
        <p className='card-text lead fw-bold'> ${menu.price}</p>
        <button
          className='btn btn-outline-dark me-2'
          onClick={() => addToCartHandler(menu)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default MenuList
