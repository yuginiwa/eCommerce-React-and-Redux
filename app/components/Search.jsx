import React, {Component} from 'react';
import SearchResult from 'SearchResult';

class Search extends Component {
  onHandleSearch (e) {
    e.preventDefault();
       var searchText = this.refs.search.value;
       console.log(searchText);
  }
  render () {
    return (
      <div className="search-box row clearfix">
         <form className="search-bar column medium-centered medium-8" onSubmit={::this.onHandleSearch}>
            <i className="fa fa-search"></i>
            <input type="search" placeholder="search" ref="search" className="float-left" />
            <button className="search-button">Search</button>
         </form>
      </div>
    );
  }

}

export default Search;
