import CCP from './ccp';
import logo from './logo.svg';
import './App.css';
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'blablabla'
    }
  }

  handleOpenUrl = (url) => {
    window.open(url);
  }

  render() {
    return (
      <div>
        <div className="container">
          <CCP
            className="myccp"
            handleOpenUrl={this.handleOpenUrl}
            testString={this.state.test}
          />
          <div className="inputLabels">
            <input value={this.state.inputLabel01} readOnly />
          </div>
          <div className="inputValues">
            <input value={this.state.inputValuel01} readOnly />
          </div>
        </div>
      </div>
    );
  };
}

export default App;