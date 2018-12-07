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


        case 'SET_IS_READY':
            return {
                ...state,
               
                    ...state,
                  isReady:  action.payload,
                

            };

         



        default:
            return state;


    }



}