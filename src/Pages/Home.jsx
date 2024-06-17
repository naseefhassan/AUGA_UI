import AppBar from '../Components/Bar/AppBar'
import SideBar from '../Components/Bar/SideBar'
import Header from '../Components/Header/Header'
import TopImage from '../assets/Images/Light_Mode_TopImage.svg'
import BackgroundImg from '../assets/Images/Light_Mode_Background.svg'
function Home() {
  return (
    <div style={{backgroundImage:`url(${BackgroundImg})`}} className=' w-screen h-screen bg-no-repeat relative flex bg-cover mx-auto  '>
        {/* <div className='flex justify-between'>
           <div className='w-1/2'> <Header/></div>
           <div className='w-5/12'>  <AppBar/></div>
        </div>
        <div className='flex absolute bottom-0'>
            <div className='w-10 h-full'><SideBar/></div>
        </div>
        <img className='w-5/12 absolute right-0 z-10 top-[85px]' src={TopImage} alt="" /> */}
    </div>
  )
}

export default Home