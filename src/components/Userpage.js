import React from 'react';
import Answered from './Answered';
import Unanswered from './Unanswered';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';



function Userpage(props){
    const userId=props.match.params.userId;
    const {users,questions}=props;

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
               name :  {users[userId].name}
               <button>  <Link to={`/${userId}/addQuestion`}>Add Question</Link> </button>
               <hr style={{borderWidth:'5px'}}/>
              <Answered  questions={answeredQuestions} userid={userId}/>
              <hr style={{borderWidth:'5px'}}/>
              <Unanswered  questions={UnAnsweredQuestions} userid={userId}/>
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
