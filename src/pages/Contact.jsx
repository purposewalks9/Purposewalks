import { useState } from "react";
import { ThemeContext } from '../content/themecontext';
import React, { useContext } from 'react';      
import Navbar from '../prop/navbar';
import { Send } from "lucide-react";
import { Fade } from "react-awesome-reveal";

const Search = () => {       
    const { darkMode } = useContext(ThemeContext);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await fetch("https://formspree.io/f/movgnvnb", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        if (res.ok) {
            setStatus("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } else {
            setStatus("Failed to send message.");
        }
    } catch (err) {
        setStatus("Error sending message.");
    }

    setTimeout(() => setStatus(""), 3000);
};


    return (
        <div className={`min-h-screen`}>
            <main className="max-w-2xl mx-auto px-6 py-8  pb-32">
                
                <div className="lg:mt-40 mt-20">
                    <Fade direction="up" delay={200} duration={1200} triggerOnce>
                        <h1 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                            Get in Touch
                        </h1>
                    </Fade>
                    
                    <Fade direction="up" delay={400} duration={1200} triggerOnce>
                        <p className={`text-sm mb-8 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                            Have a question or want to work together?
                        </p>
                    </Fade>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Name Field */}
                        <Fade direction="up" delay={600} duration={1200} triggerOnce>
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    required
                                    className={`w-full bg-transparent border-0 border-b pb-3 text-sm focus:outline-none transition-colors ${
                                        darkMode 
                                            ? 'border-gray-800 focus:border-gray-600 text-gray-200 placeholder-gray-600' 
                                            : 'border-gray-300 focus:border-gray-500 text-gray-900 placeholder-gray-400'
                                    }`}
                                />
                            </div>
                        </Fade>

                        {/* Email Field */}
                        <Fade direction="up" delay={800} duration={1200} triggerOnce>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    required
                                    className={`w-full bg-transparent border-0 border-b pb-3 text-sm focus:outline-none transition-colors ${
                                        darkMode 
                                            ? 'border-gray-800 focus:border-gray-600 text-gray-200 placeholder-gray-600' 
                                            : 'border-gray-300 focus:border-gray-500 text-gray-900 placeholder-gray-400'
                                    }`}
                                />
                            </div>
                        </Fade>

                        {/* Message Field */}
                        <Fade direction="up" delay={1000} duration={1200} triggerOnce>
                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Message"
                                    required
                                    rows="4"
                                    className={`w-full bg-transparent border-0 border-b pb-3 text-sm focus:outline-none transition-colors resize-none ${
                                        darkMode 
                                            ? 'border-gray-800 focus:border-gray-600 text-gray-200 placeholder-gray-600' 
                                            : 'border-gray-300 focus:border-gray-500 text-gray-900 placeholder-gray-400'
                                    }`}
                                />
                            </div>
                        </Fade>

                        {/* Submit Button */}
                        <Fade direction="up" delay={1200} duration={1200} triggerOnce>
                            <button
                                type="submit"
                                className={`flex items-center gap-2 px-6 py-3 text-sm transition-colors ${
                                    darkMode 
                                        ? 'bg-gray-900 hover:bg-gray-800 text-gray-200 border border-gray-800' 
                                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-200'
                                }`}
                            >
                                Send Message
                                <Send size={16} />
                            </button>
                        </Fade>

                        {/* Status Message */}
                        {status && (
                            <Fade direction="up" duration={800} triggerOnce>
                                <p className={`text-sm ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                                    {status}
                                </p>
                            </Fade>
                        )}
                    </form>
                </div>

            </main>

            {/* Fixed Bottom navbar */}
            <div className="fixed bottom-10 left-0 right-0 z-50">
                <Navbar />
            </div>
        </div>
    );             
}

export default Search;