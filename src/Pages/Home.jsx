import React from 'react';
import Bannar from '../Componants/HomeComponants/Bannar/Bannar';
import HowItWork from '../Componants/HomeComponants/HowItWork';
import OurServices from '../Componants/HomeComponants/OurServices';
import Brand from '../Componants/HomeComponants/Brand';
import Reviews from '../Componants/HomeComponants/Reviews';
import FAQ from '../Componants/HomeComponants/FAQ';




const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <HowItWork></HowItWork>
            <OurServices></OurServices>
            <Brand></Brand>
            <Reviews></Reviews>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;