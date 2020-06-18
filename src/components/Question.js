import React from 'react';
import {connect} from 'react-redux';

function checkIsAnswered(users,userId,questionId){
    const answers=users[userId].answers;
    const answersIds=Object.keys(answers);
    if(answersIds.includes(questionId)){
        return true;
    }
    return false;
}

function Question(props){
    const {users,questions}=props;
    const userId= props.match.params.userId;
    const questionId = props.match.params.questionId;
    const isAnswered=checkIsAnswered(users,userId,questionId);
    if(isAnswered){

        return(
          <div>
              <h6>A : {questions[questionId].optionOne.text}</h6>
              <h6>B : {questions[questionId].optionTwo.text}</h6>
              <h6>Your answer : 
              {users[userId].answers[questionId] === 'optionOne' ? ' A' : ' B'}
              </h6>
              <h6>Number of people chose A {questions[questionId].optionOne.votes.length}</h6>
              <h6>Number of people chose B {questions[questionId].optionTwo.votes.length}</h6>
          </div>
        );
    }
    return(
          <h2>Not answered......</h2>
    );
}

const mapStateToProps = (state)=>{
    return{
      users:state.users,
      questions:state.questions
    }
  }
  
  export default connect(mapStateToProps)(Question);