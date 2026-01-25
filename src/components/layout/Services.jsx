// src/pages/About.js
import React from 'react';
import { Element } from 'react-scroll'
import ServiceCard from '../ui/ServiceCard';
import './styles/services.css';

const Services = () => {
    const services = [
        {
            id: 1,
            icon: <svg width="55" height="55" viewBox="0 0 55 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.8333 8.54272H5.16667C2.86549 8.54272 1 10.4318 1 12.762V43.7037C1 46.034 2.86549 47.923 5.16667 47.923H46.8333C49.1346 47.923 51 46.034 51 43.7037V29.6393" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M26 47.9231V59.1746" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M30 13.7097V12.0968H34.6428V13.7097H30ZM34.7264 22.8484L33.6307 21.6871L36.8806 18.3L37.9949 19.4419L34.7264 22.8484ZM36.8806 7.50645L33.6307 4.11935L34.7264 2.95806L37.9949 6.36452L36.8806 7.50645ZM53.1553 25L46.2792 17.8355L44.8214 22.5177L41.4275 10.8565L52.7374 14.3919L48.2617 16.0532L55 23.0774L53.1553 25ZM42.5604 4.83871V0H44.108V4.83871H42.5604ZM49.7861 7.50645L48.6718 6.36452L51.9404 2.95968L53.0361 4.1L49.7861 7.50645Z" fill="#FF5733" />
                <path d="M12.1111 59.1746H39.8889" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            , color: "#FF5733", title: 'Web Design', description: 'I design user-friendly, and responsive websites for seamless user experiences with smooth navigation.'
        },
        {
            id: 2,
            icon: <svg width="50" height="55" viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.34375 51.1745H24.2188C24.426 51.1745 24.6247 51.0912 24.7712 50.9428C24.9177 50.7945 25 50.5932 25 50.3834C25 50.1736 24.9177 49.9724 24.7712 49.824C24.6247 49.6756 24.426 49.5923 24.2188 49.5923H2.34375C2.13655 49.5923 1.93784 49.5089 1.79132 49.3606C1.64481 49.2122 1.5625 49.011 1.5625 48.8012V2.91609C1.5625 2.70627 1.64481 2.50505 1.79132 2.35668C1.93784 2.20832 2.13655 2.12497 2.34375 2.12497H35.1562C35.3634 2.12497 35.5622 2.20832 35.7087 2.35668C35.8552 2.50505 35.9375 2.70627 35.9375 2.91609V10.8273C35.9375 11.0371 36.0198 11.2384 36.1663 11.3867C36.3128 11.5351 36.5116 11.6184 36.7188 11.6184C36.9259 11.6184 37.1247 11.5351 37.2712 11.3867C37.4177 11.2384 37.5 11.0371 37.5 10.8273V2.91609C37.5 1.60757 36.4484 0.542725 35.1562 0.542725H2.34375C1.05156 0.542725 0 1.60757 0 2.91609V48.8012C0 50.1097 1.05156 51.1745 2.34375 51.1745Z" fill="black" />
                <path d="M28.125 17.1563V48.8012C28.125 50.1097 29.1766 51.1746 30.4688 51.1746H47.6562C48.9484 51.1746 50 50.1097 50 48.8012V17.1563C50 15.8478 48.9484 14.783 47.6562 14.783H30.4688C29.1766 14.783 28.125 15.8478 28.125 17.1563ZM48.4375 17.1563V48.8012C48.4375 49.011 48.3552 49.2122 48.2087 49.3606C48.0622 49.509 47.8635 49.5923 47.6562 49.5923H30.4688C30.2615 49.5923 30.0628 49.509 29.9163 49.3606C29.7698 49.2122 29.6875 49.011 29.6875 48.8012V17.1563C29.6875 16.9465 29.7698 16.7453 29.9163 16.5969C30.0628 16.4486 30.2615 16.3652 30.4688 16.3652H47.6562C47.8635 16.3652 48.0622 16.4486 48.2087 16.5969C48.3552 16.7453 48.4375 16.9465 48.4375 17.1563Z" fill="#F9BF00" />
                <path d="M18.75 46.4278C19.6129 46.4278 20.3125 45.7194 20.3125 44.8455C20.3125 43.9717 19.6129 43.2633 18.75 43.2633C17.8871 43.2633 17.1875 43.9717 17.1875 44.8455C17.1875 45.7194 17.8871 46.4278 18.75 46.4278Z" fill="black" />
                <path d="M39.0625 46.4278C39.9254 46.4278 40.625 45.7194 40.625 44.8455C40.625 43.9717 39.9254 43.2633 39.0625 43.2633C38.1996 43.2633 37.5 43.9717 37.5 44.8455C37.5 45.7194 38.1996 46.4278 39.0625 46.4278Z" fill="#F9BF00" />
            </svg>
            , color: "#F9BF00", title: 'App Design', description: 'I also design modern, and user-friendly mobile applications interfaces with smooth navigation.'
        },
        {
            id: 3,
            icon: <svg width="55" height="55" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.625 6.45166H5.125C2.84683 6.45166 1 8.32183 1 10.6288V41.261C1 43.5681 2.84683 45.4382 5.125 45.4382H46.375C48.6532 45.4382 50.5 43.5681 50.5 41.261V27.3373" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M25.75 45.4382V56.5772" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.0001 56.5771H39.5001" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M38.3214 2.44165L31.25 9.96047L38.3214 17.4793" stroke="#19BF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M48.9286 2.44165L56 9.96047L48.9286 17.4793" stroke="#19BF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            , color: "#19BF00", title: 'Web Development', description: 'I create responsive, dynamic and high-performance websites with clean and efficient code.'
        },
    ]
    return (
        <Element name='services'>
            <div className="container block">
                <div>
                <div className="header">
                    <h1>My Services</h1>
                    <p>I offer some services to help businesses and individuals create stunning, high-performance websites and applications.</p>
                </div>

                <section className="services">
                    <div className="service-cards grid-three--cols">
                        {services.map((element) => {
                            return <ServiceCard key={element.id} element={element} />
                        })}
                    </div>
                </section>
                </div>
            </div>
        </Element>
    );
};

export default Services;