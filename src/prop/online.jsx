import { useEffect, useState } from "react";

const OnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        await fetch("https://www.gstatic.com/generate_204", {
          method: "GET",
          mode: "no-cors",
        });
        setIsOnline(true);
      } catch (error) {
        setIsOnline(false);
      }
    };

    // Check now
    checkConnection();

    // Check every 10 seconds
    const interval = setInterval(checkConnection, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 text-sm font-semibold">
      <span
        className={`w-3 h-3 rounded-full ${
          isOnline ? "bg-green-500 animate-pulse" : "bg-red-500"
        }`}
      ></span>

      <span className={`${isOnline ? "text-green-500" : "text-red-500"}`}>
        {isOnline ? "Your Online" : "Your Offline"}
      </span>
    </div>
  );
};

export default OnlineStatus;
