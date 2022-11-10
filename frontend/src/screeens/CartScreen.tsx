import React, { useEffect } from "react";
import { Col, ListGroup, Row, Image, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { addToCart } from "../actions/cartActions";
import Message from "../components/Message";
import Options from "../components/Options";

const CartScreen = () => {
  const { id } = useParams();
  const location = useLocation();
  const productID = id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const { cartItems } = useSelector((state: any) => state.cart);

  useEffect(() => {
    if (productID) {
      dispatch(addToCart(productID, qty));
    }
  }, [productID, dispatch, qty]);

  const removeFromListhandler = (id: any) => {
    console.log("remove");
  };

  return <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? 
          <Message>
            Your cart is empty<Link to="/">Go back</Link>
          </Message>
         : (
          <ListGroup variant="flush">
            {cartItems.map((item: any) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e: { target: { value: any } }) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      <Options count={item.countInStock} />
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromListhandler(item.product)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>)
            )}
          </ListGroup>
        )}
      </Col>
      <Col md={2}></Col>
      <Col md={2}></Col>
    </Row>
};

export default CartScreen;
