import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

import './index.scss';

const Product = ({
  id, img, title, desc, price, addToCart,
}) => {
  const handleClick = () => {
    addToCart(id);
  };
  return (
    <Col className="products__product" md={4}>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <div className="buttonHolder">
        <button type="button" className="button addToCart" onClick={handleClick} />
      </div>
      <p className="desc">{desc}</p>
      <p className="price">
        <b>
          {`£${price}`}
        </b>
      </p>
    </Col>
  );
};


Product.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
  img: PropTypes.string,
  desc: PropTypes.string,
};

Product.defaultProps = {
  img: undefined,
  desc: undefined,
};

export default Product;
