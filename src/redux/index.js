import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import motorsReducer from './reducers/motorsReducer';


const rootReducers = combineReducers({
    motors: motorsReducer,
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))