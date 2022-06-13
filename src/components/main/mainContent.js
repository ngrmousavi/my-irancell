import React from 'react';
import Vector from '../../images/Vector.png';
import Chart from './chart';
import RecommendedPackages from './RecommendedPackages/RecommendedPackages';
import Text3 from '../../images/text3.png';
import Title from '../../images/Titile.png';
import BannerText from '../../images/svg/bannerText.svg';
import ChartTitle from '../../images/chartTitle.png'

const mainContent = () => {
    return (
        <div className='p-5 bg-[#E5E5E5]'>
            <img className='mb-5' src={Title}></img>
            <div className='relative'>
                <img className='w-full' src={Vector}></img>
                <img className='absolute top-[42px] left-[29px]' src={Text3}></img>
                <img className='absolute bottom-[18px] left-[29px]' src={BannerText}></img>
            </div>
            
            <div className='w-full h-[380px] p-4 bg-white my-10 rounded-[16px]'>
                <img src={ChartTitle}/>
                <Chart/>
            </div>
            
            <RecommendedPackages/>
        </div>
    )
}

export default mainContent