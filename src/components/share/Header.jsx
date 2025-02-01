import React from 'react'

function Header({title}) {
  return (
    <div className='bg-gray-800/50 text-gray-100 p-4 border-b border-gray-700'>
        <div className='max-w-7xl mx-auto py-4 px-4 lg:px-8'>
            <h1 className='text-2xl font-semibold text-gray-100'>{title}</h1>
        </div>
    </div>
  )
}

export default Header