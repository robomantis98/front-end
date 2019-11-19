import React, {useEffect, useState} from 'react';
// import BookData from '../BookData';
import {connect} from 'react-redux'; 
// import {faAmazon, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
// import { faBookReader} from '@fortawesome/free-solid-svg-icons'
// import styled from 'styled-components';
import {loadBooks} from '../actions';
import Book from './Book';

// const element = <FontAwesomeIcon size="3x" icon={faBookReader} />
// const element2 = <FontAwesomeIcon size="3x" icon={faAmazon} />
// const element3 = <FontAwesomeIcon size="3x" icon={faReact} />
// const element4 = <FontAwesomeIcon size="3x" icon={faNodeJs} />


// const Home2Card = styled.div`
     
//     width: 300px; 
//     height: 500px; 
//     box-shadow: 2px 5px 5px 2px grey; 


// `
// const Home1Card = styled.div`
//      height: 500px;
//      box-shadow: 2px 2px 5px 2px grey;


// `
// const Container1Card = styled.div`
//     margin-top: 50px; 
//     width: 200px;
//     display:flex;
//     flex-direction: column;
//     align-items: center;
//     justifyContent: space-around;


// `
// const Container2Card = styled.div`
//     margin-top: 50px; 
//     width: 300px


// `




// const Home1img = styled.img`
//     margin-top: 20px;
//     width: 100px 
//     objectFit: contain
//     objectPosition: bottom 
//     marginBottom: 30px        
//     paddingBottom: 50px

// `

// const Stylbutton = styled.button`
//     margin-top: 30px; 
//     border: 1px solid grey; 
//     border-radius: .5rem;
//     width: 130px; 
//     height: 50px; 
//     background-color: #ffeee2;
//     font-size: 1.7rem;

// `
// const Stylinput = styled.input`
//     margin-top: 30px; 
//     border: none; 
//     border-radius: .5rem;
//     width: 160px; 
//     height: 50px; 
//     background-color: #ffeee2;
//     font-size: 1.7rem;
//     focus: none;
    

// `
// const Icondiv = styled.div`
//     margin-top: 40px;
//     display: flex
//     justify-content: space-around
//     width:100%
//     textAlign: center
//     marginBottom:50px
// `

// const BottomLine = styled.div`
//     margin-top: 50px
//     margin-bottom: 50px 
//     background-color: #ffeee2
//     width: 100% 
//     height: 20px
// `
function Home(props) {
    const {books,isLoading,loadBooks} = props;
    const [search/*, setSearch*/] = useState("");
    // function handleChange(event) {
    //     setSearch(event.target.value);     
    // }
        
    useEffect(() => {if(books.length === 0 && !isLoading) {
        loadBooks()
    }}, [books,isLoading,loadBooks]);

    
    return (
        <div>
            
            {books.length !== 0 ? 
                books
                    .filter(book => search !== '' ? book.title.toLowerCase()===search.toLowerCase() : true )
                    .map((item,i)=><Book key={i} book={item}/>)
                : <h2>Loading...</h2>
            }
            {/* {searchbutton ? Search() : <Stylbutton className="SearchButton" onClick={() => setSearchButton(true)}>Search</Stylbutton>}
            {searchbutton === true && search === "" ?  <div><Stylbutton onClick={() => setSearchButton(false)} className="SearchButton" >Back</Stylbutton></div> : console.log('searching')} */}
            {/* {searchbutton ? 
                <div style={{display: `flex`, flexDirection: `row`, justifyContent: `space-around`, flexWrap:`wrap`}}>
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
                </div> 
                :
                <div style={{display: `flex`,flexDirection:`row`, flexWrap: `wrap`, marginTop: `20px`}}>
                    {BookData.map((item, index) => { 
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
                    })}
                    <Icondiv>
                        <div> {element2} </div>
                        <div> {element3} </div>
                        <div> {element4} </div>
                    </Icondiv>
                    <BottomLine></BottomLine>
                    <div style={{width: `100%`, textAlign: `center`,marginBottom:`50px`}}> @copyright </div>
                </div>    
            } */}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        books:state.books,
        isLoading:state.isLoading
    }
}
export default connect(mapStateToProps,{loadBooks})(Home);