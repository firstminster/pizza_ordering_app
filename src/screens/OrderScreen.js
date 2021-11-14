import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { getOrderDetails } from '../redux/actions/orderAction'

const OrderScreen = () => {
  const [isDelivered, setIsDelivered] = useState(true)
  const [isPaid, setIsPaid] = useState(true)

  // calls/invokes an action
  const dispatch = useDispatch()

  // Brings in data from the global state (Redux Store)
  const orderDetails = useSelector(state => state.orderDetails)
  const { loading, orderItem } = orderDetails

  // useEffect(() => {
  //   //  check an unmounted variable to tell whether
  //   //  it should skip the call to setState
  //   let componentMounted = true

  //   // if (orderDetails === undefined || orderDetails.loading) {
  //   //   dispatch(getOrderDetails(1))
  //   // }
  //   // return () => {
  //   console.log(orderDetails.orderItem.orderId)
  //   console.log(orderDetails.loading)
  //   console.log(orderItem)
  //   console.log(loading)
  //   console.log(orderItem.cart)
  //   // }

  //   const orderDetail = async () => {
  //     if (componentMounted) {
  //       if (!loading) {
  //         dispatch(getOrderDetails(1))
  //       }
  //     }
  //   }
  //   orderDetail()
  //   return () => {
  //     componentMounted = false
  //   }
  // }, [dispatch])

  // ||
  //     orderDetails === undefined ||
  //     orderDetails.cart === undefined

  return (
    <div className='container my-5 py-5'>
      {/* {loading ? (
        <Message variant='danger'>
          {' '}
          Put an Item into cart and place an order!{' '}
        </Message>
      ) : ( */}
      <>
        <h1 className='orderscreen__title'>Order Nō: {orderItem.orderId}</h1>
        <Row className='orderscreen'>
          <Col md={8} className='orderscreen__shipping'>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Order Details: </h2>
                <h5>
                  Order status:{' '}
                  <span
                    style={{
                      backgroundColor: 'lightgreen',
                      padding: '5px',
                      borderRadius: '5px',
                    }}
                  >
                    {' '}
                    {orderItem.status}
                  </span>{' '}
                </h5>
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
                    Delivered on {orderItem.esitmatedDelivery}
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
                  <Message variant='success'>
                    Paid on {orderItem.orderedAt}
                  </Message>
                ) : (
                  <Message variant='danger'>Not Paid</Message>
                )}
              </ListGroup.Item>
              <ListGroup.Item>
                <h2>Order Items</h2>
                {orderItem.length === 0 ? (
                  <Message>Order is empty</Message>
                ) : (
                  <ListGroup variant='flush'>
                    {orderDetails.orderItem.cart.map((item, index) => (
                      <ListGroup.Item key={index}>
                        <Row>
                          <Col md={1}>
                            {/* <Image
                            src={'item.image'}
                            alt={'item.name'}
                            fluid
                            rounded
                          /> */}
                          </Col>
                          <Col className='orderscreen__productName'>
                            Menu item: {item.menuItemId}
                            {/* <Link to={`/restaurant/${item.menuItemId}`}> */}
                            {/* </Link> */}
                          </Col>
                          <Col md={4} className='orderscreen__productName'>
                            Quantity: {item.quantity}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </ListGroup.Item>
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
                    <Col>${orderItem.totalPrice}</Col>
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

export default OrderScreen
