import {authAPI} from "../Components/api/api";
import {stopSubmit} from "redux-form";

const AUTH_USER = "AUTH_USER";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch(action.type){
    case AUTH_USER: {
      return {...state, ...action.payload}
    }
    default:
      return state;
  }
};

export const setAuthUser = (userId, email, login, isAuth) => ({type: AUTH_USER, payload:
    {userId, email, login, isAuth}});

export const getAuthUser = () => (dispatch) => {
  return authAPI.auth()
    .then(response => {
      if(response.data.resultCode === 0){
        let {id, login, email} = response.data.data;
        dispatch(setAuthUser(id, email, login, true));
      }
    });
};

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe)
    .then(response => {
      if(response.data.resultCode === 0) {
        dispatch(getAuthUser());
      } else {
        const message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login",{_error: message}))
      }
    });
};

export const logout = () => (dispatch) => {
  authAPI.logout()
    .then(response => {
      if(response.data.resultCode === 0) {
        dispatch(setAuthUser(null, null, null, false));
      }
    });
};

export default authReducer;
