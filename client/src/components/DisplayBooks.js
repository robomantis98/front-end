import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from "styled-components";

const ContainerCardDiv = styled.div`
border-bottom:2px solid grey;
margin:50px 50px;
padding: 50px;
display:flex;
justify-content: flex-start;
align-items:center;
`;

const TextDiv = styled.div`
display:flex;
justify-content: center;
flex-direction:column;
`;

function DisplayBooks(){

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axiosWithAuth()
    .get('http://172.105.156.24:3000/api/books')
    .then((res) => {
      console.log(res.data)
      setBooks(res.data)
    })
    .catch((error) => {
      console.log('couldnt fetch data', error)
    })
  },[])
  
  return(
    <div>
      {books.map(book => {
          return (
            <ContainerCardDiv
                key={book.id}>
                <img src={book.image_url} alt="Book cover image"/>
                <TextDiv>
                <h3>{book.title}</h3><br/>
                <h5>{book.author}</h5><br/>
                <h5>{book.description}</h5><br/>
                </TextDiv>
            </ContainerCardDiv>
          )
      })}
    </div>
  )
}

export default DisplayBooks;