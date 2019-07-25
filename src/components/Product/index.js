import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import './index.scss';

class Product extends Component {

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render () {
        
        return (
            <Col className="products__product" md={4}>
                <img src={this.props.item.img} alt={this.props.item.title} />
                <h3>{this.props.item.title}</h3>
                <div className="buttonHolder">
                    <div className="button addToCart" onClick={()=>{this.handleClick(this.props.item.id)}}></div>
                </div>
                <p className="desc">{this.props.item.desc}</p>
                <p className="price">
                    <b>£{this.props.item.price}</b>
                </p>
                
            </Col>
        )
    }
}
export default Product;