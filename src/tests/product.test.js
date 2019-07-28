import React from 'react';
import Product from '../components/Product';
import renderer from 'react-test-renderer';

import { dispatch } from 'react-redux';


const item = {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:'../images/item1.jpg'};

describe('<Product /> functions', () => {
    it('tests the Add To Cart function', () => {
        const wrapper = renderer.create(<Product item={item} addToCart={dispatch(addToCart(id))}  />);
        const inst = wrapper.getInstance();
        expect(inst.handleClick('1')).toMatchSnapshot();
    });
})