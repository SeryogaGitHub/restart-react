import React from "react";
import {
  addPost,
  setUserId,
  getUserProfile,
  getStatus,
  updateStatus
} from "../../redux/profileReducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {setProcessFollowed} from "../../redux/usersReducer";
import {compose} from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";
import "./profile.scss";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const {getUserProfile, getStatus, authUserId} = this.props;
    let {userId} = this.props.match.params;

    if(!userId){
      userId = authUserId;
    }
    getUserProfile(userId);
    getStatus(userId)
  }

  render() {
    return <Profile {...this.props}/>;
  }
}

const mapStateToProps = (state) => {
  return{
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
    login: state.auth.login,
    status: state.profilePage.status,
    authUserId: state.auth.userId
  }
};

const mapDispatchToProps = {
  addPost,
  setUserId,
  setProcessFollowed,
  getUserProfile,
  getStatus,
  updateStatus
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirect
)(ProfileContainer);

