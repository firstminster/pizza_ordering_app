import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { listRestaurantsDetails } from '../redux/actions/restaurantAction'
import { listMenu } from '../redux/actions/menuAction'
import MenuList from '../components/MenuList'
import CategoryList from '../components/CategoryList'

const RestaurantDetails = () => {
  // Gets the ID params from the URL
  const params = useParams()
  const restaurantId = parseInt(params.id, 10)

  // parseInt('params.id', 10)
  // params.id

  //  Initialize filter state
  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data)

  // let componentMounted = true

  // calls/invokes an action
  const dispatch = useDispatch()

  //  pulls out data from the Global state: restaurant-details State(in the store.js)
  const restaurantDetails = useSelector(state => state.restaurantDetails)
  const { loading, error, restaurant } = restaurantDetails

  //  pulls out data from the Global state: menu-list State(in the store.js)
  const menuList = useSelector(state => state.menuList)
  const { loading: loadingMenu, error: errorMenu, menus } = menuList

  // const [load, setlLoad] = useState(loadingMenu)

  //  Sort the array objects according to ranks
  filter.sort((a, b) => a.rank - b.rank)

  // Fires when the component loads.
  // Dispatch an action to fetch restaurants details and menus list.
  useEffect(() => {
    if (!loading) {
      dispatch(listRestaurantsDetails(restaurantId))
    }

    console.log(parseInt(restaurantId, 10))
    console.log(params)

    //  check an unmounted variable to tell whether
    //  it should skip the call to setState
    // let componentMounted = true

    const getMenus = async () => {
      if (!loadingMenu) {
        dispatch(listMenu(restaurantId))
        console.log(menus)
        setData(menus)
        setFilter(menus)
      }
    }

    getMenus()
  }, [dispatch])

  // Filter menu according to the category
  const filterMenuHandler = cat => {
    const updatedList = data.filter(x => x.category === cat)
    setFilter(updatedList)
  }

  return (
    <div className='container my-5 py-5'>
      <div className='row'>
        <div className='col-12 mb-5'>
          <div className=' row justify-content-center'>
            <h2 className=' mb-0 fw-bold'>{restaurant.name}</h2>
            <p className=' lead'>
              {restaurant.address1}
              {','} {restaurant.address2}.
            </p>
            <hr />
          </div>

          <div className='row justify-content-center'>
            <CategoryList
              filterMenuHandler={filterMenuHandler}
              menus={menus}
              setFilter={setFilter}
            />
            <h2>Menu</h2>

            {filter.map(menu => (
              <div className='col-md-3 mb-4' key={menu.id}>
                <MenuList menu={menu} restaurantId={restaurantId} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantDetails
