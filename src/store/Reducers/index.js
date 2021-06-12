import { combineReducers } from "redux";

import Loginreducer from '../Reducers/reducer';
import  List from '../Reducers/userlist';
const rootReducer = combineReducers({
    authlogin: Loginreducer,
    userlist: List
})

export default rootReducer;