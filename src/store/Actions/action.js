import { Userlogin, Userloginfail, Userlogout, Userlist, Listfail } from '../actiontype';
import axios from 'axios';

const authSuccess = (token,id) => {
    return {
        type: Userlogin,
        token: token,
        id:id,
    }
}
const authFail = (err) => {
    return {
        type: Userloginfail,
        error: err
    }
}

export const logout = () => {
    localStorage.removeItem("token");
    // window.location.href = '/';
    return {
        type: Userlogout,
    };
};

export const Authlogin = (email, password) => {
    return dispatch => {
        axios
            .post("http://dignizant.com/practical-task-api-doc/public/api/login", {
                email: email,
                password: password
            })
            .then(res => {
                console.log(res);
                const token = res.data.access_token;
                const id=res.data.data.id;
                localStorage.setItem("token", token);
                dispatch(authSuccess(token,id));
                //                window.location.href = '/'
            })
            .catch(err => {
                dispatch(authFail(err));
            });
    };
}

export const Authsignup = (name, email, password, password_confirmation, description, profile_photo) => {
    return dispatch => {
        axios
            .post("http://dignizant.com/practical-task-api-doc/public/api/register", {
                name: name,
                email: email,
                password: password,
                password_confirmation: password_confirmation,
                description: description,
                profile_photo: profile_photo,
            })
            .then(res => {
                console.log(res);
                const token = res.data.access_token;
                localStorage.setItem("token", token);
                dispatch(authSuccess(token));
                //                window.location.href = '/'
            })
            .catch(err => {
                dispatch(authFail(err));
            });
    };
}

export const userlistSuccess = (data) => {
    return {
        type: Userlist,
        data
    }
}
export const listfail = (err) => {
    return {
        type: Listfail,
        error: err
    }
}
export const userList = (token) => {
    console.log(token);
    return dispatch => {
        axios
            .post("http://dignizant.com/practical-task-api-doc/public/api/user-list", '' ,{
                headers: { "Authorization": `Bearer  ${token}` }
            })
            .then(res => {
                console.log(res);
                dispatch(userlistSuccess(res.data));
            })
            .catch(err => {
                dispatch(listfail(err));
            });
    }
}