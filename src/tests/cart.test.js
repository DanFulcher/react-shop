import React from 'react';
import renderer from 'react-test-renderer';
import Cart from '../pages/Cart';

const item = {
  id: 1, title: 'Winter body', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.', price: 110, img: '../images/item1.jpg',
};

describe('<Cart /> functions', () => {
  it('tests the Remove From Cart function', () => {
    const removeFromCart = (id) => {
      expect(id).toEqual(item.id);
    };

    const wrapper = renderer.create(<Cart items={item} remove={removeFromCart} />);
    const inst = wrapper.getInstance();
    expect(inst.render()).toMatchSnapshot();

    inst.handleRemove(1);
  });

  it('tests the add quantity function', () => {
    const addQuantity = (id) => {
      expect(id).toEqual(item.id);
    };

    const wrapper = renderer.create(<Cart items={item} addQuantity={addQuantity} />);
    const inst = wrapper.getInstance();
    expect(inst.render()).toMatchSnapshot();

    inst.handleAddQuantity(1);
  });

  it('tests the subtract quantity function', () => {
    const subQuantity = (id) => {
      expect(id).toEqual(item.id);
    };

    const wrapper = renderer.create(<Cart items={item} subQuantity={subQuantity} />);
    const inst = wrapper.getInstance();
    expect(inst.render()).toMatchSnapshot();

    inst.handleSubQuantity(1);
  });
});
