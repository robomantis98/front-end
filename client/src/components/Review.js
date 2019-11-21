import React, {useState} from 'react';
import {Button} from 'reactstrap';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {submitReview} from '../actions';
import ReactStars from 'react-stars';

const ReviewContainer = styled.div`
border:2px solid red;
display:flex;
flex-direction:column;
`;

const Review = props => {

  const [newPost, setNewPost] = useState({
		rating: "",
    review: ""
  })
  
  const submitForm = event => {
    event.preventDefault();

    props.submitReview({books_id:props.currentBook, rating:props.rating, review:props.review});


    setNewPost({ rating: "", review: ""});
  };

  const changeHandler = event => {
    console.log(event.target.value);
    setNewPost({ ...newPost, [event.target.name]: event.target.value });
  };

  const ratingChanged = (newRating) => {
    console.log(newRating)
  }

    return (
      <ReviewContainer>
			<form onSubmit={submitForm}>
				<label htmlFor="rating"/>
        <ReactStars
        name="rating"
        value={newPost.rating}
        count={5}
        onChange={ratingChanged}
        size={24}
        color2={'#ffd700'}
        half={false}
        required
        />
        
        <label htmlFor="review">Review</label>
				<input 
					type="textbox"
					name="review"
					placeholder="Review"
					value={newPost.review !=0 ? newPost.review : 4}
          onChange={changeHandler}
          required
				/>

				<Button type="submit" color="primary" onClick={submitForm} >Submit</Button>{' '}
        <Button color="secondary" >Cancel</Button>
			</form>
      </ReviewContainer>
    );
}
const mapStateToProps = state => {
    return {
      currentBook: state.currentBook
    };
}
export default connect(mapStateToProps,{submitReview})(Review);