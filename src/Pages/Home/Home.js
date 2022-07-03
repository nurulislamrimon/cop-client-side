import React from 'react';
import SetTitle from '../../Utilities/SetTitle';

const Home = () => {
    return (
        <section className='h-[calc(100vh-100px)] font-greeting flex flex-col justify-center' >
            <SetTitle>Home</SetTitle>

            <h1 className='text-primary font-bold text-center text-9xl' > Welcome</h1 >
            <h4 className='text-primary font-bold text-center text-4xl' > to</h4 >
            <h3 className='text-primary font-bold text-center text-5xl' > Combination of Power's</h3>
            < h4 className='text-primary font-bold text-center text-4xl' > family</h4 >
        </section >
    );
};

export default Home;