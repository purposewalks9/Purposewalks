const Card = ({ title, description, darkMode, onClick }) => {
    return (
        <div

         onClick={onClick}
  
            className={`lg:w-100 w-80 rounded-xl p-2 
                transition-all duration-300 ease-out
                transform hover:-translate-y-1 hover:scale-[1.02]

                ${darkMode 
                    ? 'cursor-pointer ' 
                    : 'cursor-pointer'
                }
            `}
        >
            <h2 className={`text-sm font-bold mb-2 
                transition-colors duration-300 
                ${darkMode ? 'text-white' : 'text-black'}
            `}>
                {title}
            </h2>

            <p className={`text-sm font-bold
                transition-colors duration-300
                ${darkMode ? 'text-gray-400' : 'text-gray-600'}
            `}>
                {description}
            </p>
        </div>
    );
};

export default Card;
