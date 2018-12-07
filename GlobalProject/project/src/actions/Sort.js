export const setSort= (sort) => ({
type:'SET_SORT',
payload: sort
})

export const setSeatchQuery= (value) => ({
    type:'SET_QUERY',
    payload: value
    })

    
export const addToCart= (obj) => ({
    type:'ADD_FILMS_TO_CART',
    payload: obj
    });
    
    export const removeFromCart= (id) => ({
        type:'REMOVE_FILM_FROM_CART',
        payload: id
        });