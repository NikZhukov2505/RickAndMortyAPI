import React, { useEffect, useState } from 'react';
import { API } from '../../API/Index';
import Output from '../Output/Output';
import './Home.css'
import video from './video/r&m.mp4'
import Pagination from '@mui/material/Pagination';

const Home = () => {

    const [characters, setCharacters] = useState([])
    const [pagesCount, stePagesCount] = useState(20)
    const [currentPage, setCurrentPage] = useState(1)


    const getCharacter = async () => {
        const request = await fetch(API + '/?page=' + currentPage)
        const response = await request.json()
        stePagesCount(Math.ceil(response.info.count / response.info.pages));
        setCharacters(response.results);
    }

    useEffect(() => {
        getCharacter()
    }, [currentPage])


    return (
        <div className='content'>
            <video autoPlay muted loop className='home__content'>
                <source src={video} />
            </video>
            <Output characters={characters} />
            <div className='pagination__btns'>
                <Pagination onChange={(e, page) => {
                    setCurrentPage(page)
                }} count={pagesCount} color='primary' />
            </div>
        </div>
    );
};

export default Home;
