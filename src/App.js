import React, {Component} from 'react';
import Navbar from "./Components/Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Placeholder from "./Components/common/Placeholder/Placeholder";

class App extends Component {
  componentDidMount() {
    const {initializeApp} = this.props;

    initializeApp();
  }

  render() {
    const {initialized} = this.props;
    if(!initialized){
      return <Placeholder/>
    }

    return (
      <div className="grid">
        <HeaderContainer/>

        <div className="container">
          <Navbar/>
          <main className={'main-content'}>
            <Route exact path='/' render={() => <ProfileContainer/>}/>
            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
            <Route path='/login' render={() => <Login/>}/>
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

export default connect(mapStateToProps, {initializeApp})(App);
