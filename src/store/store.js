import { createStore } from "redux";
// import rootReducer from "../redux";
import { todoReducer } from "../redux/reducer";
const store = createStore(todoReducer, window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__())
export default store