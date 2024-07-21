import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './css/Header.css'; // Import custom CSS for dynamic background and additional styling

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header bg-white text-black fixed w-full z-10 p-4">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold tracking-wider animate__animated animate__fadeInLeft">Agung Prayogi Purba</div>
                <div className="hidden md:flex space-x-6 text-lg font-medium">
                    <a href="#experience" className="hover:text-yellow-400 transition duration-300 animate__animated animate__fadeInDown">Experience</a>
                    <a href="#skills" className="hover:text-yellow-400 transition duration-300 animate__animated animate__fadeInDown">Skills</a>
                    <a href="#projects" className="hover:text-yellow-400 transition duration-300 animate__animated animate__fadeInDown">Projects</a>
                    <a href="#contact" className="hover:text-yellow-400 transition duration-300 animate__animated animate__fadeInDown">Contact</a>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-2xl" />
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className="md:hidden bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-4">
                    <a href="#experience" className="block mt-2 hover:text-yellow-400 transition duration-300" onClick={toggleMenu}>Experience</a>
                    <a href="#skills" className="block mt-2 hover:text-yellow-400 transition duration-300" onClick={toggleMenu}>Skills</a>
                    <a href="#projects" className="block mt-2 hover:text-yellow-400 transition duration-300" onClick={toggleMenu}>Projects</a>
                    <a href="#contact" className="block mt-2 hover:text-yellow-400 transition duration-300" onClick={toggleMenu}>Contact</a>
                </div>
            )}
        </header>
    );
};

export default Header;
