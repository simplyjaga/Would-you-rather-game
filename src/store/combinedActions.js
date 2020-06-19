import {addAnswerToUsers, addQuestionToUsers} from './users';
import {addAnswerToQuestions, addQuestionToQuestions} from './questions';
import * as API from '../_DATA';

export const addAnswerToStoreAndServer=(authUser,questionId,option)=>{
    const answer={
        authedUser:authUser,
        qid:questionId,
        answer:option
    }
    return (dispatch)=>{
        API._saveQuestionAnswer(answer)
        .then(()=>{
            dispatch(addAnswerToUsers(authUser,questionId,option));
            dispatch(addAnswerToQuestions(authUser,questionId,option));
        })
    }
} 

export const addQuestionToStoreAndServer=(authUser,optionOne,optionTwo)=>{
    
    const question={
        optionOneText:optionOne,
        optionTwoText:optionTwo,
        author:authUser
    }

    return (dispatch)=>{
        API._saveQuestion(question)
        .then((res)=>{
            dispatch(addQuestionToQuestions(res));
            dispatch(addQuestionToUsers(res.author,res.id));
        })
    }
} 