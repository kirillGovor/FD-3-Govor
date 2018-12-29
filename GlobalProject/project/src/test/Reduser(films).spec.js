import reducer, { initialState } from '../redusers/films'


import * as  cart  from '../actions/films';
describe('Films reducer', () => { //  describe - группировка для наших тестов новостного редьюсера

it ('SET_FILMS', ()=>{
const stateBefore = {
  items:null,
  isReady:false,
}

const action = {
  type:cart.SET_FILMS,
  payload: [],
}

expect (reducer(stateBefore,action)).toEqual({
...stateBefore,
isReady: false, 
items: null


})
})





})




