import React from 'react';
import {connect} from 'react-redux'; 
const BookPage = props => {
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