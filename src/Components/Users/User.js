import React from "react";
import dPhoto from '../../img/avatars/default-photo.png';
import {NavLink} from "react-router-dom";

const User = (props) => {
  const {unfollow, follow, users} = props;

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

  return(usersItems);
};

export default User;
