import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Label, ResponsiveContainer } from 'recharts';
const data = [
    { name: 'JavaScript', level: 13 },
    { name: 'HTML', level: 11 },
    { name: 'CSS', level: 12 },
    { name: 'React', level: 12 },
    { name: 'Redux', level: 11 },
    { name: 'Express', level: 8 },
    { name: 'Node', level: 8 },
    { name: 'PostgreSQL', level: 9 },
    { name: 'Git', level: 12 },
    { name: 'MongoDB', level: 8 },
    { name: 'AWS', level: 8 },
    { name: 'Python', level: 13 }
];


class BarGraph extends React.Component {
    render() {
        return (
            <div className="barChartWrap">
                <ResponsiveContainer width={'100%'} height={500}>
                    <BarChart data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <XAxis type="category" dataKey="name" interval={0} />
                        <YAxis domain={[0, 20]} ticks={['']}>
                            <Label value="Expert" position="insideTopLeft" />
                            <Label value="Beginner" offset={-5} position="insideBottomLeft" />
                        </YAxis>
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Bar dataKey="level" fill="#301575" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default BarGraph;
