import React, { useState, useEffect } from 'react';
import './styles/Toast.css';

let showToastFunc = null;

export const toast = {
    error: (message) => showToastFunc?.('error', message),
    success: (message) => showToastFunc?.('success', message),
    warning: (message) => showToastFunc?.('warning', message),
    info: (message) => showToastFunc?.('info', message),
};

export default function Toast() {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState('info');

    useEffect(() => {
        showToastFunc = (toastType, toastMessage) => {
            setType(toastType);
            setMessage(toastMessage);
            setVisible(true);
            setTimeout(() => setVisible(false), 5000);
        };
    }, []);


    if (!visible) return null;
    return (
        // <div className={visible ? 'toast' : 'toast-exit'}>
        <div className="toast">
            <div className="toast-container">
                <div className={`toast-status ${type}`}>{message}</div>
            </div>
        </div>
    );
}
