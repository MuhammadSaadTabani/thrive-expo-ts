import { PUT_USER_DATA, PUT_USER_TOKEN } from "../Constants";


const initialState = {
    user: {

    },
    token: {

    }
}

export default (state = initialState, action) => {

    switch (action.type) {
        case PUT_USER_TOKEN:

            return {...state, token: action.payload}
    
        default:
            return {...state};
    }
}