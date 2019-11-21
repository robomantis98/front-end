import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'; 
import {faAmazon, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import styled from 'styled-components';
import {loadBooks} from '../actions';
import Book from './Book';
import { Jumbotron, Button } from 'reactstrap';
import bookrImg from './BookrJumbotron.jpg'

const element2 = <FontAwesomeIcon size="3x" icon={faAmazon} />
const element3 = <FontAwesomeIcon size="3x" icon={faReact} />
const element4 = <FontAwesomeIcon size="3x" icon={faNodeJs} />

const Icondiv = styled.div`
    margin-top: 40px;
    display: flex
    justify-content: space-around
    width:100%
    
    margin-bottom:150px
`
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
                <p style={{color:`#f7ffe0`}}>Did you know there are about 129,864,880 books in the entire world!? Review Books</p>
                <p className="lead">
                <Button color="primary" style={{backgroundColor:`#9f7e69`, border: `none`}}>Learn More</Button>
                </p>
            </Jumbotron>
            <SearchBar type='text' placeholder='Search...' onChange={handleChange}/>
            <div className='book-list'>
                { books.length !== 0 ? 
                    books.filter(book => search !== '' ? book.title.toLowerCase().includes(search.toLowerCase()) : true )
                        .map((item,i)=><Book key={i} book={item}/>)
                    : <h2>Loading...</h2>
                }
            </div>
            <Icondiv>{element2}{element3}{element4}</Icondiv>
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