import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'; 

const Book = props => {
    return (
        <div>
            <Link to={`/api/books/${props.book.id}`}>{props.book.title}</Link>
        </div>
    );
}
const mapStateToProps = state => {
    return {};
}
export default connect(mapStateToProps,{/*actions*/})(Book);