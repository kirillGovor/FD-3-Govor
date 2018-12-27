const InitialState = {
    items:null
 };
 
 export default (state = InitialState, action) => {
 
     switch (action.type) {
 
             case 'USER':
             return {
                     ...state,
                     items: [...state.items,action.payload]
                 
 
             };
 
 
         default:
             return state;
 
 
     }
 
 
 
 }