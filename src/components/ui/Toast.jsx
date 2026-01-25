// Toast.jsx
import React from 'react';
import './styles/Toast.css';

const Toast = ({ status, message }) => {

    return (
        <div className={`toast toast-${status}`}>
            <div className="toast-icon"></div>
            <div className="toast-message">
                {message}
            </div>
        </div>
    );
};

export default Toast;