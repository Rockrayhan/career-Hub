import React from 'react';
import Catagories from '../Components/Catagories';
import Featuredjobs from '../Components/Featuredjobs';


const Home = () => {
    return (
        <div>
            <h1> This is Home </h1>

            <div className='m-5 border border-5 p-4'> <Catagories></Catagories> </div>

            <div className='m-5 border border-5 p-4'> <Featuredjobs></Featuredjobs> </div>
            


        </div>
    );
};

export default Home;