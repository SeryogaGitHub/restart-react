import React from "react";
import dPhoto from '../../img/avatars/default-photo.png';
import Placeholder from "../common/Placeholder/Placeholder";
import {NavLink} from "react-router-dom";

const Users = (props) => {
  const {unfollow, follow, users, totalCount, pageSize, currentPage, onChangePages, isFetching} = props;

  let pageCount = Math.ceil(totalCount / pageSize);
  let pages = [];

  for(let i = 1; i <= pageCount; i++){
    pages.push(i);
  }

  let initPage = pages.map((page) =>
    <li key={page} className={(page === currentPage) ? "active" : null}
        onClick={() => onChangePages(page)}>{page}</li>
  );

  let usersItems = users.map( u =>
    <div key={u.id} className={"user-section"}>
      <div className="ava-followed">
        <NavLink activeClassName={"active"} to={'profile/' + u.id} className={"person"} style={{backgroundImage: `url(${u.photos.small != null ? u.photos.small : dPhoto})`}}/>

        {u.followed ?
          <button className={'btn'} onClick={() => {unfollow(u.id);}}>
            Відписатися
          </button>
          :
          <button className={'btn'} onClick={() => {follow(u.id)}}>
            Підписатися
          </button>}
      </div>

      <div className="message-location">

        <div className="name">{u.name}</div>

        <div className="message">
          <p>{u.status}</p>
        </div>
      </div>
    </div>
  );

  return(
    <div className={'users-page'}>
      {isFetching ? <Placeholder/> : null}
      <div className="pagination">
        <ul>
          {initPage}
        </ul>
      </div>
      {usersItems}
    </div>
  );
};

export default Users;
