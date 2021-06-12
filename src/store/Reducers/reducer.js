import { Userlogin } from '../actiontype';
import { Userloginfail } from '../actiontype';
import { Userlogout } from '../actiontype';
const initialState = {
    token: null,
    error: null,
    id:null
};
const authSuccess = (state, action) => {
    return {
        token: action.token,
        id: action.id,
    };
};

const authFail = (state, action) => {
    return {
        error: action.error,
    };
};

const logout = (state, action) => {
    return {
        token: null,
    }
}

const Loginreducer = (state = initialState, action) => {
    switch (action.type) {
        case Userlogin:
            return authSuccess(state, action);
        case Userloginfail:
            return authFail(state, action);
        case Userlogout:
            return logout(state, action);
        default:
            return state;
    }
}
export default Loginreducer;