import { PieChart, Pie, Cell } from 'recharts';
import { useLoaderData } from 'react-router-dom';
import { getStorageProductApplication } from '../../utility/utility';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const Statistics = () => {

    const picData = useLoaderData();
    const localData = getStorageProductApplication();

    const data = [
        { name: 'Group A', value: picData.length },
        { name: 'Group B', value: localData.length },
    ];
    // console.log(localData, localData);

    return (
        <div className=''>
            <PieChart width={1000} height={600}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
            <h3>Your Donation</h3>
        </div>
    );
};

export default Statistics;