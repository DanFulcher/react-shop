import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import './index.scss';

const Navigation = ({ cart }) => {
  const cartNumber = cart.length;
  return (
    <nav className="nav-wrapper">
      <Container>
        <Row>
          <Col md={4}>
            <Link to="/" className="nav-wrapper__brand-logo">Shopping</Link>
          </Col>
          <Col md={{ span: 4, offset: 4 }}>
            <ul className="nav-wrapper__nav">
              <li>
                <Link to="/">Shop</Link>
              </li>
              <li>
                <Link to="/cart">
                  {`My Cart (${cartNumber})`}
                </Link>
              </li>
            </ul>
          </Col>

        </Row>
      </Container>
    </nav>
  );
};

Navigation.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.object,
  ),
};


Navigation.defaultProps = {
  cart: [],
};

export default Navigation;
