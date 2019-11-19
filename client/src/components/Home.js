import React, {useEffect, useState} from 'react';
import BookData from '../BookData';
import {connect} from 'react-redux'; 
import {faAmazon, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faBookReader} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import {loadBooks} from '../actions';
const element = <FontAwesomeIcon size="3x" icon={faBookReader} />
const element2 = <FontAwesomeIcon size="3x" icon={faAmazon} />
const element3 = <FontAwesomeIcon size="3x" icon={faReact} />
const element4 = <FontAwesomeIcon size="3x" icon={faNodeJs} />


const Home2Card = styled.div`
     
    width: 300px; 
    height: 500px; 
    box-shadow: 2px 5px 5px 2px grey; 


`
const Home1Card = styled.div`
     height: 500px;
     box-shadow: 2px 2px 5px 2px grey;


`
const Container1Card = styled.div`
    margin-top: 50px; 
    width: 200px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justifyContent: space-around;


`
const Container2Card = styled.div`
    margin-top: 50px; 
    width: 300px


`




const Home1img = styled.img`
    margin-top: 20px;
    width: 100px 
    objectFit: contain
    objectPosition: bottom 
    marginBottom: 30px        
    paddingBottom: 50px

`

const Stylbutton = styled.button`
    margin-top: 30px; 
    border: 1px solid grey; 
    border-radius: .5rem;
    width: 130px; 
    height: 50px; 
    background-color: #ffeee2;
    font-size: 1.7rem;

`
const Stylinput = styled.input`
    margin-top: 30px; 
    border: none; 
    border-radius: .5rem;
    width: 160px; 
    height: 50px; 
    background-color: #ffeee2;
    font-size: 1.7rem;
    focus: none;
    

`
const Icondiv = styled.div`
    margin-top: 40px;
    display: flex
    justify-content: space-around
    width:100%
    textAlign: center
    marginBottom:50px
`

const BottomLine = styled.div`
    margin-top: 50px
    margin-bottom: 50px 
    background-color: #ffeee2
    width: 100% 
    height: 20px
`

const Container1 = styled.div`
    display:flex
    flex-direction: row 
    justify-content: space-around
    flex-wrap:wrap
`

const Container2 = styled.div`

display: flex 
flex-direction: row 
justify-content: space-around;
flex-wrap: wrap 
margin-top: 20px
margin-bottom: 20px; 

`



function Home(props) {

    const [search, setSearch] = useState(""); 
    const [results, setResults] = useState([]);
    const [searchbutton, setSearchButton] = useState(0); 
    
        
        function handleChange(event) {
          
            
            setSearch(event.target.value); 
            
            
        }

        useEffect(() => { 
            if(props.books.length == 0 && !props.isloading){
                props.loadBooks()
                // axiosWithAuth();
                // .get('/api/books')
                // .then(response => { 
                //     console.log(response); 
                // })
                // .catch(err => {
                //     console.log(err);
                // })
            }
        })
        
        useEffect(() => {
            if(search !== ""){
                const output = BookData.filter((item) => { 
                    // console.log(search); 
                    return item.title.toLowerCase().includes(search.toLowerCase())
                });
                //console.log(output); 
                setResults(output); 
            } else if(search === "" || search === " "){
                // setSearchButton(false);  //uncomment this line to change to default search functionality.
                
                return setResults(BookData)
            }else if(handleChange === false){
                return setResults(BookData)
            }
        }, [search ])
       
        
        
    // console.log("search", search);
    function Search(){
        
        return(<Stylinput className="inputElement"
         
                type="text"
                value={search}
                onChange={handleChange}
                placeholder="   ..."
                />)
    }
    
    return (
        <div>
            
         
            {searchbutton ? Search() : <Stylbutton className="SearchButton" onClick={() => setSearchButton(true)}>Search</Stylbutton>}
            
                
            {searchbutton === true && search === "" ?  <div><Stylbutton onClick={() => setSearchButton(false)} className="SearchButton" >Back</Stylbutton></div> : console.log('searching')}
            {searchbutton ? 
                
                
                <Container1>
                    {/* props.books.length == 0 ? "loading" : props.books.map */}
                    {results.map((item, index) => { 
                        return (
                            <Container2Card key={index} >
                                
                                <Home2Card>
                                    
                                    {element}
                                    <h2 style={{width: `150`, fontSize: '1rem'}}>{item.title}</h2>
                                    <h3>{item.author}</h3>
                                    <h4>{item.price}</h4>
                                    <img style={{width: `175px`}}src={item.img} alt={item.title}></img>
                                    
                                </Home2Card>
                            </Container2Card>
                        )
                    })}
                </Container1> 
            :
                <Container2>
                    {BookData.map((item, index) => { 
                        //shows top results on front page
                        if(index <4 ){
                            return (
                                <Container1Card key={index}>
                                    {element}
                                    <Home1Card>
                                        <Home1img src={item.img}></Home1img>
                                        <h2 style={{height: `100px`,fontSize: '1rem'}}>{item.title}</h2>
                                        <h3>{item.author}</h3>
                                        <h4 style={{paddingBottom: `50px`}}>{item.price}</h4>
                                        
                                        
                                    </Home1Card>
                                    
                                </Container1Card>
                                
                            )
                        }
                    })}
                    <Icondiv>
                        <div> {element2} </div>
                        <div> {element3} </div>
                        <div> {element4} </div>
                    </Icondiv>
                    <BottomLine></BottomLine>
                    <div style={{width: `100%`, textAlign: `center`,marginBottom:`50px`}}> @copyright </div>
                </Container2>    
            }
                
            
        </div>
    )
}
const mapStateToProps = state => {
    return {
        books:state.books, isLoading:state.isLoading
    }
}
export default connect(mapStateToProps,{loadBooks})(Home);