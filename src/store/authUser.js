// action types

const AUTH_USER ='authoriseUser';
const LOG_OUT='logOutCurrentUser';

// action creators

export const setUser=(userId)=>{
    return{
        type:AUTH_USER,
        userId
    }
}

export const logOut=()=>{
    return{
        type:LOG_OUT
    }
}

//reducers

export const authUser=(state='',action)=>{
    switch(action.type){
        case AUTH_USER:
            return action.userId;
        case LOG_OUT:
            return '';
        default:
            return state;
    }

} 