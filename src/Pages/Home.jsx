import { useContext } from "react";
import AppBar from "../Components/Bar/AppBar";
import SideBar from "../Components/Bar/SideBar";
import Header from "../Components/Header/Header";
import TopImage from "../assets/Images/Light_Mode_TopImage.svg";
import DarkImage from "../assets/Images/Dark_Mode_TopImage.svg";
import BackgroundImg from "../assets/Images/Light_Mode_Background.svg";
import DarkBgImg from "../assets/Images/Dark_Mode_Background.svg";
import ContentBox from "../Components/Content/ContentBox";
import checked from "../assets/Images/checked.png";
import deleted from "../assets/Images/delete.png";
import progress from "../assets/Images/work-in-progress.png";
import warning from "../assets/Images/warning.png";
import { context } from "../Context/Theme";

const contentData = [
  {
    id: "253645985425215523-500L",
    rate: 2500,
    date: "2024-08-20-12.20.13.00",
    details: "2 days ago",
    value: "Completed",
    className: "bg-green-900",
    svg: checked,
  },
  {
    id: "253645985425215524-500L",
    rate: 2500,
    date: "2024-08-20-12.20.13.00",
    details: "2 days ago",
    value: "cancelled",
    className: "bg-red-600",
    svg: deleted,
  },
  {
    id: "253645985425215525-500L",
    rate: 2500,
    date: "2024-08-20-12.20.13.00",
    details: "2 days ago",
    value: "in-progress",
    className: "bg-blue-600",
    svg: progress,
  },
  {
    id: "253645985425215526-500L",
    rate: 2500,
    date: "2024-08-20-12.20.13.00",
    details: "2 days ago",
    value: "Pending",
    className: "bg-orange-500",
    svg: warning,
  },
];

function Home() {
  const {dark}= useContext(context)
  return (
    <div
      style={{ backgroundImage: `url(${dark ? DarkBgImg : BackgroundImg})`,backgroundRepeat: "no-repeat",}}
      className="w-screen h-screen relative flex mx-auto bg-cover"
    >
      <div className="flex justify-between w-full h-28">
        <div className="w-7/12 h-28">
          <Header />
        </div>
        <div className="w-2/5">
          <AppBar />
        </div>
      </div>
      <div className="flex absolute bottom-0 w-full justify-center">
        <div className="w-10 h-full">
          <SideBar />
        </div>
        <div className="mx-[130px] flex flex-wrap gap-5 mb-2 ">
          {contentData.map((item) => (
            <ContentBox
              key={item.id} 
              {...item}
            />
          ))}
        </div>
      </div>
      <img
        className="w-2/5 absolute right-0 top-[105px]"
        src={dark ? DarkImage : TopImage }
        alt=""
      />
    </div>
  );
}

export default Home;
