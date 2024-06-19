import { useContext } from "react";
import { context } from "../../Context/Theme";
import account from "../../assets/Images/account.png";
import add from "../../assets/Images/add-user.png";
import bell from "../../assets/Images/bell.png";
function AppBar() {
  const { dark, setDark } = useContext(context);
  const handleDarkMode = () => {
    setDark(prevDark => !prevDark);
  };
  return (
    <div
      className={` ${
        dark ? "bg-[#131416]" : "bg-[#6fccdd]"
      } flex justify-between items-center  p-4 md:p-6 lg:p-8 border-4 border-white rounded-xl `}
    >
      <img className="w-6 cursor-pointer" src={account} alt="" />
      <img className="w-6 cursor-pointer" src={add} alt="" />
      <img className="w-6 cursor-pointer" src={bell} alt="" />
      <div className={`${dark ? 'bg-gray-500' : 'bg-white'} flex justify-end items-center p-[1px]  rounded-md  `}>
        <div
          onClick={handleDarkMode}
          className={` h-6 w-12   cursor-pointer  ${
            dark && "transition-all   duration-1000"
          }`}
          title="Dark Mode"
        >
          {!dark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className={`w-6 transition-all bg-black rounded-md translate-x-6 duration-200`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="black"
              className="w-6 bg-white rounded-md"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"

              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

export default AppBar;
