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
        </div>
      </div>
    );
  };
}

export default App;