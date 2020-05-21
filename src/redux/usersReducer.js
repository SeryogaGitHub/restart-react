import {userAPI} from "../Components/api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_PROCESS_FOLLOWED = "SET_PROCESS_FOLLOWED";

let initialState = {
  users: [],
  pageSize: 10,
  totalCount: 0,
  currentPage: 1,
  isFetching: true,
  progressFollowed: []
};

const usersReducer = (state = initialState, action) => {
  switch(action.type){
    case FOLLOW: {
      return {...state,
        users: state.users.map((u) => {
          if(u.id === action.userId){
              return {...u, followed: true}
          }
          return u;
        })
      };
    }
    case UNFOLLOW: {
      return {...state,
        users: state.users.map((u) => {
          if(u.id === action.userId){
            return {...u, followed: false}
          }
          return u;
        })
      };
    }
    case SET_USERS: {
      return {...state, users: action.users};
    }
    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.page};
    }
    case SET_TOTAL_COUNT: {
      return {...state, totalCount: action.count};
    }
    case SET_IS_FETCHING: {
      return {...state, isFetching: action.fetching};
    }
    case SET_PROCESS_FOLLOWED: {
      return {
        ...state,
        progressFollowed: action.isFetching
            ? [...state.progressFollowed, action.userId]
            : state.progressFollowed.filter((id) => id !== action.userId)
      }
    }
    default:
      return state;
  }
};

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalCount = (count) => ({type: SET_TOTAL_COUNT, count});
export const setIsFetching = (fetching) => ({type: SET_IS_FETCHING, fetching});
export const setProcessFollowed = (process, userId) =>
    ({type: SET_PROCESS_FOLLOWED, process, userId});

export const requestUsers = (page, pageSize) => async (dispatch) => {
  dispatch(setIsFetching(true));
  const response = await userAPI.getUsers(page, pageSize);

  dispatch(setUsers(response.data.items));
  dispatch(setTotalCount(response.data.totalCount));
  dispatch(setIsFetching(false));
  dispatch(setCurrentPage(page));
};


const followUnfollow = async (dispatch, userId, method, action) => {
  const response = await userAPI.method(userId)
  if(!response.data.resultCode){
    dispatch(action(userId));
  }
};

export const follow = (userId) => {
  return async (dispatch) => {
    followUnfollow(dispatch, userId, follow, followSuccess(userId))
  };
};

export const unfollow = (userId) => {
  return async (dispatch) => {
    followUnfollow(dispatch, userId, unfollow, unfollowSuccess(userId))
  };
};

export default usersReducer;
