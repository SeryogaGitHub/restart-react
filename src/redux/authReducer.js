import {authAPI} from "../Components/api/api";
import {stopSubmit} from "redux-form";

const AUTH_USER = "auth/AUTH_USER";

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

export const getAuthUser = () => async (dispatch) => {
  const response = await authAPI.auth();

  if(response.data.resultCode === 0){
    let {id, login, email} = response.data.data;
    dispatch(setAuthUser(id, email, login, true));
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe);
  if(response.data.resultCode === 0) {
    dispatch(getAuthUser());
  } else {
    const message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
    dispatch(stopSubmit("login",{_error: message}))
  }
};

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout()
  if(response.data.resultCode === 0) {
    dispatch(setAuthUser(null, null, null, false));
  }
};

export default authReducer;
