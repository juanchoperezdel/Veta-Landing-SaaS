import React from 'react';
import Hero from './Hero';
import PainPoints from './PainPoints';
import Process from './Process';
import Comparison from './Comparison';
import Booking from './Booking';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <PainPoints />
            <Process />
            <Comparison />
            <Booking />
        </>
    );
};

export default Home;
