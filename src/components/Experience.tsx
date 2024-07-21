import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faLightbulb, faRocket, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons'; // Correct import for faReact
import './css/Experience.css'; // Import custom CSS for dynamic background and text styling

const Experience: React.FC = () => {
    return (
        <section id="experience" className="experience-section text-black text-center p-20 md:p-36 bg-gradient-to-r from-gray-400 via-blue-200 to-purple-200 py-20 relative">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-6 text-center animate__animated animate__fadeInDown">Experience</h2>
                <div className="experience-card bg-white p-6 rounded-lg shadow-lg mb-6 hover:shadow-2xl transition-shadow duration-300 animate__animated animate__fadeInUp">
                    <div className="flex flex-col p-5 items-start justify-start">
                        <h3 className="text-2xl  font-bold"><FontAwesomeIcon icon={faBriefcase} className="mr-2" />Kalanara Group</h3>
                        <p className="text-lg">Frontend Developer (1 year)</p>
                    </div>
                    <p className="mt-2">Played a key role in developing and maintaining the company's primary web applications, ensuring seamless user experiences through optimized and responsive design.</p>
                    <ul className="list-disc list-inside mt-14 space-y-6">
                        <li className="flex items-center"><FontAwesomeIcon icon={faReact} className="mr-2 text-blue-500" />Developed dynamic web applications using React and TypeScript.</li>
                        <li className="flex items-center"><FontAwesomeIcon icon={faLightbulb} className="mr-2 text-yellow-500" />Collaborated with the design team to implement UI/UX improvements.</li>
                        <li className="flex items-center"><FontAwesomeIcon icon={faRocket} className="mr-2 text-green-500" />Enhanced website performance and loading speeds by 30%.</li>
                        <li className="flex items-center"><FontAwesomeIcon icon={faUsers} className="mr-2 text-purple-500" />Provided mentorship and guidance to junior developers.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;
