
export const addToCart= (obj) => ({
    type:'ADD_FILMS_TO_CART',
    payload: obj
    });
    
    export const removeFromCart= (id) => ({
        type:'REMOVE_FILM_FROM_CART',
        payload: id
        });


      