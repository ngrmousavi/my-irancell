import React from 'react';
import Profile from './profile';
import Box from './box';

const sidebar = () => {
    return (
        <div className='bg-[#E5E5E5] w-[331px] p-5'>
            <Profile/>
            <Box/>
        </div>
    )
}

export default sidebar