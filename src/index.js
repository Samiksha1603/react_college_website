import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Academics from './components/academics';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import Homepage from './components/Homepage';
import Contact from './components/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        
      
        <Routes>
        <Route exact path='/' element={<App/>} />
              <Route exact path='/home' element={<Homepage/>} />
              <Route exact path='/Academics' element={<Academics/>} />

              <Route exact path='/Contact' element={<Contact/>} />
              </Routes>
              
              </Router> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
