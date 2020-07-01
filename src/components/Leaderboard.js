import React from 'react';
import {connect} from 'react-redux';

function getScore(answers,questions){
   const answersScore=Object.keys(answers).length;
   const questionsScore=questions.length;
   return answersScore+questionsScore;
}

function questionsAsked(questions){
    const questionsScore=questions.length;
    return questionsScore;
}

function questionsAnswered(answers){
    const answersScore=Object.keys(answers).length;
    return answersScore;
}

function Leaderboard (props){
    const {users}=props;
    const usersIds=Object.keys(users);
    const userIdsWithscore=usersIds.map((id)=>{
        const score=getScore(users[id].answers,users[id].questions);
            return {
                id,
                score
            }
   })
   const sortedUserIdsWithscore=userIdsWithscore.sort((a,b)=>(b.score - a.score))
    
    return(
          <div className='leaderboard-container'>
            <h4 className='tab-name'>Leaderboard</h4>
             {sortedUserIdsWithscore.map((obj,index)=>(
                <div className='user-div' key={obj.id}>
                   <h6 className='author-name'>{users[obj.id].name} </h6>
                   <h6 className='score'>  Score :  { obj.score} </h6>
                   <h6 className='rank'>{index+1}</h6>
                   <h6 className='question-stat'>Questions Asked  : {questionsAsked(users[obj.id].questions)}</h6>
                   <h6 className='question-stat'>Questions Answered : {questionsAnswered(users[obj.id].answers)} </h6>
                </div> 
             ))}
          </div>
    );

} 


const mapStateToProps = (state)=>{
    return{
       users:state.users
    }
  }
  
  export default connect(mapStateToProps)(Leaderboard);