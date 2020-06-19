import React from 'react';
import {connect} from 'react-redux';

function getScore(answers,questions){
   const answersScore=Object.keys(answers).length;
   const questionsScore=questions.length;
   return answersScore+questionsScore;
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
          <div>
            <h4>Leaderboard</h4>
             {sortedUserIdsWithscore.map((obj)=>(
                <div>
                    <h6>userName : {users[obj.id].name}   Score :  { obj.score} </h6>
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