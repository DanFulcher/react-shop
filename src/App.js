import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './components/Navigation';
import { Route } from 'react-router-dom';
import Index from './pages/Index';
import Cart from './pages/Cart';

import {addToCart, addQuantity, subQuantity, remove, addShipping, subShipping} from './components/actions/cartActions';

import './App.css';


class App extends Component {
  render() {

    return (
      <div className="App">
        <Navigation cart={this.props.cart} />
        <Route 
          path="/" 
          exact 
          render={(props) => 
            <Index {...props} 
              items={this.props.items} 
              addToCart={this.props.addToCart} 
            />
          } 
        />
        <Route 
          path="/cart" 
          exact 
          render={(props) => 
            <Cart {...props} 
              items={this.props.cart} 
              addQuantity={this.props.addQuantity} 
              subQuantity={this.props.subQuantity}
              remove={this.props.remove}
              total={this.props.total}
              addShipping={this.props.addShipping}
              subShipping={this.props.subShipping}
            />
          } 
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    cart: state.cart,
    total: state.total
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {dispatch(addToCart(id))},
    addQuantity: (id) => {dispatch(addQuantity(id))},
    subQuantity: (id) => {dispatch(subQuantity(id))},
    remove: (id) => {dispatch(remove(id))},
    addShipping: (e) => {dispatch(addShipping(e))},
    subShipping: (e) => {dispatch(subShipping(e))},
  }
} 
export default connect(mapStateToProps,mapDispatchToProps)(App);
