import React, {Component} from 'react';

class CategoryPage extends Component {
  render() {
    return (
      <h1>{this.props.params.categoryName}</h1>
    );
  }
};

export default CategoryPage;
