import React from 'react';
import './box.css';
import Services from './services';
import Irancell from '../../images/irancleLogo 2.png';
import FooterText from '../../images/text2.png';
import Remaining from '../../images/remaining.png';

const box = () => {
    return (
        <div className='bg-[#FFFCEF] min-h-[100vh] py-[23px] px-5 rounded-[13px] flex flex-col '>
            <img src={Remaining} className='mb-4 mx-auto'/>

            <div className='w-[150px] relative mb-5 mx-auto'>
                <svg className='w-[150px]'>
                    <circle  cx="80" cy="80" r="60"></circle>
                    <circle  cx="80" cy="80" r="60"></circle>
                </svg>
                <h2 className='text-[#00A3FF] font-bold absolute text-sm w-[94px] top-[70px] right-[28px]'>60000 تومان</h2>
            </div>

            <div className='w-[139px] h-[29px] bg-[#FDC816] rounded-[5px] py-1 mb-10 mx-auto'>
                <h2 className='text-white w-[139px] h-[29px] text-[12px] text-center font-bold'>سیمکارتت رو شارژ کن!</h2>
            </div>

            <Services/>

            <div className='bg-white w-[262px] h-[104px] rounded-[8px] mt-40 flex items-center align-middle justify-between px-3'>
                <div className='w-[160px]'>
                    <img src={FooterText}/>
                </div>
                <div className='w-[59px] h-[54px]'>
                    <img src={Irancell}/>
                </div>
            </div>
            
        </div>
    )
}

export default box