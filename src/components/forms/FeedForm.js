import React, { Component } from 'react';

class FeedForm extends Component { 

    constructor(props) {
        super(props); 
    }

    /** function to set the added title's item first char to UpperCase,
    * it will be useful while sorting items alphabetically 
    **/
    capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    /** onSublit form 'add item' callback newItem function of 
    * parent component (Feed), which take as param item object of :
    * title : typed by user and getted by ref of input tag
    * description,
    * voteCount : by default 0
    **/
    handleForm = (e) => {
    	e.preventDefault(); 
 
    	var newItem  = {
    		title : this.capitalize(this.titleRef.value) ,
    		description : this.capitalize(this.descRef.value) ,
    		voteCount : 0
    	}

    	e.target.reset(); 
    	this.props.newItem(newItem);
    }

    render() {
        return (

        	<form 	ref={(FeedFormRef) => { this.FeedFormRef = FeedFormRef } }
        			id="FeedForm" 
        			onSubmit={this.handleForm} >
	        	<div className="form-group">
	        		<input 	ref= {(titleRef) => { this.titleRef = titleRef }  } 
	        				type="text" placeholder="Title" 
	        				className="form-control" />
	        		<input 	ref= {(descRef) => { this.descRef = descRef }} 
	        				type="text" placeholder="Description" 
	        				className="form-control" />
	        		<button type="submit" 
	        				className="btn btn-primary btn-block">
	        					Add
	        		</button>  
	        	</div>
        	</form>
            
        );
    }
} 

export default FeedForm;
