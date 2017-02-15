import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';


class MainNav extends Component {

  render() {
    return (
      <div className='mini-nav clearfix'>
          <li><IndexLink to='/'>Website Name</IndexLink></li>
          <ul className="float-right">
              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/register'>Register</Link></li>
          </ul>
      </div>
    );
  }

}

export default MainNav;
