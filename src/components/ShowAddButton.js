import React, { Component } from 'react';

//import FeedItem from './FeedItem';
class ShowAddButton extends Component { 

    constructor(props) {
        super(props);
    }

    render() { 
        var button , className
        if (this.props.displayed) {
            className = 'btn btn-warning btn-block';
            button = 'cancel';
        } else {
            className = 'btn btn-success btn-block';
            button = 'Create New Item !';
        }


        return (
        	 
    		<button className={className}
                    onClick={this.props.onToggleForm} >
                    {button} 
            </button>
        	 
            
        );
    }
} 

export default ShowAddButton;
