import React, { Component } from 'react';

//import FeedItem from './FeedItem';
class SortFilter extends Component { 

    constructor(props) {
        super(props); 
        this.state = {
            filterActive : '1',
            sortActive : '0'
        }
    }

    handleSortBy = (e) => {    
        this.setState({
            sortActive : e.target.id
        });
        this.props.onSort(e.target.name)
    }

    handleFilterBy = (e) => {   
        this.setState({
            filterActive : e.target.id
        });  
        this.props.onFilter(e.target.name)
    }

    render() {  

        var btnClass = "btn btn-outline-info"; // class bootstrap
        var {filterActive, sortActive} = this.state

        return (
        	 
    		<div >
                <section className=" float-right " > 
                    <span > filtered by :  </span> 
                    <button id='2' name="vote+"  onClick={ this.handleFilterBy}
                            className={filterActive === '2' ? `${btnClass} active`  : `${btnClass}`}>  
                        vote +   
                    </button > <span > </span>
                    <button id='3' name="vote-"  onClick={this.handleFilterBy}  
                            className={filterActive === '3' ? `${btnClass} active`  : `${btnClass}`}>  
                        vote -  
                    </button ><span > </span>
                    <button id='1' name="all"  onClick={this.handleFilterBy}   
                            className={filterActive === '1' ? `${btnClass} active` : `${btnClass}`}>  
                        All  
                    </button >
                </section>
                <section > 
                    <span > sorted by : </span>
                     
                    <button id='1' name="voteCount" onClick={this.handleSortBy} 
                            className={sortActive === '1' ? `${btnClass} active` : `${btnClass}`}>  
                        Vote   
                    </button > <span > </span>
                    <button id='2' name="title"   onClick={this.handleSortBy}
                            className={sortActive === '2' ? `${btnClass} active` : `${btnClass}`}>
                        A-Z  
                    </button >
                </section> 
            </div>
            
        );
    }
} 

export default SortFilter;
