import AppBar from '../Components/Bar/AppBar'
import SideBar from '../Components/Bar/SideBar'
import Header from '../Components/Header/Header'
import TopImage from '../assets/Images/Light_Mode_TopImage.svg'
import BackgroundImg from '../assets/Images/Light_Mode_Background.svg'
import ContentBox from '../Components/Content/ContentBox'
import checked from '../assets/Images/checked.png'
import deleted from '../assets/Images/delete.png'
import progress from '../assets/Images/work-in-progress.png'
import warning from '../assets/Images/warning.png'

function Home() {
  return (
    <div style={{backgroundImage:`url(${BackgroundImg})`}} className=' w-screen h-screen bg-no-repeat relative flex bg-cover mx-auto '>
        <div className='flex justify-between  w-full h-28'>
           <div className='w-7/12 h-28  '> <Header/></div>
           <div className=' w-2/5'>  <AppBar/></div>
        </div>
        <div className='flex absolute bottom-0 w-full justify- '>
            <div className='w-10 h-full '><SideBar/></div>
            <div className='mx-[130px] flex flex-wrap gap-5 '>  
                <ContentBox Id={'253645985425215524-500L'} Rate={2500} date={'2024-08-20-12.20.13.00'} details={'2 days ago'} Value={'Completed'} className={'bg-green-900'} svg={checked}/>              
                <ContentBox Id={'253645985425215524-500L'} Rate={2500} date={'2024-08-20-12.20.13.00'} details={'2 days ago'} Value={'Cancelled'} className={'bg-red-600'} svg={deleted}/>              
                <ContentBox Id={'253645985425215524-500L'} Rate={2500} date={'2024-08-20-12.20.13.00'} details={'2 days ago'} Value={'in progress'} className={'bg-blue-500'} svg={progress}/>              
                <ContentBox Id={'253645985425215524-500L'} Rate={2500} date={'2024-08-20-12.20.13.00'} details={'2 days ago'} Value={'pending'} className={'bg-orange-400'} svg={warning}/>              
            </div>

        </div>
       
        <img className='w-2/5 absolute right-0 top-[103px]' src={TopImage} alt="" />
    </div>
  )
}

export default Home