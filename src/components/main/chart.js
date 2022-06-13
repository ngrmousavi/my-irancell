import React from 'react';
import { AreaChart, Area, XAxis, YAxis } from 'recharts';

const chart = () => {
    const data = [
        {
            name: '7/1',
            uv: 300
        },
        {
            name: '7/10',
            uv: 800
        },
        {
            name: '7/18',
            uv: 400
        },
        {
            name: '7/25',
            uv: 300
        },
        {
            name: '7/28',
            uv: 400
        }
    ];

    return (   
        <AreaChart
            width={690}
            height={320}
            data={data}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
            }}
        >
            
            <XAxis dataKey="name" />
            <YAxis />
            
            <Area type="monotone" dataKey="uv" stroke="#FDC816" strokeWidth={5} fill="#FDC816" />
        </AreaChart>
    )
}

export default chart