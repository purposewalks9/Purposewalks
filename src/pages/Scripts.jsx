import { useContext } from 'react';
import { ThemeContext } from '../content/themecontext';
import Card from '../prop/card';
import Navbar from '../prop/navbar';
import { useNavigate } from 'react-router-dom';
import { Newspaper } from "lucide-react";
import List from '../prop/list';
import { Fade } from "react-awesome-reveal";

const Blog = () => {
    const { darkMode } = useContext(ThemeContext);
    const navigate = useNavigate();

    return (
        <div className={`flex flex-col items-center justify-center 
            ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'} 
            min-h-screen pb-24`}>

            {/* Main container */}
            <div className="max-w-2xl mx-auto p-10 lg:p-16 lg:mt-40 md:mt-30 mt-20 text-left">

                <Fade direction="up" delay={200} duration={1200} triggerOnce>
                    <h1 className="text-[16px] font-bold mb-6 flex items-center justify-start gap-2">
                        <Newspaper size={16} />
                        Scripts
                    </h1>
                </Fade>

                <Fade direction="up" delay={400} duration={1200} triggerOnce>
                    <List />
                </Fade>
            </div>

            {/* Navbar stays low */}
            <div className="fixed bottom-10 left-0 right-0 z-50">
                <Navbar />
            </div>
        </div>
    );
};

export default Blog;