import React, { Component } from 'react';

import FeedItem from './FeedItem';
class FeedList extends Component { 

    constructor(props) {
        super(props);
    }

    render() { 

        //foreach item on items return an new FeedItem component 
    	var items = this.props.items.map(item => { 
    		return <FeedItem 	keys={item.key}
    							title={item.title} 
    							desc={item.description}
    							vote={item.voteCount}
    							onVote={this.props.onVote}/>
    	})

        return (
        	<ul className="list-group">
        		{items}
        	</ul>
            
        );
    }
} 

export default FeedList;
