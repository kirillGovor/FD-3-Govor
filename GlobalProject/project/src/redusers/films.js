const InitialState = {
    isReady:false,
    items: null,
   
};


export default (state = InitialState, action) => {

    switch (action.type) {

        case 'SET_FILMS':
            return {
                ...state,
                items: action.payload,
                isReady:true
            };


       

        default:
            return state;


    }



}