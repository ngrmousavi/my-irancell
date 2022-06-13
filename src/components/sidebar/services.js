import React from 'react';
import Service1 from '../../images/svg/service1.svg';
import Service2 from '../../images/svg/service2.svg';
import SingleService from './singleService';
import ActiveServices from '../../images/activeServices.png'

const services = () => {
    return (
        <div>
            <img className='mb-5' src={ActiveServices}/>
            <SingleService logo={Service1} text="بسته پیامک هفتگی" date="31 خرداد 1400" />
            <SingleService logo={Service2} text="بسته اینترنت ماهانه" date="12 خرداد 1400" />
        </div>
    )
}

export default services