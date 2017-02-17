import React, {Component} from 'react';
import {connect} from 'react-redux';

// Render dito ng mga categories

class Category extends Component {
  render () {
    var {id, categoryName, icon, description} = this.props;
    return (
      <li onClick={() => {
        console.log(category.categoryName);
        this.props.selectedCategory(category.categoryName);
        }}
      >
        <p><i className={icon}></i>{description}</p>
        <br />
      </li>
    );
  }
}


export default connect()(Category);
