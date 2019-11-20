import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import axios from 'axios';
import Review from './Review';
import {deleteBook, loadBook} from '../actions';
import Book from './Book';

const BookPage = props => {
  
  const id = Number(props.match.params.id);
  const [reviews, setReviews] = useState([]);


  const {
    buttonLabel,
    className,
    book,
    isLoading,
    loadBook
  } = props;

  const [modal, setModal] = useState(false);
  

  const toggle = () => setModal(!modal);

  const removeBook = event => {
    props.deleteBook(props.book.id);
}

  useEffect(() =>{
    if (!isLoading && (!book  || book.id!=id)){
      loadBook(id);
    }
  },[book])

  return (

    <>

      {book? 
      <div>
        <div className='deleteButton' onClick={removeBook}><b>Delete</b></div>
        <div className='card-head'>
          <h2>{book.title}</h2>
        </div>
        <div className='card-body'>
            <h3>{book.author}</h3>
            <p>{book.description}</p>
        </div> 
      </div>: console.log(book)}
                


      <div>
        <Button color="danger" onClick={toggle}>Add Review</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
              
          <ModalHeader toggle={toggle}>What did you think of this book?</ModalHeader>

          <Review/>
                  
          <ModalFooter>
            {useEffect(()=> {
              axios
              .get(`https://bookr-bw-app.herokuapp.com/api/reviews/${id}`)
              .then(res =>{
                setReviews(res.reviews)
                console.log(res.reviews)
              })
              .catch(error =>{
                console.log('Data not fetched', error)
              })
            }),[]}
          </ModalFooter>
            
        </Modal>
      
      </div>
    </>
  );
}
const mapStateToProps = state => {
  return {
    book: state.currentBook,
    isLoading: state.isLoading
  }
}
export default connect(mapStateToProps,{deleteBook, loadBook})(BookPage);