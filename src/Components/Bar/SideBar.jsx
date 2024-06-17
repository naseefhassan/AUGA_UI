import menu from '../../assets/Images/menu (2).png'
import setting from '../../assets/Images/settings.png'
import location from '../../assets/Images/rent-a-car.png'
import logout from '../../assets/Images/logout.png'
import sheet from '../../assets/Images/sheet.png'
import line3 from '../../assets/Images/3line.png'

function SideBar() {
  return (
    <div className="bg-[#6fccdd] flex flex-col justify-between items-center p-7 h-96 w-24 rounded-lg ">
       <img className='w-6 cursor-pointer' src={line3} alt="" />
       <img className='w-6 cursor-pointer' src={menu} alt="" />
       <img className='w-6 cursor-pointer' src={sheet} alt="" />
       <img className='w-6 cursor-pointer' src={location} alt="" />
       <img className='w-6 cursor-pointer' src={setting} alt="" />
       <img className='w-6 cursor-pointer' src={logout} alt="" />
    </div>
  );
}

export default SideBar;
