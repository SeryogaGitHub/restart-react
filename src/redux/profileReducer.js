import {profileAPI} from "../Components/api/api";

const ADD_POST = "profile/ADD-POST";
const SET_USER_ID = "profile/SET_USER_ID";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_STATUS = "profile/SET_STATUS";

let initialState = {
  userId: null,
  profile: null,
  status: '',
  posts: [
    {
      id: 1,
      name: 'Мері',
      message: 'Lorem ipsum dolor sit amet.',
      like: 314
    },
    {
      id: 2,
      name: 'Франклін',
      message: 'Accusamus beatae consequatur deserunt eaque exercitationem voluptas.',
      like: 25},
    {
      id: 3,
      name: 'Аня',
      message: 'Fugiat optio pariatur placeat quod voluptas.',
      like: 11},
    {
      id: 4,
      name: 'Юля',
      message: 'Deserunt eaque exercitationem explicabo hic.',
      like: 67
    },
  ]
};

const profileReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_POST: {
      let newPost = {
        id: 1,
        name: 'Мері',
        message: action.value,
        like: 5
      };

      return {...state,
        posts: [newPost, ...state.posts],
      };
    }
    case SET_USER_ID: {
      return {...state,
        userId: action.userId
      };
    }
    case SET_USER_PROFILE: {
      return {...state,
        profile: action.profile
      };
    }
    case SET_STATUS: {
      return {...state,
        status: action.status
      };
    }
    default:
      return state;
  }
};


export const addPost = (value) => ({type: ADD_POST, value});
export const setUserId = (userId) => ({type: SET_USER_ID, userId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await profileAPI.userProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);
  if(response.data.resultCode === 0){
    dispatch(setStatus(status));
  }
};

export default profileReducer;
