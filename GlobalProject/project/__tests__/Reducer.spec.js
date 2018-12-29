it ('ADD_FILMS_TO_CART', ()=>{
const stateBefore = {
  items:[],
}

const action = {
  payload: obj,
}

expect (reduser(stateBefore,action).toEqual({
...stateBefore,
items: [...stateBefore.items,action.payload]


}))
})