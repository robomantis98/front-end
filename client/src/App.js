import React from 'react';
import {Route, Link} from 'react-router-dom';
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
        
        <Link className = "BookrLinks" to = "/home"> Home </Link>
        <Link className = "BookrLinks" to="/login">Login</Link>{/**This needs to be log out if logged in*/}
        <Link className = "BookrLinks" to="/review">Reviews</Link>{/**This won't make sense with our flow */}
      </NavBookr>
    
      <Route path='/home' component={Home}/>
      <Route path='/login' component={Login} />
      <Route path='/login' component={Register} />
      <Route 
        path='/books/:id'
        render={props => <BookPage {...props}/>}
      />{/**Route convert to PrivateRoute */}
      <Route 
        path='/review/:id'
        render={props=><Review {...props}/>}
      />{/**Route convert to PrivateRoute */}
    </div>
  );
}

export default App;
