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
    height: 500px;
    box-shadow: 5px 5px 5px 5px grey;
    margin-bottom: 150px; 
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
   
    margin-left: 120px; 
    width: 300px;
    height: 50px;
    margin-bottom: 150px;
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
    top: 50px;
    left: -300px;
    marginLeft: -200px;
    margin-top: -50px;
    margin-bottom: -50px;
`
const ElementIcon2 = styled.div`
    position: relative;
    top: 200px;
    marginLeft: -200px;
    margin-top: -50px;
    margin-bottom: -50px;
`


function Login(props){
    // const [loginPosts, setLoginPosts] = useState({username: "", password: ""}); 
    // console.log("Props: ",props)

      const [formData, setFormData] = useState([
        {
        username: "", 
        password: "",
        } 
    ])
    const handleSubmit  = (event) => { 
        event.preventDefault(); 
        loginRequest(formData);
    }


    // const submitLogin = (e) => {
    //     e.preventDefault()
    //     props.addNewPost(loginPosts)
    //     console.log("onSubmit", loginPosts)
    // }

    const handleForm = (e) => {

        setFormData({...formData, [e.target.name]: e.target.value})
    }

    // const changeLogin = (e) => {

    //     setLoginPosts({e.target.value})
    // }
    
    // console.log(loginPosts);



    return (
        <Center>
            <Column>
                <h2>Login</h2>
                <ElementIcon1>{element}</ElementIcon1>
                <ElementIcon>{element}</ElementIcon>
                {/* onSumbit={submitLogin} */}
                <form onSubmit = {handleSubmit}>  
                    <label >Username</label>
                    <input
                    
                    name="username"
              
                    type="text"
                    placeholder= "Username"
                    onChange = {handleForm}
                    />
                    <ElementIcon2>{element1}</ElementIcon2>
                    <label >password</label>
                    <input
                    
                    name="password"
                    type="password"
                
                    placeholder= "Password"
                    onChange={handleForm}
                    />
                    <button type="submit">Submit</button>
                </form>
            </Column>
            <Column2>
            </Column2>
            
        </Center>
    )
}

// export default Login; 
const mapStateToProps = state => {
    return {username: state.username, token: state.token};
}
export default connect(mapStateToProps,{loginRequest})(Login);