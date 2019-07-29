import React, { Component } from 'react';
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


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation cart={this.props.cart} />
        <Route
          path="/"
          exact
          render={props => <Index {...props}
              items={this.props.items}
              addToCart={this.props.addToCart}
            />
          }
        />
        <Route
          path="/cart"
          exact
          render={props => <Cart {...props}
              items={this.props.cart}
              addQuantity={this.props.addQuantity}
              subQuantity={this.props.subQuantity}
              remove={this.props.remove}
              total={this.props.total}
              shipping={this.props.shipping}
              addShipping={this.props.addShipping}
              subShipping={this.props.subShipping}
            />
          }
        />
      </div>
    );
  }
}

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
  cart: PropTypes.array,
  items: PropTypes.array,
  addToCart: PropTypes.func,
  addQuantity: PropTypes.func,
  subQuantity: PropTypes.func,
  remove: PropTypes.func,
  total: PropTypes.number,
  shipping: PropTypes.bool,
  addShipping: PropTypes.func,
  subShipping: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
