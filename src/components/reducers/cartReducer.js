import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'

import {addToCart, addQuantity, subQuantity, remove, addShipping, subShipping} from '../actions/cartActions.js'

const initialState = {
    items: [
        {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:Item1},
        {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item2},
        {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item3},
        {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Item4},
        {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Item5},
        {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item6}
    ],
    cart: [],
    total: 0
}
const cartReducer = (state = initialState, action) => {

    if(action.type === addToCart) {
        let addedItem = state.items.find(item=> item.id === action.id)

        let existed_item = state.cart.find(item=>action.id === item.id)

        if(existed_item) {
            addedItem.quantity += 1
            
            return {
                ...state,
                total: state.total + addedItem.price
            }
            
        } else {
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price
            
            return {
                ...state,
                cart: [...state.cart, addedItem],
                total: newTotal
            }
        }
        
    } else if (action.type === addQuantity) {
        let addedItem = state.items.find(item=> item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    } else if (action.type === subQuantity) {
        let addedItem = state.items.find(item => item.id === action.id)
        if(addedItem.quantity === 1) {
            let new_items = state.cart.filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                cart: new_items,
                total: newTotal
            }
        } else {
            addedItem.quantity -=1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
    } else if (action.type === remove) {
        let itemToRemove = state.cart.find(item=> action.id === item.id)
        let new_items = state.cart.filter(item=> action.id !== item.id)

        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        return {
            ...state,
            cart: new_items,
            total: newTotal
        }
    } else if (action.type === addShipping) {
        return {
            ...state,
            total: state.total + 6
        }
    } else if (action.type === subShipping) {
        return {
            ...state,
            total: state.total - 6
        }
    } else {
        return state;
    }

}
export default cartReducer;