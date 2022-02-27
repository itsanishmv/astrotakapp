import React,{useContext} from 'react'
import { dataSharingPoint } from './store'

function TopNavbar() {
  const { openProfile, setOpenProfile } = useContext(dataSharingPoint)
  
  return (
      <div className='flex h-15 border-gray-900 justify-between items-center px-4 py-1  border-5 fixed top-0  left-0 right-0 w-[100%] z-30 bg-white'>
      {openProfile ? <img className='h-6 ' onClick={()=>setOpenProfile(false)} style={{filter: "invert(84%) sepia(23%) saturate(3381%) hue-rotate(317deg) brightness(100%) contrast(102%)"}} src="backIcon.png" alt="go back" /> : <img className='h-5' src="hamburger.png" alt="hamburger" />} 
      
          <img className=' h-16  -mt-2' src="icon.png" alt="icon" />
         <img onClick={()=>setOpenProfile(true)} className='h-6' src="profile.png" alt="profile" />
      {
        !openProfile &&
        <div className='fixed top-14 p-2 px-3 bg-[#4B60BC]  left-0 w-screen flex justify-between items-center'>
             <h1 className='text-white font-semibold px-1'>Wallet balance: ₹0</h1> 
              <button className='border-2 bg-white h-7 text-[#4B60BC] rounded px-5 text-sm'>Add money</button>
         </div>
      }
         
      </div>
  )
}

export default TopNavbar