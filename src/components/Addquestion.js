import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { addQuestionToStoreAndServer } from '../store/combinedActions';

class Addquestion extends Component{

    state={
        optionOne:'',
        optionTwo:''
    }

    setOptionOne=(e)=>{
        this.setState({
            optionOne:e.target.value
        })
    }

    setOptionTwo=(e)=>{
        this.setState({
            optionTwo:e.target.value
        })
    }
    
    addQuestion=()=>{
        const {dispatch,authUser}=this.props;
        const optionOne=this.state.optionOne;
        const optionTwo=this.state.optionTwo;
        if(optionOne.trim() !== '' && optionTwo.trim() !== ''){
            dispatch(addQuestionToStoreAndServer(authUser,optionOne,optionTwo));
        }
        this.setState({
            optionOne:'',
            optionTwo:''
        })
    }

    render(){
        const {authUser}=this.props;
        return(
        <div className='add-question-container'>
          <h4 className='tab-name'>Addquestion</h4>
          <div className="form-group">
            <label htmlFor="Option One">Option A</label>
            <textarea className="form-control" value={this.state.optionOne} onChange={this.setOptionOne} id="Option One" rows="2"></textarea>
            <label htmlFor="Option Two">Option B</label>
            <textarea className="form-control" value={this.state.optionTwo} onChange={this.setOptionTwo} id="Option Two" rows="2"></textarea>
          </div>
          <button className='btn  btn-success' onClick={this.addQuestion}><Link className='submit-btn' to={`/${authUser}`}>Submit</Link></button>
        </div> 
        );
    }
}


const mapStateToProps = (state)=>{
    return{
       authUser:state.authUser
    }
  }
  
  export default connect(mapStateToProps)(Addquestion);