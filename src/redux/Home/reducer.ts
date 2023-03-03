const initialState = {
    count: 0
}

export const homeReducer = (state = initialState, action: {type:string, payload:any}) => {
    switch(action.type) {
        case "ADD_COUNT":
            return {...state, count: state.count + action.payload.value}
        default:
            return state
    }
}