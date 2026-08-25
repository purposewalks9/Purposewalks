"use client";

interface CardProps {
  title: string;
  description: string;
  darkMode: boolean;
  onClick?: () => void;
}

const Card = ({ title, description, darkMode, onClick }: CardProps) => {
  return (
    <div
      onClick={onClick}
      className={`lg:w-100 w-80 flex flex-col gap-y-1.5 rounded-xl p-3
        transition-all duration-300 ease-out
        transform hover:-translate-y-1 hover:scale-[1.02]
        cursor-pointer
      `}
    >
      <h2
        className={`text-sm font-bold leading-snug line-clamp-1
          transition-colors duration-300
          ${darkMode ? "text-white" : "text-black"}
        `}
      >
        {title}
      </h2>

      <p
        className={`text-sm font-medium leading-relaxed line-clamp-2
          transition-colors duration-300
          ${darkMode ? "text-gray-400" : "text-gray-600"}
        `}
      >
        {description}
      </p>
    </div>
  );
};

export default Card;
