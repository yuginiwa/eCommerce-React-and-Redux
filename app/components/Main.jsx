import React, {Component} from "react";

class Main extends Component {
  render(props) {
      return (
          <div className="wrapper">
                {this.props.children}
          </div>
      );
  };
}

export default Main;
