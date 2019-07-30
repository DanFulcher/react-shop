import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Recipe extends Component {
  componentWillUnmount() {
    const { shipping, subShipping } = this.props;

    if (shipping === false) {
      subShipping();
    }
  }

    handleChecked = (e) => {
      const { addShipping, subShipping } = this.props;
      if (e.target.checked) {
        addShipping();
      } else {
        subShipping();
      }
    }

    render() {
      const { total } = this.props;
      return (
        <section className="recipe">
          <label htmlFor="checkbox">Shipping (£6)</label>
          <input type="checkbox" id="checkbox" onChange={this.handleChecked} />
          <h2>
            {`Total: £${total}`}
          </h2>
        </section>
      );
    }
}

Recipe.propTypes = {
  shipping: PropTypes.bool,
  subShipping: PropTypes.func.isRequired,
  addShipping: PropTypes.func.isRequired,
  total: PropTypes.number,
};

Recipe.defaultProps = {
  shipping: false,
  total: 0,
};

export default Recipe;
