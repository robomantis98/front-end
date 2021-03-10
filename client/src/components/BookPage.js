import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Modal, ModalHeader} from 'reactstrap';
import Review from './Review';
import {deleteBook, loadBook} from '../actions';
import styled from 'styled-components';
import ReviewCard from './ReviewCard';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const SingleBookContainer = styled.div`
border-bottom:2px solid grey;
margin:10px;
padding-bottom:20px;
display:flex;
flex-direction:row;
align-items:center;
`;

const SingleBookContent = styled.div`
display:flex;
flex-direction:column;
align-items:center;
height:100%;
`;

const Button = styled.div`
    border-radius: 4px;
    color: white;
    width: 200px;
    height: 50px;
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
const ReviewSection = styled.div`
  h1{
    border-bottom: grey 1px solid;
    padding-bottom: 15px;
    margin: 0 10px 10px;
  }
`;


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
      .get(`https://localhost:3000/api/reviews/${id}`)
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
            ?
            <SingleBookContainer>
              <div>
              <img src={book.image_url}/>
              </div>
                <SingleBookContent>
                  <h2>{book.title}</h2>
                  <h3>{book.author}</h3>
                  <p>{book.description}</p>
                  <Button className='green' onClick={toggle}>Add Review</Button>
                </SingleBookContent>
              </SingleBookContainer>
            : null
        }  


        <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>What did you think of this book?</ModalHeader>
            <Review book={book} toggle={toggle}/>
        </Modal>
        <ReviewSection>
          <h1>Reviews</h1>
        {reviews 
            ? reviews.map((review,index)=><ReviewCard key={index} review={review}/>)
            : 'no reviews'
          }
        </ReviewSection>
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