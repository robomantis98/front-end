import React, {useEffect, useState} from 'react'; 
import { axiosWithAuth } from '../utils/axiosWithAuth';




function DisplayBooks() {
    const [books, setBooks] = useState([]);

    useEffect(() => { 

        axiosWithAuth()
        .get(`https://bookr-bw-app.herokuapp.com/api/books` )
        .then((res) => { 
            console.log(res); 
            setBooks(res.data);
        })
        .catch((err) => { 
            console.log("couldn't fetch data", err); 
        })
    },[])


    return (
        <div>
            <h2>List of All book titles</h2>
            {books.map((item) => { 
            return <div>{item.title}</div>
            })}
        </div>
    )
}
export default DisplayBooks;