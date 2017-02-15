import React, {Component} from 'react';

import MainNav from 'MainNav';
import Search from 'Search';
import Categories from 'Categories';
import Footer from 'Footer';


class Home extends Component {
  render() {
    return (
      <div>
         <MainNav/>
         <div className="logo row text-center">
             <div className="column medium-centered medium-3">
                 <i className="fa fa-grav"></i>
             </div>
         </div>
         <Search/>
         <Categories/>
         <Footer/>
      </div>
    );
  }
}

export default Home;
