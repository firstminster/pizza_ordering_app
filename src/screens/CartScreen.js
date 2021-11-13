import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { addToCart, removeFromCart } from '../redux/actions/cartAction'

const CartScreen = ({ history }) => {
  // Gets the ID params from the URL
  //  const params = useParams()
  //  const restaurantId = parseInt(params.id, 10)

  // calls/invokes an action
  const dispatch = useDispatch()

  // Brings in data from the global state (Redux Store)
  const cartList = useSelector(state => state.cartList)
  const { cart } = cartList

  // Remove Item from cart method/fuction
  const removeFromCartHandler = id => {
    dispatch(removeFromCart(id))
    // history.push('/cart')
  }

  // Checkout method/function
  // const placeOrderHandler = () => {
  //   history.push(`/order/`)
  // }

  return (
    <>
      <div className='container my-5 py-5'>
        <Row>
          <Col md={8}>
            <h1>Cart</h1>
            {cart.length === 0 ? (
              <h4>
                {' '}
                Your cart is empty{' '}
                <NavLink
                  to='/restaurants'
                  className='btn '
                  style={{
                    fontSize: '20px',
                    color: 'black',
                    background: 'lightgrey',
                  }}
                >
                  Go Back
                </NavLink>{' '}
              </h4>
            ) : (
              <ListGroup variant='flush'>
                {cart.map(item => (
                  <ListGroup.Item key={item.id}>
                    <Row>
                      <Col md={2}>
                        <NavLink
                          to={`/restaurants/${item.restaurantId}`}
                          style={{
                            textDecoration: 'none',
                          }}
                        >
                          {item.name}
                        </NavLink>
                      </Col>
                      <Col md={3}>
                        <p>{item.category}</p>
                      </Col>
                      <Col md={2}>${item.price.toFixed(2)}</Col>
                      <Col md={2}>
                        <Form.Control
                          as='select'
                          value={item.qty}
                          readOnly
                          // onChange={e =>
                          //   dispatch(
                          //     addToCart(item.id, Number(e.target.value))
                          //   )
                          // }
                        >
                          {[...Array(item.qty).keys()].map(x => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                      <Col md={2}>
                        <Button
                          type='button'
                          variant='light'
                          onClick={() => removeFromCartHandler(item.id)}
                        >
                          <i className='fas fa-trash'></i>
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Col>
          <Col md={4}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h2>
                    Subtotal (
                    {cart.reduce(
                      (counter, item) => (item ? counter + item.qty : counter),
                      0
                    )}
                    ) items
                  </h2>
                  <h4>
                    ${' '}
                    {cart
                      .reduce((acc, item) => acc + item.qty * item.price, 0)
                      .toFixed(2)}
                  </h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    type='button'
                    className='btn-block'
                    disabled={cart.length === 0}
                    // onClick={placeOrderHandler}
                  >
                    Place Order
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default CartScreen

// {cart.reduce(
//   (counter, { id }) => (id ? (counter += 1)  : counter),
//   0
// )}
