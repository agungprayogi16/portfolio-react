import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import './css/Hero.css'; 

const Hero: React.FC = () => {
    return (
        <section className="hero-section shadow-2xl shadow-slate-800 text-black text-center p-20 md:p-36 bg-gray-400 relative flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 animate__animated animate__fadeInLeft animate__delay-1s mb-8 md:mb-0">
                <img
                    src="/profile.jpg"
                    alt="Agung Prayogi Purba"
                    className="mx-auto rounded-full w-40 h-40 md:w-80 md:h-80 border-4 border-gray-700 shadow-lg"
                />
            </div>
            <div className="w-full md:w-1/2 text-left animate__animated animate__fadeInRight animate__delay-2s">
                <h2 className="text-3xl md:text-5xl font-bold ">Agung Prayogi Purba</h2>
                <p className="text-xl md:text-2xl mt-4">
                    <span className="typewriter">Frontend Developer</span>
                </p>
                <p className="mt-2 max-w-md">
                    Transforming ideas into reality with elegant and efficient code. I specialize in creating dynamic and beautiful web pages using modern technologies like React, TypeScript, and Tailwind CSS.
                </p>
                <div className="mt-6 flex space-x-4">
                    <a href="https://www.linkedin.com/in/agungprayogipurba/" target="_blank" className="text-blue-700 hover:text-blue-900 transition duration-300"><FontAwesomeIcon icon={faLinkedin} className="fa-2x" /></a>
                    <a href="https://github.com/agungprayogi16" target="_blank" className="text-gray-800 hover:text-white transition duration-300"><FontAwesomeIcon icon={faGithub} className="fa-2x" /></a>
                   
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent h-20"></div>
            <a href="#experience" className="scroll-down-arrow absolute bottom-10 left-1/2 transform -translate-x-1/2 text-2xl text-white animate-bounce"><FontAwesomeIcon icon={faArrowDown} /></a>
        </section>
    );
};

export default Hero;
