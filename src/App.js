import CCP from './ccp';
import logo from './logo.svg';
import './App.css';
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputLabel01: "label",
      inputValue01: "value"
    }
  }

  handleOpenUrl = (url) => {
    window.open(url);
  }

  handleAttrs = (attributeMap) => {
    this.setState({ inputLabel01: "testAttr", inputValue01: attributeMap.testAttr.value });
  }

  render() {
    return (
      <div>
        <div className="container">
          <CCP
            className="myccp"
            handleOpenUrl={() => this.handleOpenUrl}
            handleAttrs={() => this.handleAttrs}
            testString={this.state.test}
          />
          <div className="inputLabels">
            <input value={this.state.inputLabel01} readOnly />
          </div>
          <div className="inputValues">
            <input value={this.state.inputValue01} readOnly />
          </div>
        </div>
      </div>
    );
  };
}

export default App;