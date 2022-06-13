import React from 'react'

const item = ({children,text}) => {
    return (
        <div className='flex items-center mb-3 relative'>
            {children}
            <h2 className='text-sm text-gray-400 cursor-pointer'>{text}</h2>
        </div>
    )
}

export default item