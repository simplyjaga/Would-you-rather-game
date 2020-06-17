
import produce from "immer";

// action types

const INITIAL_DATA='setInitialUsersData';
const ADD_ANSWER='addAnswer';
const ADD_QUESTION='addQuestion';

//action creators
export const addAnswer=(authUser,questionId,option)=>({
    type:ADD_ANSWER,
    authUser,
    option,
    questionId
});

export const setInitialData = (state)=>({
   type:INITIAL_DATA,
   state
});

export const addQuestion=(authUser,questionId)=>({
  type:ADD_QUESTION,
  questionId,
  authUser
});

// reducers

export const users=(state={},action)=>{

    switch(action.type){
        case INITIAL_DATA:
            return action.state;

        case ADD_ANSWER:

            return produce(state,(draftState)=>{

               draftState[action.authUser].answers={
                ...draftState[action.authUser].answers,
                [action.questionId]:action.option
               }

            });

        case ADD_QUESTION:

            return produce(state,(draftState)=>{
                draftState[action.authUser].questions.push(action.question.id);
            });
        
        default:
            return state;
    }

}