import React, { useEffect } from 'react'
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

  // calls/invokes an action
  const dispatch = useDispatch()

  //  pulls out data from the Global state: restaurant-details State(in the store.js)
  const restaurantDetails = useSelector(state => state.restaurantDetails)
  const { restaurant } = restaurantDetails

  //  pulls out data from the Global state: menu-list State(in the store.js)
  const menuList = useSelector(state => state.menuList)
  const { menus } = menuList

  //  Sort the array objects according to ranks
  menus.sort((a, b) => a.rank - b.rank)

  // Fires or Creates a side-effects when the component loads.
  useEffect(() => {
    // Dispatch an action to fetch restaurants details and menus list.
    dispatch(listRestaurantsDetails(restaurantId))
    dispatch(listMenu(restaurantId))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
              menus={menus}
              // filterMenuHandler={filterMenuHandler}
              // setFilter={setFilter}
            />
            <h2>Menu</h2>

            {menus.map(menu => (
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

// Navigate
// const history = useNavigate()

// Filter menu according to the category
// const filterMenuHandler = cat => {
//   const updatedList = data.filter(x => x.category === cat)
//   setFilter(updatedList)
// }

//  check an unmounted variable to tell whether
//  it should skip the call to setState
// let componentMounted = true

// const getMenus = async () => {
//   // console.log(menus)
//   if (componentMounted) {
//     // setData(menus)
//     // setFilter(menus)
//   }
// }
// getMenus()
// return () => {
//   componentMounted = false
// }
