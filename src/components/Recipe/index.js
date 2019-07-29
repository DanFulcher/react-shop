import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Recipe extends Component {
  componentWillUnmount() {
    if (this.props.shipping === false) {
      this.props.subShipping();
    }
  }

    handleChecked = (e) => {
      if (e.target.checked) {
        this.props.addShipping();
      } else {
        this.props.subShipping();
      }
    }

    render() {
      return (
            <section className="recipe">
                <label>Shipping (£6)</label>
                <input type="checkbox" onChange={this.handleChecked}/>
                <h2>Total: £{this.props.total}</h2>
            </section>
      );
    }
}

Recipe.propTypes = {
  shipping: PropTypes.bool,
  subShipping: PropTypes.func,
  addShipping: PropTypes.func,
  total: PropTypes.number,
};

export default Recipe;
