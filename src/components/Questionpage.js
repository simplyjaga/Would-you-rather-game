import React from 'react';
import {connect} from 'react-redux';
import {addAnswerToStoreAndServer} from '../store/combinedActions';
import Userbar from './Userbar';
import { Redirect } from 'react-router-dom';

function checkIsAnswered(users,userId,questionId){
    const answers=users[userId].answers;
    const answersIds=Object.keys(answers);
    if(answersIds.includes(questionId)){
        return true;
    }
    return false;
}

function percentForA(aVotes,bVotes){
    let percent= (aVotes/(aVotes+bVotes))*100
    return percent.toFixed(2);
}

function percentForB(aVotes,bVotes){
    let percent= (bVotes/(aVotes+bVotes))*100
    return percent.toFixed(2);
}

function isQuestionIdValid(questions,questionId){
    const isValid=Object.keys(questions).includes(questionId)
    return isValid;
}


function Question(props){
    const {users,questions,dispatch,authUser}=props;
    const userId= props.match.params.userId;
    const questionId = props.match.params.questionId;
            
       if(isQuestionIdValid(questions,questionId)) {   
            const authorId=questions[questionId].author;
            const isAnswered=checkIsAnswered(users,userId,questionId);

            const votesForA=questions[questionId].optionOne.votes.length;
            const votesForB=questions[questionId].optionTwo.votes.length;

            const addAnswer=(e)=>{
                const option=e.target.getAttribute('value');
                dispatch(addAnswerToStoreAndServer(authUser,questionId,option));
            }

            if(isAnswered){
                return(
                    <div>
                        <Userbar userId={userId}/>
                        <div className='question-div'>
                            <h6 className='author-name'>{`Author : ${users[authorId].name}`}</h6>
                            <div className='option-div'>
                                <h6>A : {questions[questionId].optionOne.text}</h6>
                                <h6>B : {questions[questionId].optionTwo.text}</h6>
                            </div>

                            <h6 className='answer'>Your answer : 
                            {users[userId].answers[questionId] === 'optionOne' ? ' A' : ' B'}
                            </h6>
                            <hr/>

                            <div className='percent-div'>
                                <h6>People chose A : {percentForA(votesForA,votesForB)} %</h6>
                                <h6>People chose B : {percentForB(votesForA,votesForB)} %</h6>
                            </div>

                        </div>
                </div>
                );
            }
            return(
                <div>
                    <Userbar userId={userId}/>
                    <div className='question-div'> 
                        <h6 className='author-name'>{`Author : ${users[authorId].name}`}</h6>
                        <div className='option-div-unanswered'>
                            <div>
                                <h6 className='option-A'> 
                                    <div className='input-div'><input type="radio" onClick={addAnswer} value='optionOne'/></div>
                                    A : {questions[questionId].optionOne.text}
                                </h6>
                            </div>
                            <div>
                                <h6 className='option-B'> 
                                    <div className='input-div'><input type="radio" onClick={addAnswer} value='optionTwo'/></div>
                                    B : {questions[questionId].optionTwo.text}
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else{
          return (<Redirect to={`/${userId}`} />);  //it goes to login page, as redirects authuser(and everything) in store becomes null 
        }
    
}

const mapStateToProps = (state)=>{
    return{
      authUser:state.authUser,
      users:state.users,
      questions:state.questions
    }
  }
  
  export default connect(mapStateToProps)(Question);