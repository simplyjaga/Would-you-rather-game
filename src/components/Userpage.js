import React from 'react';
import Answered from './Answered';
import Unanswered from './Unanswered';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Leaderboard from './Leaderboard';
import { logOut } from '../store/authUser';
import Addquestion from './Addquestion';



function Userpage(props){

    const userId=props.match.params.userId;
    const {users,questions,dispatch}=props;

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
     
    const logOutUser=()=>{
        dispatch(logOut());
    }

    return(
          <div>

             <div className='user-bar'>
                <div className='user-name'> {users[userId].name} </div>
                <h3 className='title'>Would You Rather ?</h3>
                 <Link to='/' onClick={logOutUser} className='log-out'>Log Out</Link>
             </div>

             <div className='nav-div'>
                    <div className='nav-bar' >
                        <div className='nav-item'> <button className='btn btn-outline-primary'> Answered </button></div>
                        <div className='nav-item'>  <button  className='btn btn-outline-primary'> UnAnswered </button></div>
                        <div className='nav-item'>   <button  className='btn btn-outline-primary'> Leaderboard </button></div> 
                        <div className='nav-item'>   <button  className='btn btn-outline-primary'> Add Question </button></div>
                    </div>
                    <div>
                      <Answered  questions={answeredQuestions} userid={userId}/>
                      <Unanswered  questions={UnAnsweredQuestions} userid={userId}/>
                      <Leaderboard />
                       <Addquestion/>
                    </div>
             </div> 
              <hr style={{borderWidth:'5px'}}/>
          </div>
    );
}

const mapStateToProps = (state)=>{
    return{
       users:state.users,
       questions:state.questions
    }
  }
  
export default connect(mapStateToProps)(Userpage);
