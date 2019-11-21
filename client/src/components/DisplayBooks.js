import React, {useEffect, useState} from 'react'; 
import { axiosWithAuth } from '../utils/axiosWithAuth';




function DisplayBooks() {
    
    const [books, setBooks] = useState([]);
    const [formula, setFormula] = useState([]);

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
     
    useEffect(() => {
        axiosWithAuth()
        .get(`https://bookr-bw-app.herokuapp.com/api/reviews/${2}`)
        .then((res) => {
            setFormula(res.data);
        })    

        .catch((err) => { 
            console.log("couldn't fetch data", err); 
        })
    },[books])
    console.log("formula is set: ", formula);

    function StarFormula(){
        let total = formula.reduce((acc, star) => acc + star.rating , 0);
        let median = total/formula.length;
        console.log("length", formula.length);
        return median;
    }
    return (
        <div>
            <h2>List of All book titles</h2>
            {books.map((item) => { 
            return <div>{item.title}</div>
            })}
            <h2>Aggregate Ratings</h2>
           
            {StarFormula()}
        </div>
    )
}
export default DisplayBooks;