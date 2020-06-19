import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser } from '../store/authUser';

function Login(props){
  const {users,dispatch}=props;
  const usersIds=Object.keys(users);

  const setAuthUser=(event)=>{
    const id=event.target.getAttribute('value')
    dispatch(setUser(id));
  }

  return(
      <div >
             {usersIds.map((id)=>(
                 <Link to={`/${id}`} key={id} value={id} onClick={setAuthUser}> {users[id].name} </Link>
               ))}
      
       
      </div>
  );
}

const mapStateToProps = (state)=>{
    return{
       users:state.users
    }
  }
  
  export default connect(mapStateToProps)(Login);