import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import Recipe from '../../components/Recipe';

import './index.scss';

class Cart extends Component {
   handleAddQuantity = (id) => {
     const { addQuantity } = this.props;
     addQuantity(id);
   }

   handleSubQuantity = (id) => {
     const { subQuantity } = this.props;

     subQuantity(id);
   }

   handleRemove = (id) => {
     const { remove } = this.props;

     remove(id);
   }

   render() {
     const {
       items, subShipping, addShipping, total, shipping,
     } = this.props;

     const cart = items.length
       ? (
         items.map(item => (
           <li className="collection__item" key={item.id}>
             <div className="collection__item__img">
               <img src={item.img} alt={item.title} />
             </div>
             <div className="collection__item__desc">
               <h3>{item.title}</h3>
               <p className="price">
                 {`£${item.price}`}
               </p>
               <p className="quantity">
                 {`Quantity: ${item.quantity}`}
               </p>
               <div className="arrows">
                 <a
                   href="#"
                   onClick={() => {
                     this.handleAddQuantity(item.id);
                   }}
                 >
                   <i className="arrows__up" />
                 </a>

                 <a
                   href="#"
                   onClick={() => {
                     this.handleSubQuantity(item.id);
                   }}
                 >
                   <i className="arrows__down" />
                 </a>
               </div>
               <button
                 type="button"
                 className="remove"
                 onClick={() => {
                   this.handleRemove(item.id);
                 }}
               />
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
             {items.length >= 1 && (
             <Recipe
               total={total}
               shipping={shipping}
               addShipping={addShipping}
               subShipping={subShipping}
             />
             )}

           </Row>
         </Container>
       </section>
     );
   }
}

Cart.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      img: PropTypes.string,
      desc: PropTypes.string,
    }),
  ),
  addQuantity: PropTypes.func.isRequired,
  subQuantity: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  total: PropTypes.number,
  shipping: PropTypes.bool,
  addShipping: PropTypes.func.isRequired,
  subShipping: PropTypes.func.isRequired,
};

Cart.defaultProps = {
  items: [],
  total: 0,
  shipping: false,
};

export default Cart;
