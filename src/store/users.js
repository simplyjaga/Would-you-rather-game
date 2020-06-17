
import produce from "immer";

// action types
const ADD_ANSWER='addAnswer';
const ADD_QUESTION='addQuestion';

//action creators
export const addAnswer=(authUser,questionId,option)=>({
    type:ADD_ANSWER,
    authUser,
    option,
    questionId
});


export const addQuestion=(authUser,questionId)=>({
  type:ADD_QUESTION,
  questionId,
  authUser
});


// reducers
export const users=(state={},action)=>{

    switch(action.type){

        case ADD_ANSWER:

            return produce(state,(draftState)=>{

               draftState[action.authUser].answers={
                ...draftState[action.authUser].answers,
                [action.questionId]:action.option
               }

            });

        case ADD_QUESTION:

            return produce(state,(draftState)=>{
                draftState[action.authUser].questions.push(action.questionId);
            });
        
        default:
            return state;
    }

}