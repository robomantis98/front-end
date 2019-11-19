import React, {useState} from 'react';
import {connect} from 'react-redux';
import {loginRequest} from '../actions'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faCheckSquare, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'; 
const element = <FontAwesomeIcon size="3x" icon={faBookOpen} />
const element1 = <FontAwesomeIcon size="3x" icon={faCheckSquare} />

const Center = styled.div`
    display: flex; 
    justify-content: center;
    

`
const Column = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 600px;
    height: 600px;
    box-shadow: 5px 5px 5px 5px grey;
    margin-bottom: 150px; 
    background-color: #ffeee2;
`
const Column2 = styled.div`
    margin-top: 50px;
    position: relative;
    left: -610px;
    width: 600px;
    height: 500px;
    box-shadow: 5px 5px 5px 5px grey;
    margin-bottom: 150px; 
`

const InputForm= styled.input`

    
    background-color: #d2bba0;
    border: 2px solid #9f7e69;
    margin-left: 10px; 
    width: 300px;
    height: 50px;
    margin-bottom: 150px;
    font-size: 1.5rem; 
    color: grey; 
`
const ElementIcon = styled.div`
    position: relative;
    top: 300px;
    left: -300px;
    marginLeft: -200px;
    margin-top: -50px;
    margin-bottom: -50px;
`
const ElementIcon1 = styled.div`
    position: relative;
    top: 150px;
    left: -300px;
    marginLeft: -200px;
    margin-top: -50px;
    margin-bottom: -50px;
`

const StyledForm = styled.form`
        display: flex; 
        flex-direction: column; 
        align-items: center;
        justify-content: space-around;
        margin-bottom: 100px;
        margin-top: 100px;
`

const StylButton = styled.button`
    position: relative;
    top: -100px;
    left: 10px;
    width: 100px;
    height: 70px;
    border-radius: .7rem;
    border: none 
    background-color: #d2bba0;
    font-size: 1.3rem;
    border: 2px solid #9f7e69;
    :active{
        margin-top:10px;
        margin-right: 10px;
    }

`

function Login(props){
    
      const [formData, setFormData] = useState(
        {
        username: "", 
        password: "",
        } 
    )
    const handleSubmit  = (event) => { 
        console.log('Logging In');
        event.preventDefault(); 
        props.loginRequest(formData);
    }


    

    const handleForm = (e) => {

        setFormData({...formData, [e.target.name]: e.target.value})
    }

    



    return (
        <Center>
            <Column>
                <h2 style={{marginTop:`150px` ,color: `#9f7e69`}}>Login</h2>
                <ElementIcon1 style={{color: `#9f7e69`}}>{element}</ElementIcon1>
                
                {/* onSumbit={submitLogin} */}
                <StyledForm onSubmit = {handleSubmit}>  
                   
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
                    <StylButton  type="submit">Submit</StylButton>
                </form>
            </Column>
        </Center>
    )
}
const mapStateToProps = state => {
    return {
        token: state.token,
        username: state.username,
        isAuthenticating: state.isAuthenticating
    };
}
export default connect(mapStateToProps,{loginRequest})(Login);