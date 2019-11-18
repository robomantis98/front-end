import React, {useEffect, useState} from 'react';
import BookData from '../BookData';
import {connect} from 'react-redux'; 
import {faAmazon, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
// import {faNode} from '@fortawesome/free-regular-svg-icons'
import { faBookReader} from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon size="3x" icon={faBookReader} />
const element2 = <FontAwesomeIcon size="3x" icon={faAmazon} />
const element3 = <FontAwesomeIcon size="3x" icon={faReact} />
const element4 = <FontAwesomeIcon size="3x" icon={faNodeJs} />
function Home() {
    // const [Home, setHome] = useState(BookData);
    const [search, setSearch] = useState(""); 
    const [results, setResults] = useState([]);
    const [searchbutton, setSearchButton] = useState(0); 
    
    
        // const handleChange = (event) => {
        //     setSearch(event.target.value);
        //     if (search != ""){
        //         const input = Home.filter((item) => {
        //         return item.title.toLowerCase().includes(search.toLowerCase())
        //         })
        //         setResults(input); 
        //     } else if(search === ""){
        //         setResults([]); 
        //         // setSearchButton(true);
        //     }  
        // }
        
        function handleChange(event) {
            // let inputElement = event.target.attributes.getNamedItem('inputElement').value
            
            setSearch(event.target.value); 
            
            
        }
        
        useEffect(() => {
            if(search !== ""){
                const output = BookData.filter((item) => { 
                    console.log(search); 
                    return item.title.toLowerCase().includes(search.toLowerCase())
                });
                console.log(output); 
                setResults(output); 
            } else if(search === "" || search === " "){
                setSearchButton(false);
                // return setResults([])
                return setResults(BookData)
            }else if(handleChange === false){
                return setResults(BookData)
            }
        }, [search ])
       
        
        
    console.log("search", search);
    function Search(){
        // search ? search : setSearch(" ");
        return(<input className="inputElement"
                // {search ? search : setSearch(" ")}
                type="text"
                value={search}
                onChange={handleChange}
                />)
    }
    
    return (
        <div>
            
            {/* <button onClick={() => setSearchButton(true)}>Search</button> */}
            {searchbutton ? Search() : <button className="SearchButton" onClick={() => setSearchButton(true)}>Search</button>}
            
                
                {searchbutton === true && search == "" ?  <div><button onClick={() => setSearchButton(false)} className="SearchButton" >Back</button></div> : console.log('searching')}
                {searchbutton ? 
                    
                    
                    <div style={{display: `flex`, flexDirection: `row`, justifyContent: `space-around`, flexWrap:`wrap`}}>
                        {results.map((item, index) => { 
                            return (
                                <div key={index} style={{width: `300px`}}>
                                    {element}
                                    <div>
                                        
                                        
                                        <h2 style={{width: `150`, fontSize: '1rem'}}>{item.title}</h2>
                                        <h3>{item.author}</h3>
                                        <h4>{item.price}</h4>
                                        <img style={{width: `175px`}}src={item.img} alt={item.title}></img>
                                    </div>
                                </div>
                            )
                        })}
                    </div> 
                :
                    <div style={{display: `flex`,flexDirection:`row`, flexWrap: `wrap`, marginTop: `20px`}}>
                        {BookData.map((item, index) => { 
                            if(index <7 ){
                                return (
                                    <div key={index} style={{width: `200px` ,display:`flex`, flexDirection: `column`, justifyContent: `space-around`}}>
                                        {element}
                                        <div style={{height:`600px`}}>
                                            <img style={{width: `100px` , objectFit: `contain`, objectPosition: `bottom`, marginBottom: `30px`, paddingBottom: `50px`}}src={item.img}></img>
                                            <h2 style={{height: `100px`,fontSize: '1rem'}}>{item.title}</h2>
                                            <h3>{item.author}</h3>
                                            <h4 style={{paddingBottom: `50px`}}>{item.price}</h4>
                                            
                                            
                                        </div>
                                        
                                    </div>
                                    
                                )
                            }
                        })}
                        <div style={{display: `flex`, justifyContent: `space-around`,width: `100%`, textAlign: `center`,marginBottom:`50px`}}>
                            <div> {element2} </div>
                            <div> {element3} </div>
                            <div> {element4} </div>
                        </div>
                        <div style={{marginTop: `50px`,marginBottom:`50px`, backgroundColor: `#4DB2AD`, width: `100%`, height: `20px`}}></div>
                        <div style={{width: `100%`, textAlign: `center`,marginBottom:`50px`}}> @copyright </div>
                    </div>    
                }
                
            
        </div>
    )
}
const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps,{/*actions*/})(Home);
