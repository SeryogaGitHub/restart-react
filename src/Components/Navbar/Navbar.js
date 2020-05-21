import React from "react";
import {NavLink} from "react-router-dom";
import "./havbar.scss";

const Navbar = () => {
  return(
    <>
      <nav className={'main-nav'}>
        <ul className={'links'}>
          <li>
            <NavLink exact activeClassName={'active'} to="/">Головна</NavLink>
          </li>
          <li>
            <NavLink exact activeClassName={'active'} to="/dialogs">Повідомлення</NavLink>
          </li>
          <li>
            <NavLink activeClassName={'active'} to="/users">Користувачі</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
