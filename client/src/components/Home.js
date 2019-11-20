import React, {useEffect, useState} from 'react';
// import BookData from '../BookData';
import {connect} from 'react-redux'; 
// import {faAmazon, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
// import { faBookReader} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import {loadBooks} from '../actions';
import Book from './Book';
import { Jumbotron, Button } from 'reactstrap';
import bookrImg from './BookrJumbotron.jpg'

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
//      width: 250px;


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
const Homediv = styled.div`
    .book-list{
        width: 100%;
        display:flex;
        flex-direction:column;
        flex-wrap:no-wrap;
        align-items: center;
        justify-content: flex-start;
        @media screen and (min-width:767px){
            flex-direction:row;
            flex-wrap:wrap;
            justify-content: space-around;
            align-items: flex-start;
        }
    }
    
`;
const SearchBar = styled.input`
    font-size: 1.5rem;
    margin-top: 20px;
    padding: 5px;
    border-radius:5px;
`;
function Home(props) {
    const {books,needUpdate,isLoading,loadBooks} = props;
    const [search, setSearch] = useState("");
    function handleChange(event) {
        setSearch(event.target.value);     
    }
        
    useEffect(() => {if((books.length === 0 && !isLoading) || needUpdate) {
        loadBooks()
    }}, [books,needUpdate,isLoading,loadBooks]);

    
    return (
        <Homediv className='Home'>
            <Jumbotron style={{backgroundImage: `url(${bookrImg})`}}>
                <h1 className="display-3" style={{color:`#f7ffe0`}}>Bookr</h1>
                <p className="lead" style={{color:`#f7ffe0`}}>Take up a book with Bookr, we are sure you'll enjoy the read.</p>
                <hr className="my-2" />
                <p style={{color:`#f7ffe0`}}>Did you know there are about 129,864,880 books in the entire world!? Rent or Lend Books with Bookr</p>
                <p className="lead">
                <Button color="primary" style={{backgroundColor:`#9f7e69`, border: `none`}}>Learn More</Button>
                </p>
            </Jumbotron>
            <SearchBar type='text' placeholder='Search...' onChange={handleChange}/>
            <div className='book-list'>
                {books.length !== 0 ? 
                    books
                        .filter(book => search !== '' ? book.title.toLowerCase().includes(search.toLowerCase()) : true )
                        .map((item,i)=><Book key={i} book={item}/>)
                    : <h2>Loading...</h2>
                }
            </div>
            
        </Homediv>
    )
}
const mapStateToProps = state => {
    return {
        books:state.books,
        isLoading:state.isLoading,
        needUpdate:state.needUpdate
    }
}
export default connect(mapStateToProps,{loadBooks})(Home);