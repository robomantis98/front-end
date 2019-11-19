import React, {useState} from 'react';
import {connect} from 'react-redux'; 



const Review = props => {

  const [newPost, setNewPost] = useState({
		name: "",
		email: "",
    book: "",
    review: ""
  })
  
  const submitForm = event => {
    event.preventDefault();

    const newPostReview = {
      ...newPost
    };

    props.addNewPost(newPostReview);
    setNewPost({ name: "", email: "", book: "", review: ""});
  };

  const changeHandler = event => {
    console.log(event.target.value);
    setNewPost({ ...newPost, [event.target.name]: event.target.value });
  };

    return (
      <div className="form-container">
			<h1>Book Reviews</h1>
			<form onSubmit={submitForm}>
				<label htmlFor="name">Name</label>
				<input 
					type="text" 
					name="name" 
					placeholder="Full Name"
					value={newPost.name}
          onChange={changeHandler}
          required
					/>
				<label htmlFor="email">Email</label>
				<input 
					type="text"
					name="email"
					placeholder="example@gmail.com"
					value={newPost.email}
					onChange={changeHandler}
					required
				/>
				<label htmlFor="role">Book</label>
				<input 
					type="text"
					name="role"
					placeholder="Book Name"
					value={newPost.book}
          onChange={changeHandler}
          required
				/>
        <label htmlFor="role">Review</label>
				<input 
					type="text"
					name="review"
					placeholder="Review"
					value={newPost.review}
          onChange={changeHandler}
          required
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
    );
}
const mapStateToProps = state => {
    return {};
}
export default connect(mapStateToProps,{/*actions*/})(Review);