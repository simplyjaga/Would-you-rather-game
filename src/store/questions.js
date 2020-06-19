import * as API from '../_DATA';
import produce from "immer";

// action types
const ADD_ANSWER='addAnswerToQuestions';
const ADD_QUESTION='addQuestionToQuestions';
const ADD_INITIAL_DATA='addInitialDataToquestions';

// action creators

export const addAnswerToQuestions=(authUser,questionId,option)=>({
    type:ADD_ANSWER,
    authUser,
    option,
    questionId
})


export const addQuestionToQuestions=(question)=>({
    type:ADD_QUESTION,
    questionId:question.id,
    question
})

export const addInitialDatatoquestions=(questions)=>({
    type:ADD_INITIAL_DATA,
    questions
})

// async  action

export const getQuestions=()=>{

    return function(dispatch){
        return API._getQuestions()
               .then((res)=>{
                   dispatch(addInitialDatatoquestions(res));
               })
    }

}

// reducers


export const questions=(state={},action)=>{
    switch(action.type){

        case ADD_INITIAL_DATA:
            return action.questions;

        case ADD_ANSWER:
           return produce(state,(draftState)=>{
               draftState[action.questionId][action.option].votes.push(action.authUser);
           });

        case ADD_QUESTION:
            return{
                ...state,
                [action.questionId]:action.question
            }

        default:
            return state;
    }
}
