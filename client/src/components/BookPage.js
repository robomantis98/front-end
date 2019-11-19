import React, {useState, useEffect} from 'react';
import axios from "axios";
import {connect} from 'react-redux'; 
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Review from './Review'

const BookPage = props => {
  const [book, setBook] = useState([]);

  const deleteBook = (item) => {

  }
  
  useEffect(() =>{
    const getBooks = (props) => {
      axios
      .get(`/api/books/${props.item.id}`)
      .then(res => {
        setBook(res.data)
        console.log(res.data)
      })
      .catch(error => {
        console.log('Could not get data', error)
      })
    }
  })
    
      return (
        
        <div>
            I'm working
            <Review/>
        </div>
    );
}
const mapStateToProps = state => {
    return {};
}
export default connect(mapStateToProps,{/*actions*/})(BookPage);