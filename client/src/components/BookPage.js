import React, {useState} from 'react';
import {connect} from 'react-redux'; 
import ReactStars from 'react-stars'



const BookPage = props => {
    
   


        const ratingChanged = (newRating) => {
            console.log(newRating)
          }
    return (
        <div>
            Hello
        </div>
    );
}
const mapStateToProps = state => {
    return {};
}
export default connect(mapStateToProps,{/*actions*/})(BookPage);