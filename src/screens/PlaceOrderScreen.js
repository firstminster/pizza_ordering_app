import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Card } from 'react-bootstrap'
import Message from '../components/Message'

const PlaceOrderScreen = () => {
  // Initialize the component state
  const [isDelivered, setIsDelivered] = useState(true)
  const [isPaid, setIsPaid] = useState(true)

  // Navigate hook
  let history = useNavigate()

  // Brings in data from the global state (Redux Store)
  const orderCreate = useSelector(state => state.orderCreate)
  const { order } = orderCreate

  // View Order function
  const viewOrdersHandler = () => {
    history(`/orders/${order.orderId}`)
  }

  return (
    <div className='container my-5 py-5'>
      <div>
        <h1>Thank You! </h1>
        <h3>Your order is being processed.</h3>
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
            onClick={() => viewOrdersHandler()}
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
              </p>
              <p>
                <strong>Address:</strong> Lantmannavägen 111, Stockholm, 46160,
                Sweden.
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
    </div>
  )
}

export default PlaceOrderScreen
