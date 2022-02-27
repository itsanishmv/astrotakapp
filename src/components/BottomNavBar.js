import React,{useContext} from 'react'
import { dataSharingPoint } from './store'

function BottomNavBar() {

    const {Selectedcategory} = useContext(dataSharingPoint)
  return (
      <div className='flex justify-between items-center border-2 p-2 h-14 fixed  bottom-0 left-0 right-0 z-30 bg-white'>

<div className='fixed bottom-14 p-2 px-3 bg-[#4B60BC] rounded-xl left-0 w-screen flex justify-between items-center'>
             <h1 className='text-white text-sm px-1'>₹150(1 Question on {Selectedcategory}) </h1> 
              <button className='border-2 bg-white h-7 text-[#4B60BC] rounded px-5 text-sm'>Ask now</button>
         </div>


          <div className='flex flex-col items-center '>
            <img className='h-6' style={{ filter: "invert(100%) sepia(1%) saturate(7463%) hue-rotate(185deg) brightness(120%) contrast(52%)" }} src="home.png" alt="home" />
            <div className='text-xs font-light '>Home</div>
          </div>
          <div className='flex flex-col items-center '>
              <img className='h-6' src="talk.png" alt="talk" />
              <div className=' text-xs font-light'>Talk</div>
          </div>
          <div className='flex flex-col items-center '>
              <img className='h-6 ' style={{ filter: "invert(50%) sepia(62%) saturate(1851%) hue-rotate(2deg) brightness(106%) contrast(104%)" }} src="ask.png" alt="ask" />
              <div className=' text-xs font-light text-[#FF944D]'>Ask Questions</div>
          </div>
          <div className='flex flex-col items-center'>
              <img className='h-6' src="reports.png" alt="reports" />
              <div className=' text-xs font-light '>Reports</div>
          </div>
          <div className='flex flex-col items-center '>
              <img className='h-6' src="chat.png" alt="chat" />
              <div className=' text-xs font-light'>Chat</div>
          </div>
         
         
          
     </div>
  )
}

export default BottomNavBar