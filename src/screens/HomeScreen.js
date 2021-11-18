import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listRestaurants } from '../redux/actions/restaurantAction'
import RestaurantCard from '../components/RestaurantCard'
import Geocode from 'react-geocode'

const Home = () => {
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)
  const [status, setStatus] = useState(null)
  const [userAddress, setUserAddress] = useState(null)

  // const [cityShow, setCity] = useState(null)
  // const [stateShow, setState] = useState(null)
  // const [postalCodeShow, setPostalCode] = useState(null)

  // calls/invokes an action
  const dispatch = useDispatch()

  // pulls out data from the Global state: rrestuarants-lists State(in the store.js)
  const restaurantList = useSelector(state => state.restaurantList)
  const { restaurants } = restaurantList

  useEffect(() => {
    // List restaurants
    dispatch(listRestaurants())

    // check an unmounted variable to tell whether
    // it should skip the call to setState
    let componentMounted = true

    // Function to get the user location
    const getLocation = async () => {
      // Checks if geolocation is supported by your web browser
      if (!navigator.geolocation) {
        setStatus('Geolocation is not supported by your browser')
      } else if (componentMounted) {
        setStatus('Locating...')
        // Checks the user's location
        navigator.geolocation.getCurrentPosition(
          position => {
            setStatus(null)
            setLat(position.coords.latitude)
            setLng(position.coords.longitude)
          },
          () => {
            setStatus('Unable to retrieve your location')
          }
        ) // Passing in a success callback and an error callback fn
      }
    }

    getLocation()
    // reverseGeocodeCoordinates()
    return () => {
      componentMounted = false
    }
  }, [])

  // const reverseGeocodeCoordinates = async () => {
  //   fetch(
  //     `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
  //   )
  //     .then(response => response.json())
  //     .then(data => setUserAddress(data.results[0].formatted_address))
  //     .catch(error => console.log(error))
  // }

  console.log(lat)
  console.log(lng)

  return (
    <div>
      <div className='card bg-dark text-white border-0 '>
        <img
          src='/assets/bg2.jpeg'
          className='card-img'
          alt='Background'
          height='250px'
        />
        <div className='card-img-overlay d-flex flex-column justify-content-center hero'>
          <div className='container'>
            <h5 className='card-title display-3 fw-bolder mb-0'>
              HOT! SEASONED! SPICY!
            </h5>
            <p className='card-text lead fs-2'>CHECK OUT OUR MENU</p>
          </div>
        </div>
      </div>

      {/* Lists of each resturants */}
      <div>
        <div className='container my-5 py-5'>
          <div className='row'>
            <div className='col-12 mb-5'>
              {lat && lng ? (
                <div>
                  <h4>Current Location:</h4>
                  <p>
                    Address: {lat} | {lng}
                  </p>
                </div>
              ) : null}
              <h1 className='display-6 fw-bolder text-center'>Restaurants</h1>
              <hr />
            </div>
          </div>

          <div className='row justify-content-center'>
            {restaurants.map(restaurant => (
              <div className='col-md-3 mb-4' key={restaurant.id}>
                <RestaurantCard restaurant={restaurant} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
