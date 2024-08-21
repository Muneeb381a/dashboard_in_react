import { IoMoon, IoSunny } from "react-icons/io5";
import React from "react";
import Menu from "./components/Menu";

function App() {
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    // Apply or remove the dark class based on the state
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  const darkModeHandler = () => {
    setDark((prevDark) => !prevDark);
  };

  return (
    <div className={`bg-yellow-100 dark:bg-gray-800 min-h-screen`}>
      <button
        onClick={darkModeHandler}
        className="p-2 bg-gray-200 dark:bg-gray-700 rounded"
      >
        {dark ? <IoSunny /> : <IoMoon />}
      </button>
      <div className="dark:bg-indigo-950 w-[255px] h-full ml-2 bg-blue-800">
        <span className="text-center text-orange-500 flex items-center justify-center font-bold text-lg">
          School Management System
        </span>
        <Menu />
      </div>
    </div>
  );
}

export default App;
