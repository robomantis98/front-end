import React, {useState} from 'react';
import {Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import BookPage from './components/BookPage';
import Review from './components/Review';
import styled from 'styled-components'; 

const NavBookr = styled.div`
     width: 100%; 
     height: 100px; 
     background-color: #f7ffe0; 
     
     font-size: 1.8rem; 
     text-decoration: none; 
     display: flex; 
     justify-content: center;
     justify-content: space-around; 
     align-items: center; 

`

function App() {


    


  return (
    <div className="App">
      <NavBookr>
        
        <Link className = "BookrLinks"  to = "/"> Home </Link>
        <Link className = "BookrLinks" to="/login">Login</Link>
        <Link className = "BookrLinks" to="/review">Reviews</Link>
      </NavBookr>
      <Route exact path='/' component={Home}/>
      <Route path='/login' component={Login} />
      <Route path='/review' component={Review}/>
      
    </div>
  );
}

export default App;
