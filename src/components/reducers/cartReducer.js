import Item1 from '../../images/item1.jpg';
import Item2 from '../../images/item2.jpg';
import Item3 from '../../images/item3.jpg';
import Item4 from '../../images/item4.jpg';
import Item5 from '../../images/item5.jpg';
import Item6 from '../../images/item6.jpg';

import {
  addToCart, addQuantity, subQuantity, remove, addShipping, subShipping,
} from '../actions/cartActions';

const initialState = {
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
  shipping: false,
};
const cartReducer = (state = initialState, action) => {
  if (action.type === addToCart) {
    const addedItem = state.items.find(item => item.id === action.id);

    const existedItem = state.cart.find(item => action.id === item.id);

    if (existedItem) {
      addedItem.quantity += 1;

      return {
        ...state,
        total: state.total + addedItem.price,
      };
    }
    addedItem.quantity = 1;
    const newTotal = state.total + addedItem.price;

    return {
      ...state,
      cart: [...state.cart, addedItem],
      total: newTotal,
    };
  } if (action.type === addQuantity) {
    const addedItem = state.items.find(item => item.id === action.id);
    addedItem.quantity += 1;
    const newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal,
    };
  } if (action.type === subQuantity) {
    const addedItem = state.items.find(item => item.id === action.id);
    if (addedItem.quantity === 1) {
      const newItems = state.cart.filter(item => item.id !== action.id);
      const newTotal = state.total - addedItem.price;
      return {
        ...state,
        cart: newItems,
        total: newTotal,
      };
    }
    addedItem.quantity -= 1;
    const newTotal = state.total - addedItem.price;
    return {
      ...state,
      total: newTotal,
    };
  } if (action.type === remove) {
    const itemToRemove = state.cart.find(item => action.id === item.id);
    const newItems = state.cart.filter(item => action.id !== item.id);

    const newTotal = state.total - (itemToRemove.price * itemToRemove.quantity);
    return {
      ...state,
      cart: newItems,
      total: newTotal,
    };
  } if (action.type === addShipping) {
    return {
      ...state,
      total: state.total + 6,
    };
  } if (action.type === subShipping) {
    return {
      ...state,
      total: state.total - 6,
    };
  }
  return state;
};
export default cartReducer;
