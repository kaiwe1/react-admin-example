const initialState = {
    token: "",
    username: ""
}

export const globalReducer  = (state = initialState, action: {type: string, payload: any}) => {
    switch(action.type) {
        case "SET_TOKEN":
            return {...state, token: action.payload.token}
        case "SET_USERNAME":
            return {...state, username: action.payload.username}
        default:
            return state
    }
}