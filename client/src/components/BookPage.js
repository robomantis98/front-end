import React, {useState} from 'react';
import {connect} from 'react-redux'; 
import ReactStars from 'react-stars'
import Modal from 'react-modal'; 

// const customStyles = {
//     content : {
//       top                   : '50%',
//       left                  : '50%',
//       right                 : 'auto',
//       bottom                : 'auto',
//       marginRight           : '-50%',
//       transform             : 'translate(-50%, -50%)'
//     }
// };


const BookPage = props => {
    
    // const ratingChanged = (newRating) => {
    //     console.log(newRating)
    //   }


        // function BookrModal(){
        //     const [modalIsOpen, setModalIsOpen] = useState(false)
        //     // this.state = {
        //     // modalIsOpen: false
        //     // };
        
        //     props.openModal = props.openModal.bind(props);
        //     props.afterOpenModal = props.afterOpenModal.bind(props);
        //     props.closeModal = props.closeModal.bind(props);
        // // }
        
        // const openModal = () => {
        //     setModalIsOpen(true); 
        // }
        
        // const afterOpenModal =()=> {
        //     // references are now sync'd and can be accessed.
        //     this.subtitle.style.color = '#f00';
        // }
        
        // const closeModal=()=> {
        //     setModalIsOpen(false); 
        // }
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