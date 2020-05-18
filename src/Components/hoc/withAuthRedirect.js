import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    login: state.auth.login
  }
};

const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component{
    render() {
      const {login} = this.props;
      if(!login) return <Redirect to={'/login'}/>;

      return <Component {...this.props}/>
    }
  }

  return connect(mapStateToProps)(RedirectComponent);
};

export default withAuthRedirect;
