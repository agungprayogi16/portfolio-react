// src/components/Navbar.tsx

import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaHome, FaUserAlt, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Navbar: React.FC = () => {
    return (
        <aside className="w-64 bg-gray-800 text-white flex flex-col h-full fixed shadow-lg">
            <div className="p-6 bg-gray-900">
                <h1 className="text-3xl font-bold text-center text-indigo-300">My Portfolio</h1>
            </div>
            <nav className="flex-1 p-6">
                <ul className="space-y-6">
                    <li className="flex items-center">
                        <FaHome className="mr-3 text-xl text-indigo-300" />
                        <ScrollLink
                            to="home"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer text-lg text-indigo-300 hover:text-indigo-500 transition transform hover:scale-105"
                        >
                            Home
                        </ScrollLink>
                    </li>
                    <li className="flex items-center">
                        <FaUserAlt className="mr-3 text-xl text-indigo-300" />
                        <ScrollLink
                            to="about"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer text-lg text-indigo-300 hover:text-indigo-500 transition transform hover:scale-105"
                        >
                            About
                        </ScrollLink>
                    </li>
                    <li className="flex items-center">
                        <FaProjectDiagram className="mr-3 text-xl text-indigo-300" />
                        <ScrollLink
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer text-lg text-indigo-300 hover:text-indigo-500 transition transform hover:scale-105"
                        >
                            Projects
                        </ScrollLink>
                    </li>
                    <li className="flex items-center">
                        <FaEnvelope className="mr-3 text-xl text-indigo-300" />
                        <ScrollLink
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer text-lg text-indigo-300 hover:text-indigo-500 transition transform hover:scale-105"
                        >
                            Contact
                        </ScrollLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Navbar;
