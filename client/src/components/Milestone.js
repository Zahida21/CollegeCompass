import React from 'react';
import './Milestone.css';

function Milestone({ title, description, videoId }) {
    return (
        <div className="milestone">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="video-wrapper">
                <iframe 
                    width="100%" 
                    height="315" 
                    src={`https://www.youtube.com/embed/${videoId}`} 
                    title={title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    );
}

export default Milestone;
