import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Recipe from '../../components/Recipe';

import './index.scss';

class Cart extends Component {
    handleAddQuantity = (id) => {
      this.props.addQuantity(id);
    }

    handleSubQuantity = (id) => {
      this.props.subQuantity(id);
    }

    handleRemove = (id) => {
      this.props.remove(id);
    }

    render() {
      const cart = this.props.items.length
        ? (
          this.props.items.map(item => (
                        <li className="collection__item" key={item.id}>
                            <div className="collection__item__img">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div className="collection__item__desc">
                                <h3>{item.title}</h3>
                                <p className="price">£{item.price}</p>
                                <p className="quantity">Quantity: {item.quantity}</p>
                                <div className="arrows">
                                    <Link to="/cart" className="arrows__up" onClick={() => { this.handleAddQuantity(item.id); }}></Link>
                                    <Link to="/cart" className="arrows__down" onClick={() => { this.handleSubQuantity(item.id); }}></Link>
                                </div>
                                <button className="remove" onClick={() => { this.handleRemove(item.id); }}></button>
                            </div>

                        </li>
          ))
        )
        : (
                <p>Nothing.</p>
        );
      return (
            <section className="cart-page content">
                <Container>
                    <Row>
                        <h1>Cart</h1>
                    </Row>
                    <Row>
                        <h5>You have ordered:</h5>
                    </Row>
                    <Row>
                        <ul className="collection">
                            {cart}
                        </ul>
                    </Row>
                    <Row>
                        {this.props.items.length >= 1 && <Recipe
                            total={this.props.total}
                            shipping={this.props.shipping}
                            addShipping={this.props.addShipping}
                            subShipping={this.props.subShipping}
                        />}

                    </Row>
                </Container>
            </section>
      );
    }
}

Cart.propTypes = {
  items: PropTypes.object,
  addQuantity: PropTypes.func,
  subQuantity: PropTypes.func,
  remove: PropTypes.func,
  total: PropTypes.number,
  shipping: PropTypes.bool,
  addShipping: PropTypes.func,
  subShipping: PropTypes.func,
};
export default Cart;
