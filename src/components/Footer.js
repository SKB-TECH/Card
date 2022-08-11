import React from 'react';
import {AiOutlineTwitter,AiOutlineInstagram,AiFillGithub} from 'react-icons/ai'
import {FaFacebookSquare,FaTwitter,FaInstagram} from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='flex justify-around items-center  text-white h-10'>
            <FaTwitter className='text-gray-200  text-2xl'/>
            <FaFacebookSquare className='text-gray-200  text-2xl'/>
            <FaInstagram className='text-gray-200  text-2xl'/>
            <AiFillGithub className='text-gray-200  text-2xl'/>
        </div>
    );
};

export default Footer;