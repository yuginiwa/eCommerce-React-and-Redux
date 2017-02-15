import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer columns small-6 right" data-sticky-container>
          <ul className="sticky" data-sticky data-stick-to="bottom">
              <li><a href="#">About</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Contact Us</a></li>
          </ul>
      </div>
    );
  }
}

export default Footer;
