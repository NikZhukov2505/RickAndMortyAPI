import React from 'react';
import './Modal.css'

const Modal = ({ data, hide }) => {
    return (
        <div className='modal'>

            <div className="modal__container">
                <div onClick={hide} className='close'>X</div>
                <h2>Name: {data.name}</h2>
                <img src={data.image} alt="picture" />
                <h4>Status: {data.status}</h4>
                <h4>Gender: {data.gender}</h4>
                <h4>Species: {data.species}</h4>
            </div>
        </div>
    );
};

export default Modal;