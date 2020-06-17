import React, { Component } from 'react';
import {getUsers} from './store/users';
import {getQuestions} from './store/questions';
import {connect} from 'react-redux';

 class App extends Component{

  componentDidMount(){
    const {dispatch}=this.props;
    dispatch(getUsers());
    dispatch(getQuestions());
  }

  render(){
     return (
         <div>
         hi
         </div>
      );
  }
}


export default connect()(App);