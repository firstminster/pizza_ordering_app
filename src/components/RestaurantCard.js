import React from 'react'
import { NavLink } from 'react-router-dom'

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className='card h-100 text-center p-4'>
      <div className='card-body'>
        <h5 className='card-title mb-0 fw-bold'>{restaurant.name}</h5>
        <p className='card-text lead'>
          {' '}
          {restaurant.address1}
          {','} {restaurant.address2}
        </p>
        <NavLink
          to={`/restaurants/${restaurant.id}`}
          className='btn btn-outline-dark'
        >
          View Menu
        </NavLink>
      </div>
    </div>
  )
}

export default RestaurantCard
