import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import Button from '../ui/Button';
import './styles/NotFound.css';

const NotFound = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };
    const error = useRouteError();
    console.log(error);
    
    if (error.status === 404) {
        return (
            <div className="not-found container">
                <figure>
                    <img
                        src= "/images/not-found-404.gif"
                        alt='404 page not found'
                    />
                </figure>
                <h2>Oops! Page not found. </h2>
                <Button variant='secondary' onClick={handleGoBack}>Go back</Button>
            </div>
        );
    };
};

export default NotFound;