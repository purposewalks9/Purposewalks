import React, { useContext } from 'react';
import { ThemeContext } from '../content/themecontext';
import { Link2 } from 'lucide-react';
import Navbar from '../prop/navbar';
import { Mail, Github } from 'lucide-react';
import { Link } from 'lucide-react';
import { Newspaper } from "lucide-react";
import List from '../prop/list';
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import OnlineStatus from '../prop/online';

const Home = () => {

  const { darkMode } = useContext(ThemeContext);

  const [copiedId, setCopiedId] = useState(null);
  const copyToClipboard = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);

      // Reset after 2 seconds
      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="max-w-3xl p-8 md:p-12 lg:p-20 relative text-left overflow-hidden mx-auto min-h-screen flex flex-col justify-center items-start gap-y-8">

      <Fade direction="up" delay={200} duration={1200} triggerOnce>
        <div className={`w-full flex flex-row justify-between pb-4 border-b-[1px] ${darkMode ? 'border-gray-700' : 'border-gray-300'} items-center gap-6 gap-x-8 md:gap-x-20 lg:gap-x-100`}>
          <div className="flex flex-col text-left gap-y-2">
            <h1 className="text-base sm:text-lg font-bold">Purpose</h1>
            <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>Designer , Frontend Developer</p>
            <div className="flex flex-row gap-x-3 sm:gap-x-4 mt-2 sm:mt-2 text-sm">
              <a href="https://discord.com/users/purpos_e" className="transition-transform hover:scale-110" style={{ color: '#5865F2' }}>
                <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
              <a href="https://github.com/yourprofile" className="transition-transform hover:scale-110" style={{ color: darkMode ? '#ffffff' : '#181717' }}>
                <Github size={18} className="sm:w-5 sm:h-5" strokeWidth={1.5} />
              </a>
              
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-700'} text-sm font-bold`}><OnlineStatus /></p>
            </div>
          </div>
          <div className='relative'>
            <button
              onClick={() => copyToClipboard(window.location.href, 'website-link')}
              className="transition-transform hover:scale-110"
            >
              <Link
                size={24}
                className={`w-4  h-4 md:w-4 md:h-4 ${darkMode ? 'text-white' : 'text-black'}`}
                strokeWidth={1.5}
              />
            </button>
            {copiedId === 'website-link' && (
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-gray-900 text-white px-2 py-1 rounded whitespace-nowrap">
                Copied!
              </span>
            )}
          </div>
        </div>
      </Fade>

      <div className="flex flex-col w-full justify-center items-start">
        <Fade direction="up" delay={400} duration={1200} triggerOnce>
          <h1 className="text-[16px] font-bold mb-6 flex items-center justify-start gap-2">
            <Newspaper size={16} />
            Scripts
          </h1>
        </Fade>

        <Fade direction="up" delay={600} duration={1200} triggerOnce>
          <List />
        </Fade>
      </div>

      <div className="fixed bottom-10 left-0 right-0 z-50">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;