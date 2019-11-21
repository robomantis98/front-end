import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {deleteBook} from '../actions';
import ReactStars from 'react-stars';
import { axiosWithAuth } from '../utils/axiosWithAuth';
const BookCard = styled.div`
    width: 95%;
    max-width:500px;
    padding: 5px;
    border: 1px solid #000;
    margin: 20px 3px;
    box-shadow: 2px 2px 8px #444;
    .deleteButton {
        position: relative;
        left: 91.2%;
        background: #D88;
        border: 1px solid #C77;
        width: 40px;
        height: 40px;
        border-radius: 20px;
        font-weight: bold;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &:hover {
            background:red;
        }
    }
    .star {
      text-align:center;
      margin: 0 35%;
    }
`       
const ratingChanged = (newRating) => {
    console.log(newRating)
  }
const Book = props => {
    
    const removeBook = event => {
        props.deleteBook(props.book.id);
    }
    
  
  const [formula, setFormula] = useState([]);
  useEffect(() => {
        axiosWithAuth()
        .get(`https://bookr-bw-app.herokuapp.com/api/reviews/${props.book.id}`)
        .then((res) => {
            setFormula(res.data);
        })    

        .catch((err) => { 
            console.log("couldn't fetch data", err); 
        })
    },[props.book.id])
    console.log("formula is: ", formula);

    function StarFormula(){
        let total = formula.reduce((acc, star) => acc + star.rating , 0);
        let median = total/formula.length;
        console.log("length", formula.length);
        return median;
    }
    
    return (
        
            <BookCard>
                
                    <div className='deleteButton' onClick={removeBook}><b>X</b></div>
                    <div className='card-head'>
                        <Link to={`/books/${props.book.id}`}><h2>{props.book.title}</h2></Link>
                        <img src={props.book.image_url}/>
                    </div>
                    <div className='card-body'>
                    <ReactStars className="star"
                        name="rating"
                        value={StarFormula()}
                        count={5}
                        onChange={ratingChanged}
                        edit = {false}
                        size={32}
                        color2={'#ffd700'}
                        half={true}
                        required
                    />
                        <h3>{props.book.author}</h3>
                        <p>{props.book.description}</p>
                    </div>
                
            </BookCard>
    );
}
const mapStateToProps = state => {
    return {};
}
export default connect(mapStateToProps,{deleteBook})(Book);