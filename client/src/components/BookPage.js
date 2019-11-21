import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Modal, ModalHeader} from 'reactstrap';
import Review from './Review';
import {deleteBook, loadBook} from '../actions';
import styled from 'styled-components';
import ReviewCard from './ReviewCard';
import {axiosWithAuth} from '../utils/axiosWithAuth';


const ContainerCardDiv = styled.div`
border-bottom:2px solid grey;
margin:50px 50px;
padding: 50px;
display:flex;
justify-content: flex-start;
align-items:center;
`;

const TextDiv = styled.div`
display:flex;
justify-content: center;
flex-direction:column;
`;

const Button = styled.div`
    border-radius: 4px;
    color: white;
    width: 110px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &.red {
        background: red;
    }
    &.green {
        background: green;
    }
    &.red:hover {
        background:pink;
    }
    &.green:hover {
        background:lightgreen;
    }
}
`


const BookPage = props => {

  const [reviews, setReviews] = useState(null);
  
    const id = Number(props.match.params.id);
    const {
        className,
        book,
        isLoading,
        loadBook,
        needUpdate
    } = props;

    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);

    const removeBook = () => {
        props.deleteBook(id);
    }

    useEffect(()=>{
        if(!isLoading && (!book || book.id != id))
        {
            loadBook(id)
        }
    
    },[id,book,isLoading])

    useEffect(() => {
      axiosWithAuth()
      .get(`https://bookr-bw-app.herokuapp.com/api/reviews/${id}`)
      .then((res) => {
          setReviews(res.data);
      })    

      .catch((err) => { 
          console.log("couldn't fetch data", err); 
      })
  },[id])

  return (

    <div className='book-page'>
        {book 
            ? <div>
        
                <div className='card-head'>
                    <h2>{book.title}</h2>
                </div>
                <div className='card-body'>
                    <h3>{book.author}</h3>
                    <p>{book.description}</p>
                    <Button className='green' onClick={toggle}>Add Review</Button>
                    <Button className='red' onClick={removeBook}>Delete</Button>
                </div> 
            </div>
            : null
        }  


        <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>What did you think of this book?</ModalHeader>
            <Review book={book} toggle={toggle}/>
        </Modal>
        {reviews 
            ? reviews.map((review,index)=><ReviewCard key={index} review={review}/>)
            : 'no reviews'
        }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    book: state.currentBook,
    isLoading: state.isLoading,
    needUpdate: state.needUpdate
  }
}
export default connect(mapStateToProps,{deleteBook, loadBook})(BookPage);