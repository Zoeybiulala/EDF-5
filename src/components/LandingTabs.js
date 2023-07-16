import React, { useState } from 'react';
import '../styles/LandingTabs.scss';
import TodoList from "./TodoList";
const LandingTabs = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div className="tabs">
            <div className="tab-buttons">
                <button
                    className={activeTab === 1 ? 'active' : ''}
                    onClick={() => handleTabClick(1)}
                >
                    To-dos
                </button>
                <button
                    className={activeTab === 2 ? 'active' : ''}
                    onClick={() => handleTabClick(2)}
                >
                    Resource Videos
                </button>
            </div>
            <div className="tab-content">
                {activeTab === 1 && <Todos />}
                {activeTab === 2 && <ResourceVideos />}
            </div>
        </div>
    );
};

const ResourceVideos = () => {
    return (
        <div>
            <h2>Resource Videos</h2>
            {/* Add resource videos content here */}
        </div>
    );
};

const Todos = () => {
    return (
        <div>
            <TodoList />
        </div>
    );
};

export default LandingTabs;