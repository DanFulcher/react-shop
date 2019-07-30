import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navigation from './components/Navigation';
import Index from './pages/Index';
import Cart from './pages/Cart';

import {
  addToCart, addQuantity, subQuantity, remove, addShipping, subShipping,
} from './components/actions/cartActions';

import './App.css';


const App = ({
  cart, items, addToCart: addCart, addQuantity: addQty,
  subQuantity: subQty, remove: sub, total, shipping,
  addShipping: addShip, subShipping: subShip,
}) => (
  <div className="App">
    <Navigation cart={cart} />
    <Route
      path="/"
      exact
      render={props => (
        <Index
          {...props}
          items={items}
          addToCart={addCart}
        />
      )
        }
    />
    <Route
      path="/cart"
      exact
      render={props => (
        <Cart
          {...props}
          items={cart}
          addQuantity={addQty}
          subQuantity={subQty}
          remove={sub}
          total={total}
          shipping={shipping}
          addShipping={addShip}
          subShipping={subShip}
        />
      )
        }
    />
  </div>
);


const mapStateToProps = state => ({
  items: state.items,
  cart: state.cart,
  total: state.total,
  shipping: state.shipping,
});

const mapDispatchToProps = dispatch => ({
  addToCart: (id) => { dispatch(addToCart(id)); },
  addQuantity: (id) => { dispatch(addQuantity(id)); },
  subQuantity: (id) => { dispatch(subQuantity(id)); },
  remove: (id) => { dispatch(remove(id)); },
  addShipping: (e) => { dispatch(addShipping(e)); },
  subShipping: (e) => { dispatch(subShipping(e)); },
});

App.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.object,
  ),
  items: PropTypes.arrayOf(
    PropTypes.object,
  ),
  addToCart: PropTypes.func.isRequired,
  addQuantity: PropTypes.func.isRequired,
  subQuantity: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  total: PropTypes.number,
  shipping: PropTypes.bool,
  addShipping: PropTypes.func.isRequired,
  subShipping: PropTypes.func.isRequired,
};

App.defaultProps = {
  cart: [],
  items: [],
  total: 0,
  shipping: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
