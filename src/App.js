import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/Navbar";
library.add(faStroopwafel, faBars);

class App extends Component {
  render() {
    return (
      <div>
        <Navbar navbarContents={["Home", "About", "Testimonials", "Contact"]} />
      </div>
    );
  }
}

export default App;
