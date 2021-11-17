import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, ListGroup, Card } from 'react-bootstrap'
import Message from '../components/Message'

const OrderScreen = () => {
  const [isDelivered, setIsDelivered] = useState(true)
  const [isPaid, setIsPaid] = useState(true)

  // Brings in data from the global state (Redux Store)
  const orderDetails = useSelector(state => state.orderDetails)
  const { orderItem } = orderDetails

  return (
    <div className='container my-5 py-5'>
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
                    backgroundColor: '#FF7F7F',
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
              </p>
              <p>
                <strong>Address:</strong> Lantmannavägen 111, Stockholm, 46160,
                Sweden.
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
                        <Col md={1}></Col>
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
    </div>
  )
}

export default OrderScreen
