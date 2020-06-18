import React, { Component } from 'react';
import {getUsers} from './store/users';
import {getQuestions} from './store/questions';
import {connect} from 'react-redux';
import Login from './components/Login';
import Userpage from './components/Userpage'
import { Route, Switch } from 'react-router-dom';
import Question from './components/Question';

 class App extends Component{

  componentDidMount(){
    const {dispatch}=this.props;
    dispatch(getUsers());
    dispatch(getQuestions());
  }

  render(){
     return (
         <div>
          <Switch>
          <Route exact path ='/' component={Login}/>
          <Route exact path ='/:userId' component={Userpage}/>
          <Route exact path ='/:userId/:questionId' component={Question} />
          </Switch>
         </div>
      );
  }
}

const mapStateToProps = (state)=>{
  return{
     authUser:state.authUser
  }
}

export default connect(mapStateToProps)(App);