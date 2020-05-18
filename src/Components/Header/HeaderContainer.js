import React from "react";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  render() {
    const {login, isAuth, logout} = this.props;

    return <Header login={login}
                   isAuth={isAuth}
                   logout={logout}/>
  }
}

const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth
});

const mapDispatchToProps = {
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
