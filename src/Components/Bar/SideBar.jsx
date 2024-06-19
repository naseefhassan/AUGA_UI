import menu from "../../assets/Images/menu (2).png";
import setting from "../../assets/Images/settings.png";
import location from "../../assets/Images/rent-a-car.png";
import logout from "../../assets/Images/logout.png";
import sheet from "../../assets/Images/sheet.png";
import { useContext, useState } from "react";
import { context } from "../../Context/Theme";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SideBar() {
  const { dark } = useContext(context);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const handleLogout = () => {
    toast.success('Successfully Logouted');
  };

  return (
    <div className="relative">
      <div
        className={`${
          dark ? "bg-[#131416]" : "bg-[#6fccdd]"
        } flex  justify-start ml-1   h-96 ${
          isExpanded ? "w-[162px]" : "w-24"
        } rounded-lg transition-all duration-300`}
      >
        <div className="flex flex-col justify-evenly items-center w-10 ml-6 text-white font-semibold">
          <div className="flex items-center gap-3">
            <img
              onClick={handleExpand}
              className="w-6 cursor-pointer my-2"
              src={menu}
              alt="menu"
            />
            <Link to={"/more"}>
              {isExpanded && <h1 className="cursor-pointer">More</h1>}
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <img
              onClick={handleExpand}
              className="w-6 cursor-pointer my-2"
              src={sheet}
              alt="sheet"
            />
            <Link to={"/more"}>
              {isExpanded && <h1 className="cursor-pointer">Details</h1>}
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <img
              onClick={handleExpand}
              className="w-6 cursor-pointer my-2"
              src={location}
              alt="location"
            />
            <Link to={"/more"}>
              {isExpanded && <h1 className="cursor-pointer">Location</h1>}
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <img
              onClick={handleExpand}
              className="w-6 cursor-pointer my-2"
              src={setting}
              alt="setting"
            />
            <Link to={"/more"}>
              {isExpanded && <h1 className="cursor-pointer">Setting</h1>}
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <img
              onClick={handleExpand}
              className="w-6 cursor-pointer my-2"
              src={logout}
              alt="logout"
            />
             {isExpanded && <h1 onClick={handleLogout} className="cursor-pointer">Logout</h1>} 
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default SideBar;
