import React from "react";
import logo from '../../img/react.svg';
import {NavLink} from "react-router-dom";
import "./header.scss";

const Header = (props) => {
  const {login, isAuth, logout} = props;

  return(
    <header className={'main-header'}>
      <div className="logo">
        <a href='/'>
          <img src={logo} alt=""/>
        </a>
      </div>

      <div className={'login'}>
        {isAuth
          ? <div className={"login-button"}>
              <div className={'name'}>{login}</div> |
              <button className={"btn"} onClick={logout}>Розлогінитися</button>
            </div>
          : <NavLink to='/login'>Залогінитися</NavLink>
        }
      </div>
    </header>
  );
};

export default Header;
