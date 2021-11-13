import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './screens/HomeScreen'
import Navbar from './components/Navbar'
import RestaurantDetails from './screens/RestaurantDetails'
import CartScreen from './screens/CartScreen'
import OrderScreen from './screens/OrderScreen'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/restaurants' element={<Home />} />
        <Route exact path='/restaurants/:id' element={<RestaurantDetails />} />
        <Route path='/cart' element={<CartScreen />} />
        <Route path='/orders/:id' element={<OrderScreen />} />
      </Routes>
    </Router>
  )
}

export default App
