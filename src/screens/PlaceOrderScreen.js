import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, NavLink } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { createOrder } from '../redux/actions/orderAction'

const PlaceOrderScreen = () => {
  // Initialize the state
  const [isDelivered, setIsDelivered] = useState(true)
  const [isPaid, setIsPaid] = useState(true)

  let history = useNavigate()

  // calls/invokes an action
  const dispatch = useDispatch()

  // Brings in data from the global state (Redux Store)
  const orderCreate = useSelector(state => state.orderCreate)
  const { loading, order } = orderCreate

  useEffect(() => {
    //  check an unmounted variable to tell whether
    //  it should skip the call to setState
    let componentMounted = true

    console.log(order)
    console.log(orderCreate)

    const placeOrder = async () => {
      if (componentMounted) {
        if (loading) {
          dispatch(createOrder(1))
        }
      }
    }
    placeOrder()
    return () => {
      componentMounted = false
    }
  }, [dispatch, order])

  // Open Order page method
  const openOrderPageHandler = () => {
    history(`/orders/${order.orderId}`)
  }

  return (
    <div className='container my-5 py-5'>
      {/* {loading ? (
        <Message variant='danger'>
          {' '}
          Put an Item into cart and place an order!{' '}
        </Message>
      ) : ( */}
      <>
        <div>
          <h1>Thank You! </h1>
          <h3>You order is being processed.</h3>
          <p
            style={{
              fontSize: '20px',
              color: 'black',
            }}
          >
            To view more details about your orders click the button!{' '}
            <Button
              type='button'
              className='btn-block'
              onClick={() => openOrderPageHandler()}
            >
              Click Me!
            </Button>{' '}
          </p>
        </div>
        <h2 className='orderscreen__title'>Order Nō: {order.orderId}</h2>
        <Row className='orderscreen'>
          <Col md={8} className='orderscreen__shipping'>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h4>Order Details: </h4>
                <h6>
                  Order status:{' '}
                  <span
                    style={{
                      backgroundColor: 'lightgreen',
                      padding: '5px',
                      borderRadius: '5px',
                    }}
                  >
                    {' '}
                    {order.status}
                  </span>{' '}
                </h6>
                <p>
                  <strong>Name: </strong> Proud User
                </p>
                <p>
                  <strong>Email: </strong> prouduser@test.com
                  {/* <a href={`mailto:${order.user.email}`}>{order.user.email}</a> */}
                </p>
                <p>
                  <strong>Address:</strong> Lantmannavägen 111, Stockholm,
                  46160, Sweden.
                </p>
                {isDelivered ? (
                  <Message variant='success'>
                    Delivered on {order.esitmatedDelivery}
                  </Message>
                ) : (
                  <Message variant='danger'>Not Delivered</Message>
                )}
              </ListGroup.Item>
              <ListGroup.Item>
                <h2>Payment Method</h2>
                <p>
                  <strong>Method:</strong> Klarna
                </p>
                {isPaid ? (
                  <Message variant='success'>Paid on {order.orderedAt}</Message>
                ) : (
                  <Message variant='danger'>Not Paid</Message>
                )}
              </ListGroup.Item>

              {/* <ListGroup.Item>
                  <h2>Order Items</h2>
                  {order.length === 0 ? (
                    <Message>Order is empty</Message>
                  ) : (
                    <ListGroup variant='flush'>

                      {orderDetails.orderItem.cart.map((item, index) => (
                        <ListGroup.Item key={index}>
                          <Row>
                            <Col md={1}>
                          
                            </Col>
                            <Col className='orderscreen__productName'>
                              Menu item: {item.menuItemId}
                             
                            </Col>
                            <Col md={4} className='orderscreen__productName'>
                              Quantity: {item.quantity}
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      ))}


                    </ListGroup>
                  )}
                </ListGroup.Item> */}
            </ListGroup>
          </Col>
          <Col md={4} className='orderscreen__summary'>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h2>Order Summary</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Items</Col>

                    <Col>$ 0.00</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Shipping</Col>

                    <Col>$ 0.00</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Tax</Col>

                    <Col>$ 0.00</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Total</Col>
                    <Col>${order.totalPrice}</Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </>
      {/* )} */}
    </div>
  )
}

export default PlaceOrderScreen
