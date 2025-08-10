import React from 'react';
import Milestone from './Milestone';
import './WebRoadiee.css';

const WebRoadiee=()=> {
    return (
        <div className="App12">
            <h1>Web Development Roadmap</h1>
            <div className="roadmap-tree">
                {/* Start with the basics */}
                <Milestone 
                    title="1. HTML & CSS Basics" 
                    description="Start with the basics of HTML and CSS, which are the building blocks of web development."
                    videoId="UB1O30fR-EE"
                />
                <Milestone 
                    title="2. JavaScript Basics" 
                    description="Learn JavaScript fundamentals to make your websites interactive."
                    videoId="PkZNo7MFNFg"
                />
                <Milestone 
                    title="3. Version Control with Git & GitHub" 
                    description="Learn Git for version control to collaborate with others on projects."
                    videoId="RGOj5yH7evk"
                />
                <Milestone 
                    title="4. Responsive Design & CSS Frameworks" 
                    description="Explore responsive design principles and CSS frameworks like Bootstrap."
                    videoId="srvUrASNj0s"

                />
                <Milestone 
                    title="5. JavaScript Advanced (ES6+)" 
                    description="Dive deeper into JavaScript with ES6+ features and improve coding efficiency."
                    videoId="NCwa_xi0Uuc"
                />
                <Milestone 
                    title="6. Frontend Libraries (React.js)" 
                    description="Learn React.js, a popular library for building dynamic UIs."
                    videoId="DLX62G4lc44"
                />
                <Milestone 
                    title="7. APIs & AJAX" 
                    description="Understand APIs and how to fetch data with AJAX and Fetch API."
                    videoId="0sOvCWFmrtA"
                />
                <Milestone 
                    title="8. Backend Basics (Node.js & Express)" 
                    description="Learn backend development with Node.js and Express to create server-side logic."
                    videoId="Oe421EPjeBE"
                />
                <Milestone 
                    title="9. Database Basics (MongoDB)" 
                    description="Learn how to store and manage data using databases like MongoDB."
                    videoId="7CqJlxBYj-M"
                />
                <Milestone 
                    title="10. Full Stack Project" 
                    description="Apply what you've learned by building a full-stack project from scratch."
                    videoId="p0bGHP-PXD4"
                />
                <Milestone 
                    title="11. Deployment" 
                    description="Learn how to deploy your web applications using platforms like Netlify, Vercel, or Heroku."
                    videoId="NBrQp6-721c"
                />
                <Milestone 
                    title="12. Advanced Topics" 
                    description="Explore advanced topics like Authentication, GraphQL, TypeScript, and more."
                    videoId="5PWXfjCCm1g"
                />
            </div>
        </div>
    );
}

export default WebRoadiee;
