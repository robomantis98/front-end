import React, {useState} from 'react';
import {connect} from 'react-redux';
import {loginRequest, registerRequest} from '../actions'
import {Redirect} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { /*faCheckSquare,*/ faBookOpen } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
const element = <FontAwesomeIcon size="3x" icon={faBookOpen} />
// const element1 = <FontAwesomeIcon size="3x" icon={faCheckSquare} />


// const ElementIcon = Login.div`
//     position: relative;
//     top: 300px;
//     left: -300px;
//     marginLeft: -200px;
//     margin-top: -50px;
//     margin-bottom: -50px;
// `
const ElementIcon1 = styled.div`
    display:inline;
    margin-left: 10px;
    font-size: 10px;
    color: #9f7e69;
`

const LoginForm = styled.form`
    width: 95%;
    max-width: 700px;
    margin: 0 auto;
    background: #d2bba0;
    border: 3px solid #9f7e69;
    border-radius: 8px;
    display: flex;
    flex-direction: column; 
    justify-content: space-around;
    align-items: center;
    margin-bottom: 100px;
    margin-top: 50px;
    h2 {
        color: #9f7e69;
    }
`
const InputForm= styled.input`
    background-color: #eee;
    border: 2px solid #9f7e69;
    padding-left: 10px; 
    width: 300px;
    height: 50px;
    margin-bottom: 10px;
    font-size: 1.5rem; 
    color: grey; 
`
const Styledbutton = styled.button`
    width: 100px;
    height: 60px;
    margin: 10px;
    border-radius: .7rem;
    border: none 
    background-color: #eee;
    font-size: 1.3rem;
    border: 2px solid #9f7e69;
    :active{
        margin-top:10px;
        margin-right: 10px;
    }

`

const Login = props => {
    
    const [formData, setFormData] = useState(
        {username: "",password: ""} 
    )
    const handleLogin  = (event) => { 
        console.log('Logging In');
        event.preventDefault(); 
        props.loginRequest(formData);
    }

    const handleRegister  = (event) => { 
        console.log('Registering');
        event.preventDefault(); 
        props.registerRequest(formData);
    }

    const handleForm = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
        <LoginForm> 
            <h2>Login<ElementIcon1>{element}</ElementIcon1></h2>
            
            
            <InputForm
                name="username"
                type="text"
                placeholder= "Username"
                onChange = {handleForm}
            />
            
            <InputForm
                name="password"
                type="password"
                placeholder= "Password"
                onChange={handleForm}
            />
            <div className='wrapper'>
                <Styledbutton disabled={props.isAuthenticating} onClick={handleLogin}>Sign-In</Styledbutton>
                <Styledbutton disabled={props.isAuthenticating} onClick={handleRegister}>Sign-Up</Styledbutton>
            </div>
            {props.token? <Redirect to='/home'/>:null}

        </LoginForm>
    )
}
const mapStateToProps = state => {
    return {
        token: state.token,
        username: state.username,
        isAuthenticating: state.isAuthenticating
    };
}
export default connect(mapStateToProps,{loginRequest, registerRequest})(Login);