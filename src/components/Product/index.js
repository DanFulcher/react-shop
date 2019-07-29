import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Col } from 'react-bootstrap';

import './index.scss';

class Product extends Component {

    handleClick = () => {
        this.props.addToCart(this.props.id);
    }

    render () {
        return (
            <Col className="products__product" md={4}>
                <img src={this.props.img} alt={this.props.title} />
                <h3>{this.props.title}</h3>
                <div className="buttonHolder">
                    <button type='button' className="button addToCart" onClick={this.handleClick}>
                    </button>
                </div>
                <p className="desc">{this.props.desc}</p>
                <p className="price">
                    <b>£{this.props.price}</b>
                </p>
                
            </Col>
        )
    }
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    addToCart: PropTypes.func.isRequired,
    img: PropTypes.string,
    desc: PropTypes.string,
}

Product.defaultProps = {
   img: undefined,
   desc: undefined,
}

export default Product;