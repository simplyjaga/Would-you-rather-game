import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser } from '../store/authUser';
import LoadingBar from 'react-redux-loading-bar';

function Login(props){
  const {users,dispatch,fetching}=props;
  const usersIds=Object.keys(users);

  const setAuthUser=(event)=>{
    const id=event.target.getAttribute('value')
    dispatch(setUser(id));
  }

  return(
         <div>
          {fetching === 1 ?  <LoadingBar /> :
            <div className='login-page'>
                <div className='login-div'>
                      <h3 className='welcome-note'>Welcome Back !</h3>
                        {usersIds.map((id)=>(
                            <Link to={`/${id}`} key={id} value={id} onClick={setAuthUser} className='user-login-link'> {users[id].name} </Link>
                          ))}
                </div>
            </div>
          }
         </div>  
  );
}

const mapStateToProps = (state)=>{
    return{
       users:state.users,
       fetching:state.loadingBar.default
    }
  }
  
  export default connect(mapStateToProps)(Login);