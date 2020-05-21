import React from "react";
import {reduxForm} from 'redux-form'
import {createField, Input} from "../common/FormsControl/FormsControl";
import {required} from "../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import "./login.scss";

const LoginForm = ({ handleSubmit, error }) => {

  return (
    <form onSubmit={handleSubmit} className={"error-message"}>
      {createField("email", Input, {type: "text"}, "email", [required])}
      {createField("password", Input, {type: "password"}, "Пароль", [required])}
      {createField("rememberMe", Input, {type: "checkbox"}, "", "", "Запамятати")}
      <div className={'default'}>
        <button type="submit" className={'btn'}>Увійти</button>
      </div>
      {error &&
        <div className="form-error">
          {error}
        </div>
      }
    </form>
  )
};

const ContactForm = reduxForm({
  form: 'login'
})(LoginForm);

const Login = props => {
  const {login, isAuth} = props;

  const onSubmit = (formData) => {
    const {email, password, rememberMe} = formData;
    login(email, password, rememberMe)
  };

  if(isAuth){
    return <Redirect to={'/profile'} />
  }

  return(
    <section className={'login-page'}>
      <h2>Login</h2>
      <ContactForm onSubmit={onSubmit}/>
    </section>
  )
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);
