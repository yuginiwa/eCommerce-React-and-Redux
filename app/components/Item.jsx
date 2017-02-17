import React, {Component} from 'react';
import {connect} from 'react-redux';

// Render dito ng mga categories

class Item extends Component {
  render () {
    var {id, itemName, condition, price, location, itemImg} = this.props;
    return (
      <div className="small-4 columns">
          <img src={itemImg} />
          <p>Name: {itemName}</p>
          <p>Price: {price}</p>
          <p>Location: {location}</p>
          <p>Condition: {condition}</p>
      </div>
    );
  }
}


export default connect()(Item);
