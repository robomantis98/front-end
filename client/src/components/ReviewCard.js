import React from 'react';
//import styled from 'styled-components';

const ReviewCard = props => {
    const {review} = props;
    return (
        <div>
            {review.user_id}
            {review.score}
            {review.review}
        </div>
    );
}
export default ReviewCard;