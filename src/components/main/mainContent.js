import React from 'react';
import Vector from '../../images/Vector.png';
import Chart from './chart';
import RecommendedPackages from './RecommendedPackages/RecommendedPackages';

const mainContent = () => {
    return (
        <div className='p-5 bg-[#E5E5E5]'>
            <h2 className='font-bold mb-5'>صفحه اصلی</h2>
            <img className='w-full' src={Vector}></img>
            <div className='w-full h-[320px] p-4 bg-white my-10 rounded-[16px]'>
                <h2 className='font-bold'>نمودار میزان مصرف کل</h2>
                <Chart/>
            </div>
            
            <RecommendedPackages/>
        </div>
    )
}

export default mainContent