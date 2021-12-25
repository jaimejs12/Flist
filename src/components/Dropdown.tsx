import React, { useState } from 'react'

export function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ['Netflix', 'HBO', 'Disney +'];
  return (
    <div className='z-10 text-gray-400 text-sm bg-gray-800 pt-2 pb-8 w-max h-full relative border-2 border-gray-800 rounded-md cursor-pointer'>
      <div className='justify-between px-2 items-center flex z-10' onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <svg className="fill-current h-6 w-6 pl-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
      {isActive && (
        <div className='absolute w-full pt-4'>
          <div className='bg-gray-800 border rounded-t-md rounded-b-md border-transparent'>
            {options.map(option => (
              <div onClick={e => {
                setSelected(option)
                setIsActive(false)
              }} className='pl-2 pb-2 pt-1 hover:bg-gray-900'>
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
