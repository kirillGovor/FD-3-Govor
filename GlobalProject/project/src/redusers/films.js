const InitialState = {
    isReady:false,
    films: null,
};


export default (state = InitialState, action) => {

    switch (action.type) {

        case 'SET_FILMS':
            return {
                ...state,
                films: action.payload,
                isReady:true
            };


        case 'ADD_FILMS':
            return {
                ...state,
                films: [
                    ...state.films,
                    action.payload
                ]

            };


        default:
            return state;


    }



}