import React, { useContext } from 'react';
import { ThemeContext } from '../content/themecontext';
import Card from './card';
import { useNavigate } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";

const List = () => {
    
    const { darkMode } = useContext(ThemeContext);
    const navigate = useNavigate();

    const posts = [
        { title: "UNPLUGGED", description: "Python script for Ubuntu Wi-Fi deauthentication attacks.", path: "/blog/ubuntu" },
        { title: "Salary Prediction Model", description: "Predicting salaries using a PyTorch linear regression model.", path: "/blog/salary" },
        { title: "Lyrics Finder", description: "A simple Python script to search and display song lyrics using the Lyrics.ovh API", path: "/blog/lyrics" },
        { title: "Sales Report Software", description: "Automated Python tool for generating and sending daily sales reports via WhatsApp", path: "/blog/sales" },
    ];

    return (
        <div className="flex flex-col items-start gap-y-6">
            {posts.map((post, index) => (
                <Fade
                    key={index}
                    direction={index % 2 === 0 ? "left" : "right"}
                    delay={index * 300}
                    duration={1500}
                    triggerOnce
                >
                    <Card
                        title={post.title}
                        description={post.description}
                        darkMode={darkMode}
                        onClick={() => navigate(post.path)}
                    />
                </Fade>
            ))}
        </div>
    );
};

export default List;