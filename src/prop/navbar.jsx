import { useState, useRef } from 'react';
import { ThemeContext } from '../content/themecontext.jsx';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
    Home,
    Newspaper,
    Send,
    Hammer,
    Sun,
    Moon
} from "lucide-react";

const TooltipButton = ({ icon: Icon, label, onClick, darkMode, to }) => {
    const [direction, setDirection] = useState('top');
    const [isVisible, setIsVisible] = useState(false);
    const buttonRef = useRef(null);

    const handleMouseEnter = (e) => {
        if (!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const deltaX = mouseX - centerX;
        const deltaY = mouseY - centerY;

        // Determine direction based on which side mouse entered from
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            setDirection(deltaX > 0 ? 'right' : 'left');
        } else {
            setDirection(deltaY > 0 ? 'bottom' : 'top');
        }

        setIsVisible(true);
    };

    const handleMouseLeave = () => {
        setIsVisible(false);
    };

    const getInitialPosition = () => {
        if (isVisible) return '';
        switch (direction) {
            case 'left':
                return '-translate-x-4';
            case 'right':
                return 'translate-x-4';
            case 'bottom':
                return 'translate-y-4';
            case 'top':
            default:
                return '-translate-y-4';
        }
    };

    const content = (
        <>
            <Icon size={18} strokeWidth={1.5} />
        </>
    );

    return (
        <div 
            ref={buttonRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {to ? (
                <Link  
                    to={to}
                    onClick={onClick} 
                    className={`p-2 rounded-full transition-colors duration-200 flex items-center justify-center ${darkMode ? 'hover:bg-gray-200 text-black' : 'text-white hover:bg-gray-700'}`}
                >
                    {content}
                </Link>
            ) : (
                <button  
                    onClick={onClick} 
                    className={`p-2 rounded-full transition-colors duration-200 ${darkMode ? 'hover:bg-gray-200 text-black' : 'text-white hover:bg-gray-700'}`}
                >
                    {content}
                </button>
            )}
            <div 
                className={`absolute bottom-full left-1/2 rounded-full -translate-x-1/2 mb-2 shadow-2xl px-3 py-2 ${darkMode ? 'bg-white text-black' : 'bg-black text-white'} text-sm  whitespace-nowrap transition-all duration-300 pointer-events-none ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                } ${getInitialPosition()}`}
            >
                {label}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent ${darkMode ? 'border-t-gray-900' : 'border-t-white'} border-t-gray-900`}></div>
            </div>
        </div>
    );
};

const Navbar = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    return (
        <div className="flex items-center justify-center">
            <nav className={`flex flex-row gap-x-1 p-1 ${darkMode ? 'bg-white' : 'bg-black'} rounded-full`}>
                <TooltipButton 
                    icon={Home} 
                    label="Home" 
                    darkMode={darkMode}
                    to="/"
                />
                <TooltipButton 
                    icon={Hammer} 
                    label="Craft" 
                    darkMode={darkMode}
                    to="/craft"
                />
                <TooltipButton 
                    icon={Newspaper} 
                    label="Scripts" 
                    darkMode={darkMode}
                    to="/blog"
                />
                <TooltipButton 
                    icon={Send} 
                    label="Send" 
                    darkMode={darkMode}
                    to="/search"
                />
                <TooltipButton 
                    icon={darkMode ? Sun : Moon} 
                    label={darkMode ? "Light" : "Dark"}
                    onClick={() => setDarkMode(!darkMode)}
                    darkMode={darkMode}
                />
            </nav>
        </div>
    );
};

export default Navbar;