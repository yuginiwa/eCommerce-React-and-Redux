import React, {Component} from 'react';
import {Link} from 'react-router';

class Categories extends Component {
  render () {
    return (
      <div className="categories">
          <div className="row text-center">
              <div className="column small-6 medium-2">
                <Link to="/category/Computers">
                 <div className="categories-section">
                     <i className="fa fa-laptop"></i>
                     <p>Laptops &#38; Computers</p>
                 </div>
               </Link>
              </div>

              <div className="column small-6 medium-2">
                 <Link to="/category/Mobile-Phones">
                  <div className="categories-section">
                      <i className="fa fa-mobile"></i>
                      <p>Mobile Phones &#38; Tablets</p>
                  </div>
                 </Link>
              </div>

              <div className="column small-6 medium-2">
                 <Link to="/category/Home-Appliances">
                  <div className="categories-section">
                      <i className="fa fa-tv"></i>
                      <p>Home Appliances</p>
                  </div>
                 </Link>
              </div>

              <div className="column small-6 medium-2">
                 <Link to="/category/Mens-Accessories">
                  <div className="categories-section">
                      <i className="fa fa-male"></i>
                      <p>Men&#39;s Fashion &#38; Accessories</p>
                  </div>
                 </Link>
              </div>

              <div className="column small-6 medium-2">
                 <Link to="/category/Womens-Accessories">
                  <div className="categories-section">
                      <i className="fa fa-female"></i>
                      <p>Women&#39;s Fashion &#38; Accessories</p>
                  </div>
                 </Link>
              </div>

              <div className="column small-6 medium-2">
                 <Link to="/category/Services">
                  <div className="categories-section">
                      <i className="fa fa-wrench"></i>
                      <p>Services</p>
                  </div>
                 </Link>
              </div>
          </div>
      </div>
    );
  }
}

export default Categories;
