import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './css/Contact.css';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="contact-section text-black shadow-2xl shadow-slate-800 text-center p-20 md:p-36 bg-gradient-to-r from-gray-400 via-blue-200 to-purple-200 relative flex flex-col items-center">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mb-10">
                <div className="w-full md:w-1/2 text-left mb-10 md:mb-0">
                    <h2 className="text-4xl font-bold mb-6">Contact</h2>
                    <p className="mb-4">Feel free to reach out via email, phone, or social media!</p>
                    <div className="text-lg mb-4">
                        <p className="mb-2"><FontAwesomeIcon icon={faEnvelope} className="mr-2 icon-large" />Email: <a href="mailto:agungpurba16@gmail.com" className="text-black pl-7 hover:underline">agungpurba16@gmail.com</a></p>
                        <p className="mb-2"><FontAwesomeIcon icon={faPhoneAlt} className="mr-2 icon-large" />Phone: <a href="https://web.whatsapp.com/" className="text-black pl-4 hover:underline">+6282363747909</a></p>
                        <p className="mb-2"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 icon-large" />Location: <span className="text-black pl-2">Jakarta Barat, Cengkareng, Indonesia</span></p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 text-center md:text-right">
                    <div className="flex justify-center md:justify-end space-x-4">
                        <a href="https://www.linkedin.com/in/agungprayogipurba/" target="_blank" className="social-icon text-blue-700"><FontAwesomeIcon icon={faLinkedin} className="fa-3x" /></a>
                        <a href="https://github.com/agungprayogi16" target='_blank' className="social-icon text-gray-800"><FontAwesomeIcon icon={faGithub} className="fa-3x" /></a>
                        <a href="https://twitter.com" target='_blank' className="social-icon text-blue-400"><FontAwesomeIcon icon={faTwitter} className="fa-3x" /></a>
                        <a href="https://instagram.com" target='_blank' className="social-icon text-pink-600"><FontAwesomeIcon icon={faInstagram} className="fa-3x" /></a>
                        <a href="https://facebook.com" target='_blank' className="social-icon text-blue-800"><FontAwesomeIcon icon={faFacebook} className="fa-3x" /></a>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.525505615206!2d106.732697!3d-6.1398807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1d67fae732ad%3A0xc0c8c0c8c0c8c0c8!2sCengkareng%2C%20West%20Jakarta%2C%20Jakarta%20Capital%20Region%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1623830425479!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </section>
    );
};

export default Contact;
