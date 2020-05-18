import React from "react";
import {connect} from "react-redux";
import {
  followSuccess, requestUsers,
  setCurrentPage,
  unfollowSuccess
} from "../../redux/usersReducer";
import Users from "./Users";
import {getCurrentPage, getIsFetching, getTotalCount, getUsers, getUsersPageSize} from "../../redux/users-selectors";
import "./users.scss";

class UserContainer extends React.Component{
  componentDidMount() {
    const {requestUsers, currentPage, pageSize} = this.props;

    requestUsers(currentPage, pageSize);
  }

  onChangePages = (page) => {
    const {pageSize, requestUsers} = this.props;
    requestUsers(page, pageSize);
  };

  render() {
    const {unfollowSuccess, followSuccess, users, isFetching, totalCount, pageSize, currentPage} = this.props;

    return <Users unfollow={unfollowSuccess}
                  follow={followSuccess}
                  users={users}
                  onChangePages={this.onChangePages}
                  isFetching={isFetching}
                  totalCount={totalCount}
                  pageSize={pageSize}
                  currentPage={currentPage}/>;
  }
}
const mapStateToProps = (state) => {
  return{
    users: getUsers(state),
    pageSize: getUsersPageSize(state),
    totalCount: getTotalCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
  }
};

const mapDispatchToProps = {
  followSuccess,
  unfollowSuccess,
  setCurrentPage,
  requestUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
