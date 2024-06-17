import account from '../../assets/Images/account.png'
import add from '../../assets/Images/add-user.png'
import bell from '../../assets/Images/bell.png'
function AppBar() {
  return (
    <div className="bg-[#6fccdd] flex justify-between p-9 border-4 border-white rounded-xl ">
       <img className='w-6 cursor-pointer' src={account} alt="" />
       <img className='w-6 cursor-pointer' src={add} alt="" />
       <img className='w-6 cursor-pointer' src={bell} alt="" />
       <img className='w-6 cursor-pointer' src={account} alt="" />
    </div>
  )
}

export default AppBar