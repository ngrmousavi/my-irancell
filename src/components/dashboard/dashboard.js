import React from 'react';
import IrancellLogo from '../../images/irancleLogo 1.png';
import Rectangle from '../../images/Rectangle 4.png';
import Text from '../../images/text.png';
import {HiOutlineSearch} from 'react-icons/hi';
import Home from '../../images/home.svg';
import Square from '../../images/square.svg';
import Internet from '../../images/internet.svg';
import Item from './item'

const dashboard = () => {
    return (
        <div className='w-[279px] bg-[#FFFFFF] p-5 flex flex-col items-center'>

            {/*logo*/}
            <div className='flex mb-10 relative'>
                <img className='w-[30px] h-[27px] ml-2' src={IrancellLogo}></img>
                <div>
                    <img className='w-[108px] h-[26px] ' src={Rectangle}></img>
                    <img className='w-[81px] h-[20px] absolute top-[3px] left-[12px]' src={Text}></img>
                </div>
            </div>
            

            {/*search box*/}
            <div className='relative mb-10'>
                <input className='border-[1px] border-[#8080803b] p-[5px] text-sm outline-none rounded-md ' placeholder='جستجو' type="text"></input>
                <HiOutlineSearch color='#8080803d' className='absolute left-[13px] top-[9px] cursor-pointer'/>
            </div>


            <div>

                <div className='mb-5'>
                    <div className='flex items-center mb-3'>
                        <img className='ml-1' src={Home}></img>
                        <h2>صفحه اصلی</h2>
                    </div>
                </div>
                

                <span className='text-gray-300 text-[12px]'>سرویس ها</span>

                <div className='mt-5'>
                    <Item logo={Home} text="شارژ سیمکارت"/>
                    <Item logo={Home} text="اینترنت"/>
                    <Item logo={Home} text="کارکرد و فروش"/>
                    <Item logo={Home} text="خدمات"/>
                </div>

                <span className='text-gray-300 text-[12px]'>مدیریت</span>
                <div className='mt-5 mb-10'>
                    <Item logo={Home} text="مدیریت خدمات"/>
                    <Item logo={Home} text="مدیریت سیمکارت"/>
                </div>

                <div className='mt-5'>
                    <Item logo={Home} text="سوالات متداول"/>
                    <Item logo={Home} text="ارتباط با ما"/>
                </div>
                

            </div>
        </div>
    )
}

export default dashboard