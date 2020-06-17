// action types

const AUTH_USER ='authoriseUser';

// action creators

export const setUser=(userId)=>{
    return{
        type:AUTH_USER,
        userId
    }
}

//reducers

export const authUser=(state='',action)=>{
    switch(action.type){
        case AUTH_USER:
            return action.userId;
        default:
            return state;
    }

} 