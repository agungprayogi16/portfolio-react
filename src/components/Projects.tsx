import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './css/Projects.css'; // Import custom CSS for additional styling

const Projects: React.FC = () => {
    return (
        <section id="projects" className="projects-section shadow-2xl shadow-slate-800 text-black text-center p-20 md:p-36 bg-gradient-to-r from-gray-400 via-blue-200 to-purple-200 relative">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-6 text-center animate__animated animate__fadeInDown">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="project-card bg-white text-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
                        <img src="/project1.jpg" alt="Project 1" className="rounded-lg mb-4 project-image" />
                        <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300">
                            <p className="text-white p-12 text-lg">Developed a personal portfolio website using React, TypeScript, and Tailwind CSS to showcase my skills and projects.</p>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-2xl  font-bold">Project 1: Portfolio Website</h3>
                            <a href="#" className="text-blue-500 hover:underline mt-4 block">View Project <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" /></a>
                        </div>
                    </div>
                    <div className="project-card bg-white text-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
                        <img src="/project1.jpg" alt="Project 2" className="rounded-lg mb-4 project-image" />
                        <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300">
                            <p className="text-white text-lg">Built an e-commerce platform with a dynamic product listing and cart system using React and Firebase.</p>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-2xl  font-bold">Project 2: E-commerce Platform</h3>
                            <a href="https://github.com/agungprayogi16/project3" className="text-blue-500 hover:underline mt-4 block">View Project <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" /></a>
                        </div>
                    </div>
                    <div className="project-card bg-white text-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
                        <img src="/project1.jpg" alt="Project 3" className="rounded-lg mb-4 project-image" />
                        <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300">
                            <p className="text-white p-12 text-lg">Created a weather application that fetches real-time data from a weather API and displays it in a user-friendly interface.</p>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold">Project 3: Weather App</h3>
                            <a href="https://github.com/agungprayogi16/projectcircle" className="text-blue-500 hover:underline mt-4 block">View Project <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" /></a>
                        </div>
                    </div>
                    <div className="project-card bg-white text-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
                        <img src="/project1.jpg" alt="Project 4" className="rounded-lg mb-4 project-image" />
                        <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300">
                            <p className="text-white p-12 text-lg">Developed a task management tool to help users organize their daily tasks efficiently.</p>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold">Project 4: Task Manager</h3>
                            <a href="https://github.com/agungprayogi16/natural-farm-dashboard" className="text-blue-500 hover:underline mt-4 block">View Project <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" /></a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Projects;
