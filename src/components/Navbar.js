import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
  // Brings in data from the global state (Redux Store)
  const cartList = useSelector(state => state.cartList)
  const { cart } = cartList

  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm'>
        <div className='container'>
          <NavLink className='navbar-brand fw-bold fs-4' to='/restaurants'>
            FIZZA HOT
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <NavLink
                  className='nav-link active'
                  aria-current='page'
                  to='/restaurants'
                  style={{
                    fontSize: '20px',
                    color: 'black',
                  }}
                >
                  Home
                </NavLink>
              </li>

              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  to='#'
                  style={{
                    fontSize: '20px',
                    color: 'black',
                  }}
                >
                  About
                </NavLink>
              </li>
            </ul>
            <div className='buttons'>
              <NavLink to='/cart' className='btn btn-outline-dark ms-2'>
                <i className='fa fa-shopping-cart me-1'></i> Cart (
                {cart.reduce(
                  (counter, item) => (item ? counter + item.qty : counter),
                  0
                )}
                ){/* {state.length}) */}
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
