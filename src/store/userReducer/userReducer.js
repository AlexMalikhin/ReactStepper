const initialState = {}

const GET_USE_DATA = "GET_USER_DATA"

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USE_DATA:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export const getUserDataAction = (payload) =>({type: GET_USE_DATA, payload})