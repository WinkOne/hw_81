import {LINK_SUCCESS} from "./action";


const initialState = {
    link: []
};

const reducer = (state = initialState, action) => {
    if (action.type === LINK_SUCCESS){
        return {...state, link: action.data}
    }
    return state;


};

export default reducer;