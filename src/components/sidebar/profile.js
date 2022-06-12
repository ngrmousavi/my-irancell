import React from 'react';
import Ellipse from '../../images/Ellipse 2.png';
import Photo from '../../images/Ellipse 1.png'

const profile = () => {
    return (
        <div className='bg-white p-3 rounded-[25px] flex mb-[23px]'>

            <div className='relative ml-3'>
                <img src={Ellipse}></img>
                <img className='absolute top-[6px] right-[7px]' src={Photo}></img>
            </div>

            <div className='flex flex-col items-center text-sm text-[#818181]'>
                <span className='mb-1'>سلام حسین احمد پناه</span>
                <span>+98 012367548</span>
            </div>
            
        </div>
    )
}

export default profile