import React, { Component } from 'react';

class FeedItem extends Component { 

    constructor(props) {
        super(props);
    }

    /** handle onClick event  button to vote up/down an item to calculate 
    * new countVote value according to clicked button type increment/decrement
    * then call  vote () function to update item on state.
    **/
    handleVote = (e) => {
    	e.preventDefault();
    	let newCount;
    	let voteCount = parseInt(this.props.vote,10);
    	let voteType =  e.target.id ;
    	voteType === 'up' ? newCount=voteCount+1 : newCount=voteCount-1 ;
 
    	this.vote(newCount);

    }

    /** this function is for accomplish callback onVote of parent
    * component (Feed), which update the state with new appropriate value
    * passed as a param : newCount
    **/
    vote = (newCount) => {  
        	this.props.onVote({
        		key : this.props.keys ,
        		title : this.props.title,
        		description : this.props.desc,
        		voteCount : newCount 
        	});
    }
    render() {

        // assign a color inside className property of span tag 
        // (see bootstrap color types)
        // swich vote value : 
        //0=>warning(yellow), >0 =>success(green), <= 0 =>danger(red)
    	var color = this.props.vote > 0 ? 
				"badge badge-success float-right" : 
				this.props.vote === 0 ?
					"badge badge-warning" :
					"badge badge-danger"
        return (
        	<div>
	        	 
	        	<li key={this.props.keys} className="list-group-item">
	        		<span   className={`float-right ${color}`} >{this.props.vote}</span>
	        		<h4> {this.props.title} </h4>
	        		<span >{this.props.desc} </span>
	        		<span className="float-right">
	        			<button id="up" 
	        					className="btn btn-primary btn-sm"
	        					onClick={this.handleVote}  >&uarr;</button>
	        			&nbsp;
	        			<button id="down"
	        					className="btn btn-primary btn-sm"
	        					onClick={this.handleVote}>&darr;</button>
	        		</span> 

	        	</li>
            </div>
        );
    }
} 

export default FeedItem;
