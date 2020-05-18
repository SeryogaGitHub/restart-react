import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  headers: {
    "API-KEY": 'bfe20f01-b285-4156-ac22-e844bd2b5015'
  }
});

export const userAPI = {
  getUsers(page, pageSize){
    return instance.get(`/users?page=${page}&count=${pageSize}`);
  },
  unfollow(id){
    return instance.delete(`/follow/${id}`);
  },
  follow(id){
    return instance.post(`/follow/${id}`, {});
  }
};

export const authAPI = {
  auth(){
    return instance.get('/auth/me/');
  },
  login(email, password, rememberMe = false){
    return instance.post('/auth/login/', {email, password, rememberMe});
  },
  logout(){
    return instance.delete('/auth/login/');
  }
};

export const profileAPI = {
  userProfile(userId){
    return instance.get('/profile/' + userId);
  },
  updateStatus(status){
    return instance.put('/profile/status/', {status: status});
  },
  getStatus(userId){
    return instance.get('/profile/status/' + userId);
  },
};
