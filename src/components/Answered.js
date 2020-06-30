import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function getFormattedDate(milliSec){
  const date=new Date(milliSec)
   return date.toLocaleString()
}

function Answered(props){
    const {questions,userId,users}=props;
    
    return(
    <div className='questions-container'>
            <h4 className='tab-name'>Answered</h4>
            {questions.map((q)=>(
               
              <Link to={`${userId}/${q.id}`} >
              <div className='question-item-div'>
              <h6 className='author-name'>{`Author : ${users[q.author].name}`}</h6>
                <h6 className='date'>Time : {getFormattedDate(q.timestamp)}</h6>
                <h6 className='option-one'> Option A : {q.optionOne.text} </h6>
                <h6 className='option-two'> Option B : {q.optionTwo.text} </h6>
              </div>
              </Link>
            ))}
     </div>
    );
}

const mapStateToProps = (state)=>{
  return{
     users:state.users
  }
}

export default connect(mapStateToProps) (Answered);