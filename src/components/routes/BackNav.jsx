import { useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import './styles/BackNav.css';

const BackNav = () => {
    const navigate = useNavigate();


    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <>
            <div className='back-nav'>
                <div className="back-nav--container">
                    <span onClick={handleGoBack}><FaArrowLeft className='back-arrow' />Back</span>
                </div>
            </div>
            <div className="space"></div>
        </>
    )
}

export default BackNav;
