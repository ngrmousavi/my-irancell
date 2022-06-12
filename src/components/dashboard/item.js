import React from 'react'

const item = ({logo,text}) => {
    return (
        <div className='flex items-center mb-3'>
            <img className='ml-1' src={logo}></img>
            <h2 className='text-sm text-gray-400 cursor-pointer'>{text}</h2>
        </div>
    )
}

export default item