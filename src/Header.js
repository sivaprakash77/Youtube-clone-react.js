import React from 'react';
import { FaYoutube } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import Image from './img.jpg';

const Header =() =>{
    return (
        <div className='Header'>
            <div className='Logo'>
                <span><FaYoutube /></span>
                <p>YouTube Clone</p>
            </div>
            <div className='Search'>
                <input type='text' placeholder='Search'></input>
                <button><IoSearch /></button>
            </div>
            <div className='Notification'>
                <span><FaBell /></span>
                <span><image src={Image} alt="img"></image></span>
            </div>
        </div>
    )

}

export default Header;