import React from 'react';
import { Link } from 'react-router-dom';

function getFormattedDate(milliSec){
  const date=new Date(milliSec)
   return date.toLocaleString()
}

function Unanswered(props){
    const {questions,userid}=props;
    
    return(
    <div className='questions-container'>
          <h4 className='tab-name'>UnAnswered</h4>
          {questions.map((q)=>(
            
            <Link to={`${userid}/${q.id}`} >
            <div className='question-item-div'>
              <h6 className='author-name'>{`Author : ${q.author}`}</h6>
              <h6 className='date'>Time : {getFormattedDate(q.timestamp)}</h6>
              <h6 className='option-one'> OptionOne : {q.optionOne.text} </h6>
              <h6 className='option-two'> OptionTwo : {q.optionTwo.text} </h6>
            </div>
            </Link>
          ))}
    </div>   
    );
}

export default Unanswered;