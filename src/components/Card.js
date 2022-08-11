import React from 'react';
import imgs from '../assets/fille.png';

import Footer from './Footer';
import Main from './Main';
const Card = () => {
    return (
        <div className='flex flex-col justify-center items-center rounded-2sm pt-10'>
             <div className='flex flex-col justify-center items-center p-10 rounded-sm w-fit bg-slate-800'>
                <img src={imgs} alt="" />
                <Main/>
                <div className='bg-black min-h-fit w-full rounded-b-xl'>
                    <Footer/>
                </div>           
            </div>
        </div>
           
        
    );
};

export default Card;