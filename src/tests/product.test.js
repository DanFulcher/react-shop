import React from 'react';
import renderer from 'react-test-renderer';
import Product from '../components/Product';

const item = {
  id: 1, title: 'Winter body', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.', price: 110, img: '../images/item1.jpg',
};

describe('<Product /> functions', () => {
  it('tests the Add To Cart function', () => {
    const addToCart = (id) => {
      expect(id).toEqual(item.id);
    };

    const wrapper = renderer.create(<Product {...item} addToCart={addToCart} />);
    const inst = wrapper.getInstance();
    expect(inst.render()).toMatchSnapshot();

    inst.handleClick();
  });
});
