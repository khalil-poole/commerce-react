import React from 'react';
import Discounted from '../components/Discounted';
import Explore from '../components/Explore';
import Featured from '../components/Featured';
import Highlights from '../components/Highlights';
import Landing from '../components/Landing';
import Footer from '../components/Footer';

/* Passes in all of the imported pages as props to be displayed */
const Home = () => {
    return (
        <>
            <Landing />
            <Highlights />
            <Featured />
            <Discounted />
            <Explore />
            <Footer />
        </>
    );
};

export default Home;
