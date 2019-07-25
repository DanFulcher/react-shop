import React, {Component} from 'react';

class Recipe extends Component {

    componentWillUnmount() {
        if(this.refs.shipping.checked) {
            this.props.subShipping();
        }
    }

    handleChecked = (e) => {
        if(e.target.checked) {
            this.props.addShipping();
        } else {
            this.props.subShipping();
        }
    }
    render() {
        return (
            <section className="recipe">
                <label for="shipping">Shipping (£6)</label>
                <input type="checkbox" ref="shipping" onChange={this.handleChecked}/>
                <h2>Total: £{this.props.total}</h2>
            </section>
        )
    }
}

export default Recipe;