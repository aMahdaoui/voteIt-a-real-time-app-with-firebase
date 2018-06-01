import React, { Component } from 'react';
import _ from 'lodash';
 
import ShowAddButton from './ShowAddButton';
import FeedForm from './forms/FeedForm';
import FeedList from './FeedList';  
import SortFilter from './SortFilter';  
import '../css/bootstrap.min.css';


class Feed extends Component { 

    constructor(props) {
        super(props);
        this.state = {
        	sortedBy : 'notSorted',
        	filter : 'all',
        	items : [
        		{key:'1', title:'RealTimeData', description: 'FireBase is cool', voteCount:'48'},
        		{key:'4', title:'React JS is Awesome', description: 'Most beautiful UI library', voteCount:'60'},
        		{key:'3', title:'Coffe make u awake', description: 'Drink responsibly', voteCount:'-5'},
        		{key:'2', title:'Java script is Fun', description: 'Lexical scoping FTW', voteCount:'58'},
        	],
        	formDisplayed : false, 	 
        }
    }

    // click add new item button add item form will be display and the button 
    // click again it disapair
    onToggleForm = () =>  
        	this.setState({
        		formDisplayed : !this.state.formDisplayed 
        	});


    // add item to array when end user submit form Add new item
    onNewItem = (newItem) =>{
    			let {sortedBy} = this.state ;
        		newItem.key = this.state.items.length+1;
            	this.setState({ 
            		items : [...this.state.items, newItem ],
            		formDisplayed : false , 
            		filter : ''
            	}, 
            	() => {  this.ItemsSortedBy(sortedBy) } );
    };

    // handle onClick vote Up/Down button 
   	onVote = (item) => { 
   		//we use lodash library to get all uniq items of state and 
   		//get selected (voted Up/Down) item based on item key
		var items = _.uniq(this.state.items);
		var index = _.findIndex(
						items, 
						(feedItems) => feedItems.key === item.key 
		)    
		// splice function allows  to replace easily the old item 
		// by the new voted item basically it is the same exect that 
		// the voteCount should be updated according to the clicked 
		// vote button Up/Down
		items.splice(index, 1, item);  
 		
 		let {sortedBy} = this.state ; 
 		//update items and keep sorted list as it is before
		this.setState({items}, () => {  this.ItemsSortedBy(sortedBy) }) ;
    }

    // handle on click sorted by buttons 
	handleSortedBy = (sortedBy) => {   
		this.setState({sortedBy},this.ItemsSortedBy(sortedBy)) ;  
	}; 

	/**
	*make items sorted by param type
	*@ sortedBy : sort based creteria can be voteCount or title A-Z 
	*/
	ItemsSortedBy = (sortedBy) => {  
		var newItems = _.uniq(this.state.items);

		// use lodash to sorting state's items accourding to param sortedBy
		sortedBy === "voteCount" ?
 		newItems = _.orderBy(newItems,sortedBy,'desc') :
 		newItems = _.orderBy(newItems,sortedBy,'asc') 

		this.setState({items : newItems }) ; 
	}

	//handle onclick filter buttons 
	handleFilter = (filter) => {  
		this.setState({filter}); //ES6 best practice {filter : filter}  
	};
 	
 	//filter items by filter after click handleFilter button 
	ItemsFilterBy = (filter) => {  
		let newItems = this.state.items;
		if ( filter == 'vote+' ) 
    		newItems = _.filter(newItems, function(o) { return parseInt(o.voteCount,10) > 0;});
    	
    	else if (filter == 'vote-')
    		newItems = _.filter(newItems, function(o) { return parseInt(o.voteCount,10) <= 0;});
 
    	return newItems ;  
	}


    render() { 

    	let {formDisplayed,filter} = this.state ; 
    	// ES6 format, ===  let fillter = this.state.filter

    	// Apply filter before render items if filter state has been changed
    	// else all items will be rendred
    	const items = this.ItemsFilterBy(filter) ; 
    	
	    return (

	    	<div style={{marginTop : 120 }} className="container"> 

	    		<ShowAddButton 	onToggleForm={this.onToggleForm} 
	    						displayed = {formDisplayed} 
	    		/>

	    		{formDisplayed ? <FeedForm newItem={this.onNewItem}/> : null}  
	    		
	    		<br />
	    		<br /> 
	    		<div className="  btn-block   "> 
	    			<SortFilter onSort={this.handleSortedBy} 
	    			 			onFilter={this.handleFilter}/>
	    		</div>
		          
				<FeedList 	items={items} 
							onVote={this.onVote} /> 
	    		 
	    	</div> 
	    );
	};
 

/*Feed.propTypes = {
    className: PropTypes.string,
};*/
}
export default Feed;
