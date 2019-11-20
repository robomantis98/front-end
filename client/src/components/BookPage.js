import React, {useState} from 'react';
import {connect} from 'react-redux'; 
import ReactStars from 'react-stars'



const BookPage = props => {
    
   


        const ratingChanged = (newRating) => {
            console.log(newRating)
          }
    return (
        <div>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={50}
                color2={'#ffd700'}
                half={false} />

            
        </div>
    );
}
const mapStateToProps = state => {
    return {};
}
export default connect(mapStateToProps,{/*actions*/})(BookPage);