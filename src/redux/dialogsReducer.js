const ADD_DIALOG_POST = "ADD-DIALOG-POST";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DIALOG_POST: {
      let value = {message: action.value};

      return {...state,
        messagesData: [...state.messagesData, value]
      };
    }

    default:
      return state;
  }
};

export const addDialogPost = (value) => ({type: ADD_DIALOG_POST, value});

export default dialogsReducer;
