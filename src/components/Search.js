import React from 'react';

export default class Search extends React.Component{

    render(){
        return(
            <div >
                <input className="search" type="text" placeholder="Search..." onChange={this.props.onSearch}/>
            </div>
        );
    }
}
