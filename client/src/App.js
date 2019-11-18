import React from 'react';
import {Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import BookPage from './components/BookPage';
import Review from './components/Review';

function App() {
  return (
    <div className="App">
      <Route path='/home' component={Home}/>
    </div>
  );
}

export default App;
