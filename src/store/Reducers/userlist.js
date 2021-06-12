import {Userlist, Listfail } from '../actiontype';

const initialState={
    user_list:null,
}


const userlist = (state, action) => {
    return {
        user_list: action.data,
    }
}
const Faillist = (state, action) => {
    return {
        error: action.error,
    }
}

const List =(state=initialState,action)=>{
    switch(action.type){
        case Userlist:
            return userlist(state, action);
        case Listfail:
            return Faillist(state, action);
        default:
            return state;
    }
}
export default List;