import Home from "./pages/home";
import Blog from "./pages/Scripts.jsx";
import Craft from "./pages/craft";
import Search from "./pages/Contact.jsx";
import Ubuntu from "./pages/blog/ubuntu.jsx";
import Sales from "./pages/blog/sales.jsx";
import Salary from "./pages/blog/salary.jsx";
import Lyrics from "./pages/blog/lyrics.jsx";
import React, { useContext } from 'react';
import { ThemeContext} from './content/themecontext.jsx';
import "./App.css";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";


const App = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`${darkMode ? 'bg-black text-white min-h-screen' : ' text-black min-h-screen'}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/craft" element={<Craft />} />
          <Route path="/search" element={<Search />} />
          <Route path="/blog/ubuntu" element={<Ubuntu />} />
          <Route path="/blog/sales" element={<Sales />} />
          <Route path="/blog/salary" element={<Salary />} />
          <Route path="/blog/lyrics" element={<Lyrics />} />
        </Routes>
      </BrowserRouter>
    
    </div>
   
  );
};

export default App;