import React from 'react';
import logo from '../assets/logo.svg'

const Header = () => {
    return (
        <div className='flex  justify-between bg-black text-2sm text-white font-semibold'>
            <img src={logo} alt="sjko" className='w-12' />
            <nav className='p-2'>
                <ul className='flex justify-between gap-5 items-center'>
                    <li className='hover:text-red-400 hover:uppercase'>Prix</li>
                    <li className='hover:text-red-400 hover:uppercase'>Apropos</li>
                    <li className='hover:text-red-400 hover:uppercase'>Contact</li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;