import React from 'react';
import {connect} from 'react-redux';
import { addAnswerToUsers } from '../store/users';
import {addAnswerToQuestions} from '../store/questions';

function checkIsAnswered(users,userId,questionId){
    const answers=users[userId].answers;
    const answersIds=Object.keys(answers);
    if(answersIds.includes(questionId)){
        return true;
    }
    return false;
}


function Question(props){
    const {users,questions,dispatch,authUser}=props;
    const userId= props.match.params.userId;
    const questionId = props.match.params.questionId;
    const isAnswered=checkIsAnswered(users,userId,questionId);

    const addAnswer=(e)=>{
        const option=e.target.getAttribute('value');
        dispatch(addAnswerToUsers(authUser,questionId,option));
        dispatch(addAnswerToQuestions(authUser,questionId,option));
     }

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
        <div>
            <h6 onClick={addAnswer} value='optionOne' >A : {questions[questionId].optionOne.text}</h6>
            <h6 onClick={addAnswer} value='optionTwo' >B : {questions[questionId].optionTwo.text}</h6>
        </div>
      );
}

const mapStateToProps = (state)=>{
    return{
      authUser:state.authUser,
      users:state.users,
      questions:state.questions
    }
  }
  
  export default connect(mapStateToProps)(Question);