import reducer, { initialState } from '../redusers/cart'


import * as  cart  from '../actions/cart';
describe('Cart reducer', () => { //  describe - группировка для наших тестов новостного редьюсера

it ('ADD_FILMS_TO_CART', ()=>{
const stateBefore = {
  items:[],
}

const action = {
  type:cart.ADD_FILMS_TO_CART,
  payload: [],
}

expect (reducer(stateBefore,action)).toEqual({
...stateBefore,
items: []


})
})




it ('REMOVE_FILM_FROM_CART', ()=>{
  const stateBefore = {
    items:[],
  }
  
  const action = {
    type:cart.REMOVE_FILM_FROM_CART,
    payload: [],
  }
  
  expect (reducer(stateBefore,action)).toEqual({
  ...stateBefore,
  items: []
  
  
  })
  })



})




