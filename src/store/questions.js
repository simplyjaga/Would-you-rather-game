
import produce from "immer";

// action types
const ADD_ANSWER='addAnswerToQuestions';
const ADD_QUESTION='addQuestionToQuestions';

// action creators

export const addAnswerToQuestions=(authUser,option,questionId)=>({
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

// reducers


export const questions=(state={},action)=>{
    switch(action.type){

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
