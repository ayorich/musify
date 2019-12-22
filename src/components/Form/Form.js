import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import * as actions from '../../store/actions/index';

import './Form.css';


class Form extends Component {
 state={
     value: '',
     disabled: true
 }

 inputChangeHandler = (event) => {
     this.setState({value:event.target.value, disabled:false})
 }
 searchHandler = () => {
   this.props.onsearchLoading({spinnerLoading:true});
  this.props.onsearchData(this.state.value)
 }
render(){
    return (
      <div className="Form">
        <Input
          value={this.state.value}
          placeholder="Search over 1,000,000 musics..."
          onChange={(event) => this.inputChangeHandler(event)}
        />
        <Button onClick={() => this.searchHandler() }
          className='btn'
        disabled={this.state.disabled} 
        >
          Search
        </Button>
      </div>
    );
}
    
};


const mapDispatchToProps = dispatch => {
    return {
      onsearchData: userInput => dispatch(actions.searchData(userInput)),
      onsearchLoading: spinnerLoading =>
        dispatch(actions.searchLoading(spinnerLoading))
    };
}
export default connect(null, mapDispatchToProps)(Form);