import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './screens/HomeScreen'
import Navbar from './components/Navbar'
import RestaurantDetails from './screens/RestaurantDetails'
import CartScreen from './screens/CartScreen'
import OrderScreen from './screens/OrderScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/restaurants/:id' element={<RestaurantDetails />} />
        <Route path='/cart' element={<CartScreen />} />
        <Route path='/orders/:id' element={<OrderScreen />} />
        <Route path='/order' element={<PlaceOrderScreen />} />
      </Routes>
    </Router>
  )
}

export default App
