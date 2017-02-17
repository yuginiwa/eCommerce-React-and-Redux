import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectedCategory} from './../actions';

// Dito ang logic pag click ng category lalabas yung mga items dun sa right side ng pages.
// Example : Clicked Computer => render ang mga items na nasa computer

class CategoryList extends Component {
  renderCategories () {
    return this.props.categories.map((category) => {
      return (
        <li key={category.id} onClick={() => {
            console.log(category.categoryName);
            this.props.selectedCategory(category.categoryName);
            }}>
            <p><i className={category.icon}></i>{category.description}</p>
            <br />
        </li>
      );
    });
  }
  render () {
    return (
      <ul>
        Categories
        {this.renderCategories()}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({selectedCategory}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(CategoryList);
