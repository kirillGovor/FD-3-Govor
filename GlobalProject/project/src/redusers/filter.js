const InitialState = {
    seachQuery:'',
    SortBy:'all',
 };
 
 export default (state = InitialState, action) => {
 
     switch (action.type) {
 
        case 'SET_QUERY':
        return {
            ...state,
            searchQuery: action.payload,
           
        };

        case 'SET_SORT':
        return {
            ...state,
            SortBy: action.payload,
           
        };
 
         default:
             return state;
 
 
     }
 
 
 
 }