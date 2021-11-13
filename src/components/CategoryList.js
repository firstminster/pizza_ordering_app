import React from 'react'

const CategoryList = ({ filterMenuHandler, menus, setFilter }) => {
  return (
    <div className='buttons d-flex justify-content-center mb-5 pb-5'>
      <button
        className='btn btn-outline-dark me-2'
        onClick={() => setFilter(menus)}
      >
        All
      </button>
      <button
        className='btn btn-outline-dark me-2'
        onClick={() => filterMenuHandler('Pizza')}
      >
        Pizza
      </button>
      <button
        className='btn btn-outline-dark me-2'
        onClick={() => filterMenuHandler('Dryck')}
      >
        Dryck
      </button>
      <button
        className='btn btn-outline-dark me-2'
        onClick={() => filterMenuHandler('Tillbehör')}
      >
        Tillbehör
      </button>
    </div>
  )
}

export default CategoryList
