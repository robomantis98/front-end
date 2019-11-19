import React from 'react';
import {connect} from 'react-redux'; 
const Book = props => {
    return (
        <div>
            {props.book.title}
        </div>
    );
}
const mapStateToProps = state => {
    return {};
}
export default connect(mapStateToProps,{/*actions*/})(Book);