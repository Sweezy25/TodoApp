import React from 'react';
import { connect} from 'react-redux';  
import { addtodo } from '../../actions'; 
  
const InputList = ({ dispatch }) => {  
  let input='';
  return (  
    <div style={{marginTop:"50px"}}>  
      <form onSubmit={e => {
        e.preventDefault();
        dispatch(addtodo(input.value)); 
        input.value = ''  
      }} className="container">  
        <div className="row">
            <input ref={node => input = node} className="formControl col-8" placeholder="Enter Task..."/>  
            <button type="submit" className="btn ml-1 btn-success col-2">  
            Add  
            </button> 
        </div> 
      </form>  
    </div>  
  )  
}  
export default connect()(InputList);  