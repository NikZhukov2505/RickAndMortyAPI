import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './../../App.css'

const Output = ({ characters }) => {

    const [isVisible, setISVisible] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)

    const showModal = (id) => {
        setCurrentUser(id);
        setISVisible(true)
    }
    const hideModal = () => {
        setISVisible(false)
    }

    return (
        <div className='info'>
            {
                characters.map(item => (
                    <div key={item.id} className='card'>
                        <div>
                            <h3>{item.name}</h3>
                            <img className='card__img' src={item.image} alt="" />
                        </div>
                        <button onClick={() => { showModal(item.id); }}>More...</button>
                        {isVisible == true && currentUser == item.id ? < Modal data={item} hide={hideModal} /> : null}
                    </div>
                ))
            }

        </div>
    );
};

export default Output;