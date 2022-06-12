import React from 'react';
import { LineChart, AreaChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const chart = () => {
        const data = [
    {
        name: '7/1',
        uv: 300,
        pv: 200,
        amt: 1000,
    },
    {
        name: '7/10',
        uv: 800,
        pv: 1398,
        amt: 2210,
    },
    {
        name: '7/18',
        uv: 400,
        pv: 9800,
        amt: 2290,
    },
    {
        name: '7/25',
        uv: 300,
        pv: 100,
        amt: 2000,
    },
    {
        name: '7/28',
        uv: 400,
        pv: 300,
        amt: 2181,
    }
];
    return (   
            <ResponsiveContainer className='' width="100%" height="100%">
                
                <AreaChart
                    width={900}
                    height={100}
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
            </ResponsiveContainer>      
        
        
    )
}

export default chart