import React from 'react';
import ReactStars from 'react-stars';
//import styled from 'styled-components';

const ReviewCard = props => {
    const {review} = props;
    return (
        <div>
            <h2>{review.username}</h2>
            <ReactStars
                name="rating"
                value={review.rating}
                count={5}
                edit = {false}
                size={24}
                color2={'#ffd700'}
                half={true}
            />
            <p>{review.review}</p>
            
        </div>
    );
}
export default ReviewCard;