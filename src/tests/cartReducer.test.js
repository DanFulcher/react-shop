import Item1 from '../images/item1.jpg';
import Item2 from '../images/item2.jpg';
import Item3 from '../images/item3.jpg';
import Item4 from '../images/item4.jpg';
import Item5 from '../images/item5.jpg';
import Item6 from '../images/item6.jpg';

import {
  addToCart, addQuantity, subQuantity, remove, addShipping, subShipping,
} from '../components/actions/cartActions';
import cartReducer from '../components/reducers/cartReducer';

const state = {
  items: [
    {
      id: 1, title: 'Winter body', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.', price: 110, img: Item1,
    },
    {
      id: 2, title: 'Adidas', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.', price: 80, img: Item2,
    },
    {
      id: 3, title: 'Vans', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.', price: 120, img: Item3,
    },
    {
      id: 4, title: 'White', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.', price: 260, img: Item4,
    },
    {
      id: 5, title: 'Cropped-sho', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.', price: 160, img: Item5,
    },
    {
      id: 6, title: 'Blues', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.', price: 90, img: Item6,
    },
  ],
  cart: [],
  total: 0,
};

describe('Test reducers', () => {
  it('Should add item to cart through reducer', () => {
    const [item] = state.items;
    const { total, cart: [cartItem] } = cartReducer(state, addToCart(item.id));
    expect(total).toEqual(110);
    expect(cartItem).toEqual(item);
  });

  it('Should add item to cart and add with same action through reducer', () => {
    const [item] = state.items;
    const newState = cartReducer(state, addToCart(item.id));
    const { total, cart: [cartItem] } = cartReducer(newState, addToCart(item.id));
    expect(total).toEqual(220);
    expect(cartItem).toEqual(item);
  });


  it('Should add item to cart and add quantity through reducer', () => {
    const [item] = state.items;
    const newState = cartReducer(state, addToCart(item.id));
    const { total, cart: [cartItem] } = cartReducer(newState, addQuantity(item.id));
    expect(total).toEqual(220);
    expect(cartItem).toEqual(item);
  });

  it('Should add item to cart and sub quantity through reducer', () => {
    const [item] = state.items;
    const newState = cartReducer(state, addToCart(item.id));
    const { total, cart: [cartItem] } = cartReducer(newState, subQuantity(item.id));
    expect(total).toEqual(0);
    expect(cartItem).toEqual();
  });

  it('Should add item to cart and add quantity through reducer, then subtract quantity through reducer', () => {
    const [item] = state.items;
    const newState = cartReducer(state, addToCart(item.id));
    const newState2 = cartReducer(newState, addQuantity(item.id));
    const { total, cart: [cartItem] } = cartReducer(newState2, subQuantity(item.id));
    expect(total).toEqual(110);
    expect(cartItem).toEqual(item);
  });

  it('Should add item to cart and remove through reducer', () => {
    const [item] = state.items;
    const newState = cartReducer(state, addToCart(item.id));
    const { total, cart: [cartItem] } = cartReducer(newState, remove(item.id));
    expect(total).toEqual(0);
    expect(cartItem).toEqual();
  });

  it('Should add item to cart and add shipping through reducer', () => {
    const [item] = state.items;
    const newState = cartReducer(state, addToCart(item.id));
    const { total } = cartReducer(newState, addShipping(item.id));
    expect(total).toEqual(116);
  });

  it('Should add item to cart, add shipping and remove shipping through reducer', () => {
    const [item] = state.items;
    const newState = cartReducer(state, addToCart(item.id));
    const newState2 = cartReducer(newState, addShipping(item.id));
    const { total } = cartReducer(newState2, subShipping(item.id));
    expect(total).toEqual(110);
  });
});
