import React from 'react'

const singleService = ({logo,text,date}) => {
    return (
        <div className='flex mb-5'>
            <img className='ml-3' src={logo}/>

                <div className='flex flex-col text-sm text-gray-600'>
                    <span className='mb-2'>{text}</span>
                    <span>تا تاریخ {date}</span>
                </div>

            </div>
    )
}

export default singleService