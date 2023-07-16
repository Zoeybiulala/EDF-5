import React from 'react';
import '../styles/ProgressBar.scss';

const ProgressBar = ({ value, maxValue }) => {
    const progress = (value / maxValue) * 100;

    return (
        <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
            <span className="progress-text">{progress}%</span>
        </div>
    );
};

export default ProgressBar;
