import reducer, { initialState } from '../redusers/filter'


import * as  sort  from '../actions/Sort';
describe('Filter reducer', () => { //  describe - группировка для наших тестов новостного редьюсера

it ('SET_QUERY', ()=>{
const stateBefore = {
    seachQuery:'',
    SortBy:'all',
}

const action = {
  type:sort.SET_QUERY,
  payload: String,
}

expect (reducer(stateBefore,action)).toEqual({
...stateBefore,
SortBy:'all', 



})
})



it ('SET_SORT', ()=>{
    const stateBefore = {
        seachQuery:'',
        SortBy:'all',
    }
    
    const action = {
      type:sort.SET_SORT,
      payload: String,
    }
    
    expect (reducer(stateBefore,action)).toEqual({
    ...stateBefore,
    SortBy:'all', 
    
    
    
    })
    })


})




