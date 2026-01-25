import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import './styles/ComingSoon.css';

const NotFound = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };
    return (
        <div className="coming-soon container">
            <figure>
                <img
                    src="/portfolio/images/coming-soon.gif"
                    alt='Coming soon...'
                />
            </figure>
            <h2>Coming soon... </h2>
            <Button variant='secondary' onClick={handleGoBack}>Go back</Button>
        </div>
    );
};

export default NotFound;