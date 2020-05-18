import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

const store = {
  _state:{
    profilePage: {
      newPostText: "",
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
    },
    dialogPage: {
      newPostText: "",
      dialogsData:[
        {id: 1, name: 'Мері'},
        {id: 2, name: 'Франклін'},
        {id: 3, name: 'Аня'},
        {id: 4, name: 'Юля'},
      ],
      messagesData:[
        {message: 'Lorem ipsum dolor sit amet.'},
        {message: 'Accusamus beatae consequatur deserunt eaque exercitationem explicabo hic labore obcaecati officia temporibus, ullam, unde vitae, voluptas? Fugiat optio pariatur placeat quod voluptas.'},
        {message: 'Fugiat optio pariatur placeat quod voluptas.'},
      ]
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber () {
    console.log("State changed");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action){
    this._state.profilePage = profileReducer(action, this._state.profilePage);
    this._state.dialogsPage = dialogsReducer(action, this._state.dialogPage);

    this._callSubscriber(this._state);
  }
};

export default store;
