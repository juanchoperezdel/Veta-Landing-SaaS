import React from 'react';
import Hero from './Hero';
import PainPoints from './PainPoints';
import Process from './Process';
import Comparison from './Comparison';
import Booking from './Booking';
import Faq from './Faq';
import TrustedBy from './TrustedBy';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <TrustedBy />
            <PainPoints />
            <Process />
            <Comparison />
            <Booking />
            <Faq />
        </>
    );
};

export default Home;
