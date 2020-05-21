import React from "react";
import Placeholder from "../common/Placeholder/Placeholder";
import Pagination from "../common/Pagination/Pagination";
import User from "./User";

const Users = (props) => {
  const {unfollow, follow, users, totalCount, pageSize, currentPage, onChangePages, isFetching} = props;

  return(
    <div className={'users-page'}>
      {isFetching ? <Placeholder/> : null}
      <Pagination onChangePages={onChangePages} totalCount={totalCount} pageSize={pageSize} currentPage={currentPage}/>
      <User unfollow={unfollow} follow={follow} users={users}/>
    </div>
  );
};

export default Users;
