const InitialState = {
   items:[
  
   ],
   userName:""
};

export default (state = InitialState, action) => {

    switch (action.type) {

        case 'ADD_FILMS_TO_CART':
            return {
                ...state,
                items: [...state.items,action.payload],
              
            };


        case 'REMOVE_FILM_FROM_CART':
            return {
                    ...state,
                    items: state.items.filter(o => o.id !== action.payload)
                

            };

            case 'NEW_USER':
            return {
                    ...state,
                    userName: action.payload
                

            };


        default:
            return state;


    }



}