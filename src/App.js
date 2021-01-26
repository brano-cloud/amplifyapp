import CCP from './ccp';
import logo from './logo.svg';
import './App.css';
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
  }

  openURL = async (url) => {
    window.open(url);
  }

  render() {
    return (
      <div>
        <div className="container">
          <CCP className="myccp" openURL={(url) => this.openURL(url)} />
        </div>
      </div>
    );
  };
}

export default App;