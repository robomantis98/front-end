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
    const [search, setSearch] = useState("");
    function handleChange(event) {
        setSearch(event.target.value);     
    }
        
    useEffect(() => {if(books.length === 0 && !isLoading) {
        loadBooks()
    }}, [books,isLoading,loadBooks]);

    
    return (
        <div className='Home'>
            <input type='text' placeholder='Search...' onChange={handleChange}/>
            {books.length !== 0 ? 
                books
                    .filter(book => search !== '' ? book.title.toLowerCase().includes(search.toLowerCase()) : true )
                    .map((item,i)=><Book key={i} book={item}/>)
                : <h2>Loading...</h2>
            }
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