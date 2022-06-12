import React from 'react';
import Logo from '../../images/home.svg'

const services = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>خدمات فعال</h2>
            <div className='flex mb-5'>
                <img src={Logo} className='ml-5'></img>

                <div className='flex flex-col text-sm text-gray-600'>
                    <span className='mb-2'>بسته پیامک هفتگی</span>
                    <span>تا تاریخ 31 خرداد1400</span>
                </div>

            </div>

            <div className='flex'>
                <img src={Logo} className='ml-5'></img>

                <div className='flex flex-col text-sm text-gray-600'>
                    <span className='mb-2'>بسته پیامک هفتگی</span>
                    <span>تا تاریخ 31 خرداد1400</span>
                </div>
            </div>
        </div>
    )
}

export default services