import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarIsActive: false
    };
  }

  onClick = e => {
    this.setState(prevSate => ({
      ...prevSate,
      navbarIsActive: !prevSate.navbarIsActive
    }));
  };

  componentDidUpdate() {
    console.log(this.state);
  }
  render() {
    const hamburgerClasses = classNames({
      "hamburger-contents": true,
      "hamburger-contents__active": this.state.navbarIsActive
    });
    return (
      <nav className="navbar">
        <div className="hamburger">
          <FontAwesomeIcon onClick={this.onClick} icon="bars" />
          <ul className={hamburgerClasses}>
            {this.props.navbarContents.map((navbarItem, index) => {
              return <li key={index}>{navbarItem}</li>;
            })}
          </ul>
        </div>
      </nav>
    );
  }
}
