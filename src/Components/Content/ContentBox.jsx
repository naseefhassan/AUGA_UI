import { useContext } from "react"
import { context } from "../../Context/Theme"

function ContentBox({id, rate, date, details, className, value, svg}) {
  const {dark} = useContext(context)
  return (
    <div className={`${dark ? 'bg-black text-white' : 'bg-white'} sm:w-[480px] p-6  rounded-lg opacity-60 flex justify-between z-10`}>
        <div className="flex flex-col gap-3"> 
        <div className="flex gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 flex">
         <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg> : <h1>{id} </h1>
        </div>

        <div className=" flex gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg> : <h1>{rate} </h1>
        </div>

       <div className=" flex gap-4">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>: <h1>{date}</h1>
       </div>

       <div className=" flex gap-4">
       < svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>: <h1> {details}</h1>
       </div>
        </div>

        <div className="flex flex-col justify-between">
        <button className={`${className} rounded-full text-white p-2 uppercase text-sm` }>
        <div className="flex gap-2 items-center">
        <img className="w-4 h-4" src={svg} alt=""   />
        <h1> {value}</h1>
        </div>
        </button>       
        <h1 className="text-sm text-blue-600 font-semibold cursor-pointer">VIEW ORDERS</h1>
        </div>
    </div>
  )
}

export default ContentBox