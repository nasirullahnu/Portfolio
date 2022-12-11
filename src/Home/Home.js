import React from 'react';
import About from '../Pages/About/About';
import MyName from '../Pages/My Name/MyName';
import Projects from '../Pages/Projects/Projects';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div  className='mx-10 mt-5'>
            <Banner></Banner>
            <MyName></MyName>
            <About></About>
            <Projects></Projects>
        </div>
    );
};

export default Home;