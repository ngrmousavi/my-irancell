import React from 'react'

const singleRecommend = ({exp,name,discount,price}) => {
    return (
        <tr>
            <td>{exp}</td>
            <td>{name}</td>
            <td className='font-bold'>{discount}</td>
            <td className='font-bold'>{price}</td>
            <td><button className='bg-[#FDC816] font-bold text-white px-4 py-1 rounded'>خرید</button></td>
        </tr>
    )
}

export default singleRecommend