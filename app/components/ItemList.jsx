import React, {Component} from 'react';
import {connect} from 'react-redux';
import Item from 'Item';


// Render ng mga Items at i re render din dito ang items ng na clicked na categories
class ItemList extends Component {
  renderItemList () {
    var categoryName = this.props.activeCategory;
    if (!categoryName) {
      return this.props.items.map((item) => {
        return (
          <div key={item.id} className="small-4 columns">
              <img src={item.itemImg} />
              <p>Name: {item.itemName}</p>
              <p>Price: {item.price}</p>
              <p>Location: {item.location}</p>
              <p>Condition: {item.condition}</p>
          </div>
        )
      });
    }

    return this.props.items.filter((item) => {
      if (item.category === categoryName) {
        return (
          <div key={item.id} className="small-4 columns">
              <img src={item.itemImg} />
              <p>Name: {item.itemName}</p>
              <p>Price: {item.price}</p>
              <p>Location: {item.location}</p>
              <p>Condition: {item.condition}</p>
          </div>
        );
      } ;
    })
  }
  render() {
    return (
      <div>
        {this.renderItemList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    activeCategory: state.activeCategory
  }
};

export default connect(mapStateToProps)(ItemList);
