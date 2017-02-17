import React, {Component} from 'react';

import CategoryList from 'CategoryList';
import ItemList from 'ItemList';

class CategoryPage extends Component {

  render() {
    return (
      <div>
        <p>Logo</p>
        <p>Search Box</p>
        <hr/>

        <div className='row'>
          <div className='small-2 columns'>
            <CategoryList/>
          </div>

          <div className='small-10 columns'>
            <div className="row">
              <ItemList/>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CategoryPage;
