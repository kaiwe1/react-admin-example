import { combineReducers, legacy_createStore as createStore } from "redux";
import { globalReducer } from "./Global/reducer"
import { homeReducer } from "./Home/reducer"

const rootReducer = combineReducers({
    globalReducer,
    homeReducer,
})

const store = createStore(rootReducer);

export default store