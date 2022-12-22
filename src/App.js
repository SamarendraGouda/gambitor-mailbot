import './App.css';
import logo from "./logo.svg";
import Form from './Components/Form/Form';

function App() {
  return (
    <div className="body">
      <div className="container">
        <div className="logo">
          <img className="gambitorlogo" src={logo} alt="" />
          <h3>GambitoR PR Mailing System</h3>
      </div>
      <Form />
      <p className='footer'>Made With &#9829; by Samarendra.</p>
    </div>
    </div>
  );
}

export default App;
