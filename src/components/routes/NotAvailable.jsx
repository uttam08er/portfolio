import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import './styles/NotAvailable.css';

const NotAvailable = () => {
  const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };
    return (
        <div className="not-available container">
            <figure>
                <img
                    src="/images/not-available.gif"
                    alt='Not available...'
                />
            </figure>
            <h2>Not available </h2>
            <Button variant='secondary' onClick={handleGoBack}>Go back</Button>
        </div>
    );
}

export default NotAvailable
