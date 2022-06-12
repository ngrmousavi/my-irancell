import React from 'react';
import Vector from '../../images/Vector.png';
import Chart from './chart';
import RecommendedPackages from './RecommendedPackages/RecommendedPackages';

const mainContent = () => {
    return (
        <div className='p-5 bg-[#E5E5E5]'>
            <h2 className='font-bold mb-5'>صفحه اصلی</h2>
            <img src={Vector}></img>
            <Chart/>
            <RecommendedPackages/>
        </div>
    )
}

export default mainContent