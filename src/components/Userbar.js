import React from 'react';
import {connect} from 'react-redux';
import { logOut } from '../store/authUser';
import { Link } from 'react-router-dom';

function Userbar(props){
    const {users,userId,dispatch}=props;

    const logOutUser=()=>{
        dispatch(logOut());
    }

    return(
    <div className='user-bar'>
        <div className='user-name'> {users[userId].name} </div>
        <h3 className='title'>Would You Rather ?</h3>
         <Link to='/' onClick={logOutUser} className='log-out'>Log Out</Link>
     </div>
    );
}

const mapStateToProps = (state)=>{
    return{
       users:state.users
    }
  }

export default connect(mapStateToProps)(Userbar);