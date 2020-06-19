import * as API from '../_DATA';
import produce from "immer";

// action types
const ADD_ANSWER='addAnswerToUsers';
const ADD_QUESTION='addQuestionToUsers';
const ADD_INITIAL_DATA='addInitialDataToUsers';

//action creators
export const addAnswerToUsers=(authUser,questionId,option)=>({
    type:ADD_ANSWER,
    authUser, 
    option,
    questionId
});


export const addQuestionToUsers=(authUser,questionId)=>({
  type:ADD_QUESTION,
  questionId,
  authUser
});

export const addInitialDataToUsers=(users)=>({
    type:ADD_INITIAL_DATA,
    users
})

// async action

export const getUsers=()=>{
     return (dispatch)=>{
          return API._getUsers()
                .then((res)=>{
                    dispatch(addInitialDataToUsers(res));
                })
     }
}

// reducers


export const users=(state={},action)=>{

    switch(action.type){

        case ADD_INITIAL_DATA:
            return action.users;

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