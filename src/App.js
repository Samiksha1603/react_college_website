import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import Navigation from './components/Navigation';
import Academics from './components/academics';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Homepage user = "Open Academics and Conatct Us Page in New Tab"/>
   
</div>
  );
}

export default App;
