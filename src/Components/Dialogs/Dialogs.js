import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";

let DialogForm = props => {
  const {handleSubmit} = props;
  return(
    <form className={'form'} onSubmit={handleSubmit}>
      <Field component="textarea" name="message" placeholder='Повідомлення'/>
      <button className="btn">Відправити</button>
    </form>
  )
};

DialogForm = reduxForm({form: "dialogForm"})(DialogForm);

const Dialogs = (props) => {
  window.state = props;

  const {addDialogPost} = props;
  let {dialogsData, messagesData} = props.dialogPage;

  let dialogsElements =  dialogsData.map(data => <DialogItem key={data.id} name={data.name} id={data.id}/>);
  let messagesElements =  messagesData.map((data, id) => <Message key={id} message={data.message}/>);

  const addMessage = value => {
    addDialogPost(value.message)
  };

  return(
    <div className={'dialogs-page'}>
      <ul className="dialogs-items">{dialogsElements}</ul>

      <div className="messages">
        {messagesElements}
        <DialogForm onSubmit={addMessage}/>
      </div>
    </div>
  )
};

export default Dialogs;
