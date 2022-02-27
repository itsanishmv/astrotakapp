import React from 'react'

function Info() {
  return (
      <div className='flex text-xs w-11/12 justify-between border-[1px] items-center text-[#979797] p-5 rounded ml-2 shadow-md bg-white'>
          <p>Anish</p>
          <p>24-4-1997</p>
          <p>12:00</p>
          <p>Brother</p>
          <img className='h-5'  style={{ filter: "invert(50%) sepia(62%) saturate(1851%) hue-rotate(2deg) brightness(106%) contrast(104%)" }} src="edit.png" alt="edit" />
          <img className='h-5'  src="delete.png" alt="delete" />
      </div>
  )
}

export default Info