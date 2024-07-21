import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPaintBrush, faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';
import { faGit, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import './css/Skills.css'; // Import custom CSS for hover effects and dynamic background

const Skills: React.FC = () => {
    return (
        <section id="skills" className="skills-section shadow-2xl shadow-slate-800 text-black text-center p-20 md:p-36 bg-gradient-to-r from-gray-400 via-blue-200 to-purple-200">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-6 text-center animate__animated animate__fadeInDown">Skills</h2>
                <p className="text-center mb-12 text-lg">My technical skills and tools I use to build amazing products.</p>
                <div className="flex flex-wrap justify-center">
                    <div className="skill-card bg-white p-6 m-4 rounded-lg shadow-lg w-64 text-center text-gray-900 transition-all duration-300 relative overflow-hidden">
                        <div className="relative z-10 content">
                            <h3 className="text-2xl font-bold mb-2"><FontAwesomeIcon icon={faCode} className="mr-2" />HTML & CSS</h3>
                            <p>Expertise in creating responsive and accessible web layouts.</p>
                            <p className="mt-2 text-sm">Experience: 3 years</p>
                            <p className="text-sm">Projects: 20+</p>
                        </div>
                        <img src="https://i.pinimg.com/564x/0e/7d/4a/0e7d4ad55cdc3db527af6c3d72f41ad0.jpg" alt="HTML & CSS" className="skill-image absolute inset-0 w-full h-full p-6 object-cover opacity-0 transition-opacity duration-300" />
                    </div>
                    <div className="skill-card bg-white p-6 m-4 rounded-lg shadow-lg w-64 text-center text-gray-900 transition-all duration-300 relative overflow-hidden">
                        <div className="relative z-10 content">
                            <h3 className="text-2xl font-bold mb-2"><FontAwesomeIcon icon={faJsSquare} className="mr-2" />JavaScript</h3>
                            <p>Strong understanding of ES6+ features and asynchronous programming.</p>
                            <p className="mt-2 text-sm">Experience: 3 years</p>
                            <p className="text-sm">Projects: 15+</p>
                        </div>
                        <img src="https://i.pinimg.com/564x/13/40/7c/13407c12f50f08d328800c3caef43f61.jpg" alt="JavaScript" className="skill-image absolute inset-0 p-6 w-full h-full object-cover opacity-0 transition-opacity duration-300" />
                    </div>
                    <div className="skill-card bg-white p-6 m-4 rounded-lg shadow-lg w-64 text-center text-gray-900 transition-all duration-300 relative overflow-hidden">
                        <div className="relative z-10 content">
                            <h3 className="text-2xl font-bold mb-2"><FontAwesomeIcon icon={faReact} className="mr-2" />React & TypeScript</h3>
                            <p>Proficient in building scalable and maintainable applications.</p>
                            <p className="mt-2 text-sm">Experience: 2 years</p>
                            <p className="text-sm">Projects: 10+</p>
                        </div>
                        <img src="https://i.pinimg.com/564x/3e/7b/80/3e7b80011cddd3c1f8725bc416d389f6.jpg" alt="React & TypeScript" className="skill-image absolute inset-0 w-full p-6 h-full object-cover opacity-0 transition-opacity duration-300" />
                    </div>
                    <div className="skill-card bg-white p-6 m-4 rounded-lg shadow-lg w-64 text-center text-gray-900 transition-all duration-300 relative overflow-hidden">
                        <div className="relative z-10 content">
                            <h3 className="text-2xl font-bold mb-2"><FontAwesomeIcon icon={faPaintBrush} className="mr-2" />Tailwind CSS</h3>
                            <p>Skilled in using utility-first CSS for rapid UI development.</p>
                            <p className="mt-2 text-sm">Experience: 1.5 years</p>
                            <p className="text-sm">Projects: 8+</p>
                        </div>
                        <img src="https://i.pinimg.com/564x/5e/42/c9/5e42c926feb229f934d3089d89c26e2f.jpg" alt="Tailwind CSS" className="skill-image absolute inset-0 w-full h-full  p-6 object-cover opacity-0 transition-opacity duration-300" />
                    </div>
                    <div className="skill-card bg-white p-6 m-4 rounded-lg shadow-lg w-64 text-center text-gray-900 transition-all duration-300 relative overflow-hidden">
                        <div className="relative z-10 content">
                            <h3 className="text-2xl font-bold mb-2"><FontAwesomeIcon icon={faGit} className="mr-2" />Git & GitHub</h3>
                            <p>Experienced in version control and collaborative development.</p>
                            <p className="mt-2 text-sm">Experience: 3 years</p>
                            <p className="text-sm">Projects: 25+</p>
                        </div>
                        <img src="https://i.pinimg.com/564x/cf/5f/7d/cf5f7dca8d30d52a39f4043f3796d7f0.jpg" alt="Git & GitHub" className="skill-image absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300" />
                    </div>
                    <div className="skill-card bg-white p-6 m-4 rounded-lg shadow-lg w-64 text-center text-gray-900 transition-all duration-300 relative overflow-hidden">
                        <div className="relative z-10 content">
                            <h3 className="text-2xl font-bold mb-2"><FontAwesomeIcon icon={faDatabase} className="mr-2" />Databases</h3>
                            <p>Knowledgeable in SQL and NoSQL databases.</p>
                            <p className="mt-2 text-sm">Experience: 2 years</p>
                            <p className="text-sm">Projects: 10+</p>
                        </div>
                        <img src="https://i.pinimg.com/564x/70/65/c1/7065c1d722ba56108c9b5c5612014d71.jpg" alt="Databases" className="skill-image absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300" />
                    </div>
                    <div className="skill-card bg-white p-6 m-4 rounded-lg shadow-lg w-64 text-center text-gray-900 transition-all duration-300 relative overflow-hidden">
                        <div className="relative z-10 content">
                            <h3 className="text-2xl font-bold mb-2"><FontAwesomeIcon icon={faServer} className="mr-2" />Back-end Development</h3>
                            <p>Experienced in Node.js and Express.js.</p>
                            <p className="mt-2 text-sm">Experience: 2 years</p>
                            <p className="text-sm">Projects: 12+</p>
                        </div>
                        <img src="https://i.pinimg.com/564x/70/65/c1/7065c1d722ba56108c9b5c5612014d71.jpg" alt="Back-end Development" className="skill-image absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
