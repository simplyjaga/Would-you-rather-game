import React, { useState } from 'react';
import Answered from './Answered';
import Unanswered from './Unanswered';
import {connect} from 'react-redux';
import Leaderboard from './Leaderboard';
import Addquestion from './Addquestion';
import Userbar from './Userbar';
import { Redirect } from 'react-router-dom';


function showCurrentTab(currentTab,userId,UnAnsweredQuestions,answeredQuestions){

    switch (currentTab) {
        case 'answered':
            return (<Answered  questions={answeredQuestions} userId={userId}/>);
        case 'unAnswered':
            return (<Unanswered  questions={UnAnsweredQuestions} userId={userId}/>);
        case 'leaderBoard':
            return (<Leaderboard />);
        case 'addQuestion':
            return (<Addquestion/>);
        default:
            console.log(currentTab);
    }
}


function Userpage(props){

    const userId=props.match.params.userId;
    const {users,questions,authUser}=props;

    const[currentTab,setTab]=useState('answered');

    if(authUser === userId){
        const questionsIds=Object.keys(questions);
        const answeredObj=users[userId].answers;
        const answeredIds=Object.keys(answeredObj);

        const answeredQuestions=answeredIds.map((id)=>{
            return questions[id]
        })
        const unAnsweredIds= questionsIds.filter((id)=>{
            return !answeredIds.includes(id);
        })

        const UnAnsweredQuestions=unAnsweredIds.map((id)=>{
            return questions[id]
        })

        return(
            <div>
               <Userbar userId={userId}/>
               <div className='nav-div'>
                      <div className='nav-bar' >
                          <div className='nav-item'> <button className='btn btn-outline-primary' onClick={()=>setTab('answered')}> Answered </button></div>
                          <div className='nav-item'>  <button  className='btn btn-outline-primary' onClick={()=>setTab('unAnswered')}> Unanswered </button></div>
                          <div className='nav-item'>   <button  className='btn btn-outline-primary' onClick={()=>setTab('leaderBoard')}> Leaderboard </button></div> 
                          <div className='nav-item'>   <button  className='btn btn-outline-primary' onClick={()=>setTab('addQuestion')}> Add Question </button></div>
                      </div>
                      <div>
                       { showCurrentTab(currentTab,userId,UnAnsweredQuestions,answeredQuestions) }
                      </div>
               </div> 
            </div>
      );
    }

    if(authUser !== userId){
       return (<Redirect to='/' />);
    }

}

const mapStateToProps = (state)=>{
    return{
       authUser:state.authUser,
       users:state.users,
       questions:state.questions
    }
  }
  
export default connect(mapStateToProps)(Userpage);
