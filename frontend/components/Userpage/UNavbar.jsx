
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from "js-cookie"
import Logout from '../Logout.jsx';
import Hero from '../hero.jsx'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [click, setclick]=useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const toggle=()=>{
        setclick(!click);
        console.log(click)
      }





    return (
        <nav className="bg-blue-600 p-4  shadow-lg shadow-blue-900">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">MyLogo</div>
                <div className="hidden md:flex space-x-4">
                   
                    <a href="#" className="text-white hover:bg-blue-500 p-2 rounded">About</a>
                    <a href="#" className="text-white hover:bg-blue-500 p-2 rounded">Services</a>
                  
                    <Logout />
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">Menu</button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                   
                    <a href="#" className="block text-white hover:bg-blue-500 p-2 rounded">About</a>
                    <a href="#" className="block text-white hover:bg-blue-500 p-2 rounded">Services</a>
                 
                    <Logout />
                </div>
            )}
        </nav>
    );
};

export default Navbar;
