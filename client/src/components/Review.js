<<<<<<< HEAD
import React, {useState} from 'react';
=======
import React, {useEffect, useState} from 'react';
import {Button} from 'reactstrap';
>>>>>>> 419cb0c7aff84c665fe7e8914d3f6dc7d6159445
import {connect} from 'react-redux';
import styled from 'styled-components';
import {submitReview} from '../actions';
import ReactStars from 'react-stars';
// import { axiosWithAuth } from '../utils/axiosWithAuth';
const ReviewContainer = styled.div`
display:flex;
flex-direction:column;
  form .stars {
    width:30%;
    margin: 10px auto;
  }

`;
const Textbox = styled.textarea`
  width: 90%;
  height: 120px;
  margin: 0 5%;
  resize: none;
`
const Button = styled.div`
  background: #007bff;
  border: 2px solid #0059DD;
  border-radius: 10px;
  width: 20%;
  padding: 10px 0;
  color: white;
  text-align: center;
  margin: 10px auto;
  cursor: pointer;
  &:hover {
    background: #229DFF;
  }
`
const Review = props => {

  const [newPost, setNewPost] = useState({
		rating: 0,
    review: ""
  })
  
  const submitForm = event => {
    event.preventDefault();
    if(newPost.rating !== 0 && newPost.review !== "")
    {
      console.log(props.book.id);
      console.log(props.bookScores);
      //props.submitReview(
      //   {
      //     books_id:props.book.id, 
      //     rating:props.rating, 
      //     review:props.review
      //   }
      // );
      props.toggle();
    }
    


    setNewPost({ rating: 0, review: ""});
  };

  const changeHandler = event => {
    console.log(event.target.value);
    setNewPost({ ...newPost, [event.target.name]: event.target.value });
  };

  const ratingChanged = newRating => {
    setNewPost({...newPost,rating:newRating})
    console.log(newPost);
  }
   
    return (
      <ReviewContainer>
<<<<<<< HEAD
        <form>
            <ReactStars
              name="rating"
              className='stars'
              value={newPost.rating}
              count={5}
              onChange={ratingChanged}
              size={36}
              color2={'#ffd700'}
              half={false}
              required
            />
          <Textbox
            name="review"
            placeholder={`What did you think about "${props.book.title}"?`}
            value={newPost.review}
            onChange={changeHandler}
            required
          />
=======
			<form onSubmit={submitForm}>
				<label htmlFor="rating"/>
        <ReactStars
        name="rating"
        value={newPost.rating}
        count={5}
        onChange={ratingChanged}
        size={24}
        color2={'#ffd700'}
        half={true}
        required
        />
        
        <label htmlFor="review">Review</label>
				<input 
					type="textbox"
					name="review"
					placeholder="Review"
					value={newPost.review !=0 ? newPost.review : 3}
          onChange={changeHandler}
          required
				/>
>>>>>>> 419cb0c7aff84c665fe7e8914d3f6dc7d6159445

          <Button onClick={submitForm} >Submit</Button>{' '}
        </form>
      </ReviewContainer>
    );
}
const mapStateToProps = state => {
    return {
      currentBook: state.currentBook,
      bookScore: state.bookScores,
      reviews: state.reviews
    };
}
export default connect(mapStateToProps,{submitReview})(Review);