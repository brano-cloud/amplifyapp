import CCP from './ccp';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="grid-container">
      <div className="itemHeader">Header</div>
      <CCP className="itemMenu" />
      <div className="itemMain">Main</div>
      <div className="itemRight">Right</div>
      <div className="itemFooter">Footer</div>
    </div>
  );
}

export default App;
