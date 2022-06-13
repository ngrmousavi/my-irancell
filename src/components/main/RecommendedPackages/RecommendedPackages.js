import React from 'react';
import './styles.css';
import SingleRecommend from './singleRecommend';
import Recommended from '../../../images/recommended.png'

const RecommendedPackages = () => {
    return (
        <div className='bg-white p-5 rounded-md'>
        <img className='mb-5' src={Recommended}/>
            <table >
                <tr>
                    <th>تاریخ انقضا بسته</th>
                    <th>نام بسته</th>
                    <th>تخفیف</th>
                    <th>قیمت</th>
                    <th></th>
                </tr>
                <SingleRecommend exp="14 شهریور 1401" name="بسته اینترنت 3 ماهه" discount="20%" price="130000"/>
                <SingleRecommend exp="12 خرداد 1401" name="بسته اینترنت 3 ماهه" discount="45%" price="45000"/>
                <SingleRecommend exp="15 تیر 1401" name="بسته اینترنت 3 ماهه" discount="15%" price="50000"/>
            
                
            </table>
        </div>
    )
}

export default RecommendedPackages