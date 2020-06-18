import React from 'react';
import { Link } from 'react-router-dom';

function Unanswered(props){
    const {questions,userid}=props;
    
    return(
          <div >
              <h4>unanswered</h4>
              {questions.map((q)=>(
                <div >
                  <Link to={`${userid}/${q.id}`}>
                 
                    <h6>{
                     `Author : ${q.author}`}</h6>
                     <h6>{`Time : ${q.timestamp}  
                     OptionOne : ${q.optionOne.text} 
                     OptionTwo : ${q.optionTwo.text}`}</h6>
                  
                  </Link></div>
              ))}
          </div>
    );
}

export default Unanswered;