import React from "react";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let {name, id} = props;
  let path = "/dialogs/" + id;
  return <li className="item"><NavLink to={path} activeClassName={'active'}>{name}</NavLink></li>;
};

export default DialogItem;
