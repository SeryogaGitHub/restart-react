import React from "react";
import {addDialogPost} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";
import "./Message/scss/dialogs.scss";

class DialogsContainer extends React.Component{
  render(){
    const {dialogPage, addDialogPost} = this.props;

    return <Dialogs dialogPage={dialogPage}
                    addDialogPost={addDialogPost}/>
  };
}

const mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage,
    login: state.auth.login
  }
};

const mapDispatchToProps = {addDialogPost};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(DialogsContainer);
