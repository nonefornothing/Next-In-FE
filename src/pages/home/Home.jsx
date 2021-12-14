import React from 'react';
import Headerpage from '../../components/header/Headerpage';
import TopHeader from '../../components/topfooter/TopFooter';
import Footerpage from '../../components/footer/Footerpage';


const Home = () => {

    

    return (
        <div className='home'>
            <Headerpage />
            <h1>INI HOME</h1>
            <TopHeader />
            <Footerpage />
        </div>
    );
};

export default Home;

